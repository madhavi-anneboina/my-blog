import { useParams } from 'react-router-dom';
import articleData from './Content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const { articleId } = useParams();

  // const cleanArticleId = articleId.startsWith(':') ? articleId.slice(1) : articleId;
 
  const article = articleData.find(article => article.name === articleId);
  if(!article){
    return(
      <NotFoundPage />
    )
  }
 
    return (
      <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
      ))}
  </div>
    );
}

export default ArticlePage;