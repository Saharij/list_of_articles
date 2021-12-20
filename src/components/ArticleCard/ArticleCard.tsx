import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import './ArticleCard.scss';
import { months } from '../../assets/months';
import { Hightlight } from '../Hightlight/Hightlight';

type Props = {
  id: number;
  url: string;
  title: string;
  filter: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
};

export const ArticleCard: React.FC<Props> = ({
  id,
  url,
  title,
  filter,
  summary,
  imageUrl,
  publishedAt,
}) => {
  const publishedAtToArray: string[] = publishedAt.split('-');
  const day: number = +(new Date(publishedAt).toString().split(' ')[2]);
  const month = `${months[+(publishedAtToArray[1]) - 1]}`;

  const dayToString = () => {
    switch (day) {
      case 1:
        return `${day}st`;
        break;
      case 2:
        return `${day}nd`;
        break;
      case 3:
        return `${day}rd`;
        break;
      default:
        return `${day}th`;
    };
  };

  const fullDate = `${month} ${dayToString()}, ${publishedAtToArray[0]}`;

  return (
    <Card
      id="card"
      sx={{ maxWidth: 400, height: 530, marginBottom: 5.625 }}
    >
      <CardMedia
        component="img"
        height="217"
        image={imageUrl}
        id="media"
        alt={`Article image ${id}`}
      />
      <CardContent
        sx={{ width: 350, height: 263 }}
        id="info-box"
        className="card__info-box"
      >
        <Typography
          variant="body2"
          id="date"
          className="card__published-date"
        >
          {fullDate}
        </Typography>
        <div className="card__title-box">
          <Typography
            variant="h5"
            component="div"
            id="title"
            className="card__title"
            sx={{ marginBottom: 2.5 }}
          >
            <Hightlight
              string={title}
              filter={filter}
            />
          </Typography>
        </div>
        <Typography
          variant="body2"
          id="summary"
          color="text.secondary"
        >
          <Hightlight
            string={summary}
            filter={filter}
          />
        </Typography>
        <Typography id="link">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="card__link"
          >
            Read more
          </a>
        </Typography>
      </CardContent>
    </Card>
  )
}
