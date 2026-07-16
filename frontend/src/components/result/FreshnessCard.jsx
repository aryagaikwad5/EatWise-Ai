import "./FreshnessCard.css";

export default function FreshnessCard({ result }) {

    const isFresh = result.condition === "Fresh";

    return (

        <div className="fresh-card">

            <h2>Freshness Score</h2>

            <div
                className="circle"
                style={{
                    background: isFresh ? "#22c55e" : "#ef4444"
                }}
            >
                {result.confidence}%
            </div>

            <h3
                style={{
                    color: isFresh ? "#16a34a" : "#dc2626"
                }}
            >
                {isFresh ? "🟢 Fresh" : "🔴 Rotten"}
            </h3>

            <p>
                Confidence : {result.confidence}%
            </p>

            <div className="progress">

                <div
                    className="progress-fill"
                    style={{
                        width: `${result.confidence}%`,
                        background: isFresh ? "#22c55e" : "#ef4444"
                    }}
                ></div>

            </div>

        </div>

    );

}