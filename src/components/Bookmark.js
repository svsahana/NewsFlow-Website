import React, { useEffect, useState } from "react";

const Bookmark = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarkedNews")) || [];
    setBookmarkedArticles(saved);
  }, []);

  return (
    <div className="container my-5 pt-5">
      <h2 className="text-center">Bookmarked Articles</h2>
      <div className="row">
        {bookmarkedArticles.length === 0 ? (
          <p className="text-center">No bookmarks found.</p>
        ) : (
          bookmarkedArticles.map((article, index) => (
      <div className="col-md-4" key={index}>
      <div className="card my-3">
      <img src={article.imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{article.title}</h5>
      <p className="card-text">{article.description}</p>
      <p className="card-text">
          <small className="text-muted">By {article.author || "Unknown"} on{" "} {new Date(article.date).toGMTString()}
          </small>
      </p>
    <a href={article.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark"> Read More</a>
              </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmark;
