import "./Result.css";

import ResultHeader from "./ResultHeader";
import ResultImage from "./ResultImage";
import FreshnessCard from "./FreshnessCard";
import NutritionCard from "./NutritionCard";
import ShelfLifeCard from "./ShelfLifeCard";
import RecommendationCard from "./RecommendationCard";
import ActionButtons from "./ActionButtons";

export default function Result({ state }) {

  const result = state?.result;
  const image = state?.image;

  return (
    <section className="result-page">

      <div className="result-container">

        {/* Everything inside this div will become the PDF */}
        <div id="report">

          <ResultHeader />

          <div className="top-grid">

            <ResultImage image={image} />

            <FreshnessCard result={result} />

          </div>

          <RecommendationCard result={result} />

          <div className="bottom-grid">

            <NutritionCard result={result} />

            <ShelfLifeCard result={result} />

          </div>

        </div>

        {/* Buttons stay outside */}
        <ActionButtons />

      </div>

    </section>
  );
}