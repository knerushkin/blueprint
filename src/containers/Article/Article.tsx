import React from 'react';
import styled from 'styled-components';

import { IArticle, defaultArticleProps } from '.';
import { EditAction, SaveAction, DeleteAction, ActionsRow } from './ArticleList';
import EditorEmpty from './components/Editor';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.input`
  font-weight: bold;
`;

const Editor = styled.textarea`
  display: flex;
  width: 100%;
  height: 360px;
  margin: 12px 0;
`;

const ReviewEditor = styled.textarea`
  display: flex;
  width: 100%;
  height: 180px;
  margin: 12px 0;
`;

export default class Article extends React.Component<any, IArticle> {
  static defaultProps = defaultArticleProps;

  constructor(props: IArticle) {
    super(props);

    const { title, createDate, content, review, score } = this.props;
    this.state = {
      title,
      createDate,
      content,
      review,
      score,
    };

    this.changeContent = this.changeContent.bind(this);
    this.changeReview = this.changeReview.bind(this);
    this.changeScore = this.changeScore.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }

  changeContent(event: any) {
    const {
      target: { value },
    } = event;

    this.setState({
      content: value,
    });
  }

  setCreateDate() {
    const createDate = Date.now();
    return createDate;
  }

  changeReview(event: any) {
    const {
      target: { value },
    } = event;

    this.setState({
      review: value,
    });
  }

  changeScore(event: any) {
    const {
      target: { value },
    } = event;

    this.setState({
      score: value,
    });
  }

  changeTitle(event: any) {
    const {
      target: { value },
    } = event;

    this.setState({
      title: value,
    });
  }

  saveArticle() {
    const { saveArticle } = this.props;
    const { content, review, score, title } = this.state;
    const createDate = Date.now().toString();
    saveArticle({ title, content, review, score, createDate });
  }

  render() {
    const { title, content, review, score } = this.state;

    return (
      <Container>
        <Header>
          <Title name="title" value={title} onChange={this.changeTitle} />
          <input name="score" value={score} onChange={this.changeScore} />
        </Header>
        <Editor
          placeholder="Content..."
          className="article__content"
          name="content"
          value={content}
          onChange={this.changeContent}
        />
        <ReviewEditor
          placeholder="Review..."
          name="review"
          value={review}
          onChange={this.changeReview}
        />
        <ActionsRow>
          <SaveAction type="button" onClick={this.saveArticle}>
            Save
          </SaveAction>
          <EditAction
            type="button"
            onClick={event => {
              event.preventDefault();
            }}
          >
            Edit
          </EditAction>
          <DeleteAction
            type="button"
            onClick={event => {
              event.preventDefault();
            }}
          >
            Delete
          </DeleteAction>
        </ActionsRow>
      </Container>
    );
  }
}
