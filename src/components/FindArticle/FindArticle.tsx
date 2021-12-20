import React from 'react';
import { TextField, Container } from '@mui/material';

import './FindArticle.scss';

type Props = {
  setInputSearch: (e: string) => void;
}

export const FindArticle: React.FC<Props> = ({ setInputSearch }) => {
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  }

  return (
    <>
      <Container maxWidth="sm" id="TextFieldContainer">
        <p className="text-field__title">
          Filter by keywords
        </p>
        <TextField
          className="text-field"
          id="TextField"
          variant="outlined"
          onChange={inputChange}
          placeholder="Write a title or description"
          fullWidth
        />
      </Container>
    </>
  )
}
