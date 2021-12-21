import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import './ArticleList.scss';
import { FindArticle } from "../FindArticle/FindArticle";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { fetchArticles, articlesData } from "../../store";

export const ArticleList: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const articles = useSelector(articlesData);

  const filteredArticles = articles.filter(({ title, summary}) => (
    title.toLowerCase().includes(inputValue.toLowerCase().trim()) || summary.toLowerCase().includes(inputValue.toLowerCase().trim())
  ));

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <>
      <div className="article__list-box">
        <Container maxWidth="xl" id="ListContainer">
          <FindArticle
            setInputSearch={setInputValue}
          />
          <p className="article__list-heading">
            Results: {filteredArticles.length}
          </p>
          <ul className="article__list">
            {filteredArticles.map(item => {
              const correctSummary = `${item.summary.slice(0, 150)}...`;
              const correctTitle = item.title.length > 55
                ? `${item.title.slice(0, 50)}...`
                : item.title;

              return (
                <li key={item.id}>
                  <ArticleCard
                    id={item.id}
                    url={item.url}
                    title={correctTitle}
                    filter={inputValue}
                    summary={correctSummary}
                    imageUrl={item.imageUrl}
                    publishedAt={item.publishedAt}
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </>
  )
}
