import React from "react";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  const handleBookmark = () => {
    const existing = JSON.parse(localStorage.getItem("bookmarkedNews")) || [];
    const alreadyBookmarked = existing.some((item) => item.url === newsUrl);
    if (!alreadyBookmarked) {
      localStorage.setItem(
        "bookmarkedNews",
        JSON.stringify([
          ...existing,
          {title, description, imageUrl, newsUrl, author, date, source},
        ])
      );
      alert("Bookmarked!");
    } else {
      alert("Already bookmarked!");
    }
  };

  return (
    <div className="card h-100 d-flex flex-column">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0",
        }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
      <img src={imageUrl || "https://via.placeholder.com/300x200?text=No+Image"} onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";}} className="card-img-top" alt="news"/>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis", minHeight: "3em", lineHeight: "1.5em", wordBreak: "break-word",
          }}>
          {title}
        </h5>
        <p className="card-text " style={{display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis", minHeight: "4.5em", lineHeight: "1.5em",
            wordBreak: "break-word"}}> {description}</p>
        <p className="card-text mt-auto">
          <small className="text-muted">
            By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
          </small>
        </p>

        <div className="d-flex justify-content-between mt-3">
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
          <button
            onClick={handleBookmark}
            className="btn btn-sm btn-outline-primary mt-2">
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
