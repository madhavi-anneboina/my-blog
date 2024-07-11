import React from "react";
import articleData from "./Content";

import ArticlesList from "../components/ArticlesList";



const ArticlesListPage = () => {
  return (
    <>
      <h1>Article</h1>
       <ArticlesList articleData = {articleData} />
    </>
  );
};

export default ArticlesListPage;
