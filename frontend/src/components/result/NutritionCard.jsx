import "./NutritionCard.css";

export default function NutritionCard({ result }) {

    const valueColor =
        result.condition === "Fresh"
            ? "#16a34a"
            : "#9ca3af";

    return (

        <div className="nutrition-card">

            <h2>🥗 Nutrition</h2>

            <div className="nutrition-grid">

                <div>

                    <h3 style={{color:valueColor}}>

                        {result.nutrition.calories}

                    </h3>

                    <span>Calories</span>

                </div>

                <div>

                    <h3 style={{color:valueColor}}>

                        {result.nutrition.fiber}

                    </h3>

                    <span>Fiber</span>

                </div>

                <div>

                    <h3 style={{color:valueColor}}>

                        {result.nutrition.vitamin_c}

                    </h3>

                    <span>Vitamin C</span>

                </div>

                <div>

                    <h3 style={{color:valueColor}}>

                        {result.nutrition.potassium}

                    </h3>

                    <span>Potassium</span>

                </div>

            </div>

        </div>

    );

}