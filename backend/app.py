import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

from predict import predict_image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend")

app = Flask(
    __name__,
    static_folder=FRONTEND_DIR,
    static_url_path="",
    template_folder=FRONTEND_DIR
)

CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


@app.route("/")
def home():
    return app.send_static_file("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({
            "success": False,
            "message": "No image uploaded."
        }), 400

    image = request.files["image"]

    if image.filename == "":
        return jsonify({
            "success": False,
            "message": "No image selected."
        }), 400

    filename = secure_filename(image.filename)

    filepath = os.path.join(
        app.config["UPLOAD_FOLDER"],
        filename
    )

    image.save(filepath)

    try:

        print("Image received.")

        result = predict_image(filepath)

        print(result)

        if result["confidence"] < 70:

            return jsonify({
                "success": False,
                "message": "Low confidence. Please upload a clear image of Apple, Banana or Orange."
            })

        return jsonify({
            "success": True,
            "data": result
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500

    finally:

        if os.path.exists(filepath):
            os.remove(filepath)


print("Backend Folder :", os.path.abspath(os.path.dirname(__file__)))
print("Frontend Folder:", os.path.abspath("../frontend"))
print("Index Exists   :", os.path.exists("../frontend/index.html"))

if __name__ == "__main__":
    app.run(debug=True)