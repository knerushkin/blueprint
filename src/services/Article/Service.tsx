import axios from 'axios';

export const API_URL = 'http://localhost:8080/api';
const TECH_ARTICLE_URL = `${API_URL}/article/tech`;
const GET = 'get';
const PUT = 'put';
const DELETE = 'delete';

async function getArticles() {
  const { data } = await axios({
    headers: { 'Access-Control-Allow-Origin': '*' },
    method: GET,
    url: TECH_ARTICLE_URL,
  });

  return data;
}

async function deleteArticle(id: any) {
  await axios({
    headers: { 'Access-Control-Allow-Origin': '*' },
    method: DELETE,
    url: `${TECH_ARTICLE_URL}/${id}`,
  });
}

async function saveArticle(article: any) {
  const { data } = await axios({
    headers: { 'Access-Control-Allow-Origin': '*' },
    method: PUT,
    url: TECH_ARTICLE_URL,
    data: article,
  });

  return data;
}

export { getArticles, saveArticle, deleteArticle };
