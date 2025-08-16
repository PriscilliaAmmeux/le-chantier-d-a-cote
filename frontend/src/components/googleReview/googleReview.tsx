import "./GoogleReview.css";

export type GoogleReviewProps = {
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  author: string;
  date: string;
  className?: string;
};

export default function GoogleReview({
  rating,
  text,
  author,
  date,
  className = "",
}: GoogleReviewProps) {
  // Générer les étoiles en fonction du rating
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  // Première lettre de l'auteur pour l'avatar
  const authorInitial = author.charAt(0).toUpperCase();

  return (
    <div className={`google-review ${className}`}>
      <div className="review-header">
        <div className="google-info">
          <span className="google-text">Google</span>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285f4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334a853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23fbbc05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23ea4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
            alt="Google"
            className="google-icon"
          />
        </div>
        <div className="review-stars">
          <span className="stars">{stars}</span>
          <span className="rating">{rating}.0</span>
        </div>
      </div>
      <div className="review-content">
        <p className="review-text">"{text}"</p>
        <div className="review-author">
          <div className="author-initial">{authorInitial}</div>
          <div className="author-info">
            <span className="author-name">{author}</span>
            <span className="review-date">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
