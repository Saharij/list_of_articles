import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ArticleCard.scss';

type Props = {
  id: number;
  url: string;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
}

export const ArticleCard: React.FC<Props> = ({
  id,
  url,
  title,
  summary,
  imageUrl,
  publishedAt,
}) => {

  return (
    <div className="article__card">
      <div className="article__card-img-box">
        <img
          src={imageUrl}
          alt={`Article image ${id}`}
          className="article__card-img" />
      </div>
      <div className="article__card-info-box">
        <p className="article__card-published-date">
          {publishedAt}
        </p>
        <h2 className="article__card-title">
          {title}
        </h2>
        <div className="article__card-summary-box">
          <p className="article__card-summary-text">
            {summary}
          </p>
        </div>
        <a href={url} target="_blank">
          Read more
        </a>
      </div>
    </div>
  )
}
