def get_recommendation(condition):
    """
    Returns recommendation based on fruit freshness.
    """

    if condition.lower() == "fresh":
        return {
            "safe_to_eat": True,
            "message": "✅ Safe to eat.",
            "consume_within": "3-7 days",
            "storage": "Keep refrigerated for longer freshness."
        }

    return {
        "safe_to_eat": False,
        "message": "❌ Not recommended for consumption.",
        "consume_within": "Discard immediately.",
        "storage": "Dispose properly to avoid contamination."
    }