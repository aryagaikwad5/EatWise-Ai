import "./RecommendationCard.css";

export default function RecommendationCard({ result }) {

    const isFresh = result.condition === "Fresh";

    return (

        <div className="recommendation-card">

            <h2>🤖 AI Insight</h2>

            <div
                className="insight-status"
                style={{
                    background: isFresh ? "#ecfdf5" : "#fef2f2",
                    borderLeft: `5px solid ${isFresh ? "#22c55e" : "#ef4444"}`
                }}
            >

                {isFresh ? "🟢" : "🔴"}

                <span style={{marginLeft:"8px"}}>

                    Overall Condition:

                </span>

                <strong style={{marginLeft:"6px"}}>

                    {result.summary}

                </strong>

            </div>

            <ul className="insight-list">

                {result.recommendations.map((item,index)=>(

                    <li key={index}>

                        ✅ {item}

                    </li>

                ))}

            </ul>

        </div>

    );

}