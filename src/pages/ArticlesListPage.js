import React from "react";
import articleData from "./Content";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Article</h1>
      {articleData.map((article) => (
        <div>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}</p>
        </div>
      ))}
    </>
  );
};

export default ArticlesListPage;
