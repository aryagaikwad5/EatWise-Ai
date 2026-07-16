import "./ActionButtons.css";
import { useNavigate } from "react-router-dom";

export default function ActionButtons() {

    const navigate = useNavigate();

    return (

        <div className="action-buttons">

            <button
                className="analyze-btn"
                onClick={() => navigate("/predict")}
            >
                🔄 Analyze Another
            </button>

        </div>

    );

}