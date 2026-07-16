import "./UploadCard.css";

import { useRef, useState } from "react";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

import apple from "../../../assets/images/apple.png";
import banana from "../../../assets/images/banana.png";
import orange from "../../../assets/images/orange.png";
import grapes from "../../../assets/images/grapes.png";
import kiwi from "../../../assets/images/kiwi.png";
import mango from "../../../assets/images/mango.png";
import pineapple from "../../../assets/images/pineapple.png";
import strawberry from "../../../assets/images/strawberry.png";
import pear from "../../../assets/images/pear.png";

function UploadCard() {

  const fileInputRef = useRef(null);

  const cameraInputRef = useRef(null);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


  const [dragActive, setDragActive] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);


  const handleFileChange = (e) => {

      const file = e.target.files[0];

      if (!file) return;

      if (!file.type.startsWith("image/")) {
          alert("Please select an image.");
          return;
      }

      if (file.size > 10 * 1024 * 1024) {
          alert("Maximum file size is 10 MB.");
          return;
      }

      setSelectedImage(file);

  };


  const handleDragOver = (e) => {
      e.preventDefault();
      setDragActive(true);
  };

  const handleDragLeave = () => {
      setDragActive(false);
  };

  const handleDrop = (e) => {

      e.preventDefault();

      setDragActive(false);

      const file = e.dataTransfer.files[0];

      if (!file) return;

      if (!file.type.startsWith("image/")) {
          alert("Please select an image.");
          return;
      }

      setSelectedImage(file);

  };

  const removeImage = () => {

      setSelectedImage(null);

      fileInputRef.current.value = "";

      if (cameraInputRef.current)
          cameraInputRef.current.value = "";

  };

    const handlePredict = async () => {

        if (!selectedImage) return;

        setLoading(true);

        const formData = new FormData();

        formData.append("image", selectedImage);

        try{

            const response = await api.post(
                "/predict",
                formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"
                    }
                }
            );

            navigate("/result", {
                state: {
                    result: response.data.data,
                    image: URL.createObjectURL(selectedImage)
                }
            });

        }

        catch(error){

            alert(
                error.response?.data?.message ||
                "Prediction failed."
            );

        }

        finally{

            setLoading(false);

        }

    };

  return (
    <section className="upload-section">

        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>

        <img src={apple} className="fruit apple" alt="" />
        <img src={banana} className="fruit banana" alt="" />
        <img src={orange} className="fruit orange" alt="" />
        
        <img src={kiwi} className="fruit kiwi" alt="" />
        <img src={mango} className="fruit mango" alt="" />
        <img src={pineapple} className="fruit pineapple" alt="" />
        <img src={strawberry} className="fruit strawberry" alt="" />
        <img src={pear} className="fruit pear" alt="" />

        <div className="blur1"></div>
        <div className="blur2"></div>
        <div className="blur3"></div>

        <div className="upload-card">

        <span className="upload-badge">
          🍎 AI Fruit Scanner
        </span>

        <h1>
          Upload Fruit Image
        </h1>

        <p>
          Upload a fruit image to discover freshness,
          nutrition and smart storage recommendations.
        </p>

        <div
            className={`drop-zone ${dragActive ? "drag-active" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >

          <div className="cloud">
            ☁️
          </div>

          <h2>
            Drag & Drop Fruit Image
          </h2>

          {
          selectedImage && (

          <div className="preview">

              <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="preview"
              />

              <p>{selectedImage.name}</p>

              <button
                  className="remove-btn"
                  onClick={removeImage}
              >
                  🗑 Remove Image
              </button>

          </div>

          )
          }

          <span>
            or choose one of the options below
          </span>

          <div className="button-group">

            <button
                className="camera-btn"
                onClick={() => cameraInputRef.current.click()}
            >
                📷 Capture
            </button>

            <input
                ref={cameraInputRef}
                hidden
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
            />

            <button
                className="upload-btn"
                onClick={() => fileInputRef.current.click()}
            >
                📂 Upload
            </button>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
            />

          </div>

          <small>
            JPG • JPEG • PNG • Maximum 10 MB
          </small>

        </div>

        <button
            className="predict-btn"
            disabled={!selectedImage || loading}
            onClick={handlePredict}
        >

            {
                loading
                ? "Analyzing..."
                : "🍏 Predict Freshness"
            }

        </button>

      </div>

    </section>
  );
}

export default UploadCard;