import { useEffect, useState } from 'react';
import type { Article } from '../../types';
import Component from './articleComponent';
import './articleList.css';

type ArticleListProps = {
  articles: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [visibleCount, setVisibleCount] = useState(30);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 30);
  };

  return (
    <div style={{display: 'block'}}>
      <div className="articles-container">
        {articles.slice(0, visibleCount).map((article, index) => (
          <div key={article.articleUrl} className={index % 2 === 0 ? 'article-right' : 'article-left'} style={{width: '100%'}}>
            <Component {...article} />
          </div>
        ))}
      </div>

      {visibleCount < articles.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ArticleList;
