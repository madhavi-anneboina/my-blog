import React from 'react';
import articleData from '../pages/Content';
import { Link } from "react-router-dom";


const ArticlesList = ({articleData}) => {
  return (
    <>
    {articleData.map((article,i) => (
        <Link className="article-list-item" to ={`/article/${article.name}`} key={i}>
          <h3 >{article.title}</h3>
          <p >{article.content[0].substring(0, 150)}</p>
        </Link>
      ))}
      </>
  )
}

export default ArticlesList