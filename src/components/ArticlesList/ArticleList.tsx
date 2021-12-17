import React, { useEffect, useState } from "react";

import './ArticleList.scss';
import { Article } from '../../dataTypes';
import { getArticles } from '../../api/api';
import { ArticleCard } from "../ArticleCard/ArticleCard";

export const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | []>([]);

  useEffect(() => {
    getArticles()
      .then(response => {
        setArticles(response)
      })
  }, [])

  return (
    <>
      <div className="article__list-box">
        <ul className="article__list">
          {articles.map(item => (
            <li key={item.id}>
              <ArticleCard
                id={item.id}
                url={item.url}
                title={item.title}
                summary={item.summary}
                imageUrl={item.imageUrl}
                publishedAt={item.publishedAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
