import os
import numpy as np
from PIL import Image

from tensorflow.keras.models import load_model
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

from class_names import CLASS_NAMES
from fruit_info import FRUIT_INFO


# ==========================
# Load Model
# ==========================

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "model",
    "eatwise_model.keras"
)

model = load_model(MODEL_PATH)


# ==========================
# Predict Image
# ==========================

def predict_image(image_path):

    # -----------------------
    # Read Image
    # -----------------------

    image = Image.open(image_path).convert("RGB")
    image = image.resize((224, 224))

    image = np.array(image)
    image = preprocess_input(image)
    image = np.expand_dims(image, axis=0)

    # -----------------------
    # Model Prediction
    # -----------------------

    prediction = model.predict(image, verbose=0)

    class_index = np.argmax(prediction)

    confidence = round(float(np.max(prediction) * 100), 2)

    class_name = CLASS_NAMES[class_index]

    # -----------------------
    # Get Fruit Information
    # -----------------------

    fruit = FRUIT_INFO[class_name]

    # -----------------------
    # Final Response
    # -----------------------

    return {

        "prediction": class_name,

        "fruit": fruit["fruit"],

        "condition": fruit["condition"],

        "confidence": confidence,

        "description": fruit["description"],

        "nutrition": fruit["nutrition"],

        "shelf_life": fruit["shelf_life"],

        "summary": fruit["summary"],

        "recommendations": fruit["recommendations"]

    }