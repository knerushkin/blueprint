import React from 'react';
import { isEmpty } from 'lodash';

import { IArticle } from '.';
import * as articleService from '../../services/Article/Service';
import Article from './Article';
import ArticleList, { CreateAction } from './ArticleList';
import Overlay from 'components/Overlay';

export default class ArticleController extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { articles: [] };

    this.saveArticle = this.saveArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }

  async saveArticle(editedArticle: IArticle) {
    articleService.saveArticle(editedArticle);
  }

  setStateAsync(state: any) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async getArticles() {
    const articles = await articleService.getArticles();
    await this.setStateAsync({ articles });
  }

  async componentDidMount() {
    this.getArticles();
  }

  deleteArticle(id: any) {
    articleService.deleteArticle(id);
  }

  editArticle(id: any) {
    console.log('Edit Article:', id);
  }

  renderArticle() {
    return (
      <Overlay>
        <Article saveArticle={this.saveArticle} />
      </Overlay>
    );
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        <CreateAction
          type="button"
          onClick={event => {
            event.preventDefault();
            console.log('Create new article');
          }}
        >
          Create New
        </CreateAction>
        <ArticleList articles={articles} onEdit={this.editArticle} onDelete={this.deleteArticle} />
      </div>
    );
  }
}
