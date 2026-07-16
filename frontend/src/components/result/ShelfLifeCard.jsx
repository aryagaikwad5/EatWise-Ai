import "./Result.css";

export default function ShelfLifeCard({ result }) {

    const valueColor =
        result.condition === "Fresh"
            ? "#16a34a"
            : "#dc2626";

    return (

        <div className="info-card">

            <h2>⏳ Estimated Shelf Life</h2>

            <div className="nutrition-grid">

                <div className="nutrition-box">

                    <h3 style={{color:valueColor}}>
                        {result.shelf_life.room_temp}
                    </h3>

                    <p>Room Temp</p>

                </div>

                <div className="nutrition-box">

                    <h3 style={{color:valueColor}}>
                        {result.shelf_life.refrigerator}
                    </h3>

                    <p>Refrigerator</p>

                </div>

                <div className="nutrition-box">

                    <h3 style={{color:valueColor}}>
                        {result.shelf_life.after_cutting}
                    </h3>

                    <p>After Cutting</p>

                </div>

                <div className="nutrition-box">

                    <h3 style={{color:valueColor}}>
                        {result.shelf_life.best_taste}
                    </h3>

                    <p>Best Taste</p>

                </div>

            </div>

        </div>

    );

}