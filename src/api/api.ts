import { Article } from "../dataTypes";

const BASE_URL: string = "https://api.spaceflightnewsapi.net/v3/"

export const getArticles = (): Promise<Article[]> => {
  return fetch(`${BASE_URL}articles/`)
    .then(response => response.json());
};
