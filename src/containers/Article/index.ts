import ArticleList from './ArticleList';
import Articles from './ArticlesController';

export default Articles;
export { ArticleList };
export interface IArticle {
  id?: string;
  title: string;
  createDate: string;
  content: string;
  review: string;
  score: number;
}

export const defaultArticleProps = {
  title: '',
  createDate: Date.now(),
  content: '',
  review: '',
  score: 0,
};
