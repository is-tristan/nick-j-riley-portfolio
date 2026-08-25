export default function getReviewStars(rating) {
    const clamped = Math.min(5, Math.max(1, Math.round(rating * 2) / 2));
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= clamped) {
            stars.push("filled");
        } else if (i - 0.5 === clamped) {
            stars.push("half");
        } else {
            stars.push("empty");
        }
    }

    return stars;
}
