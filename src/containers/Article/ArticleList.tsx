import React from 'react';
import styled from 'styled-components';
import Overlay from 'components/Overlay';
import List from 'components/List/SimpleList';
import { IListItem, IItemRendererProps } from 'components/List/List';
import ExpandableContainer, {
  Expanded,
  Collapsed,
  ExpandElement,
} from 'components/ExpandableContainer/UncontrollableExpandableContaier';
import Item from 'components/List/Item';
import { IArticle } from '.';
import Article from './Article';

export const Action = styled.button`
  padding: 6px;
  min-width: 48px;
  border-width: 2px;
  border-radius: 2px;
  font-weight: bold;
`;

export const DeleteAction = styled(Action)`
  background-color: #c65146;
  border-color: #af4034;
  color: white;
`;

export const SaveAction = styled(Action)`
  background-color: #fffbcb;
  border-color: #ffe869;
  color: #393e46;
`;

export const EditAction = styled(Action)`
  background-color: #4c5870;
  border-color: #3d3d3b;
  color: white;
`;

export const CreateAction = styled(Action)`
  background-color: #31b96e;
  border-color: #0c8235;
  color: white;
`;

export const ActionsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 24px;
  ${Action} {
    margin: 0 12px;
  }
`;

const ARTICLE_TYPES = {
  TECH: 'tech',
};

export interface IArticleProps {
  articles: IArticle[];
  onEdit: (id: any) => void;
  onDelete: (id: any) => void;
}

export default class ArticleList extends React.Component<IArticleProps> {
  static mapArticleToItem(articles: IArticle[]): Array<IListItem<IArticle>> {
    return articles.map(article => {
      return {
        value: article,
        key: 'key',
      };
    });
  }
  constructor(props: IArticleProps) {
    super(props);

    this.itemRenderer = this.itemRenderer.bind(this);
  }

  itemRenderer({ item }: IItemRendererProps<IArticle>) {
    const { value, key } = item;
    const article: IArticle = value;

    const ExpandArticleElement = ExpandElement(({ expanded }: any) => {
      return expanded ? <div>Expanded</div> : <div>Collapsed</div>;
    });
    const createDate = new Date(Date.parse(article.createDate));
    const createDateFormatted = `${createDate.getDate()}/${createDate.getMonth()}/${createDate.getFullYear()}`;
    return (
      <Item key={key}>
        <ExpandableContainer>
          {article.title}
          {createDateFormatted}
          <ExpandArticleElement />
          <Expanded>
            <Article
              content={article.content}
              title={article.title}
              createDate={article.createDate}
              score={article.score}
            />
          </Expanded>
        </ExpandableContainer>
      </Item>
    );
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="article__view">
        <List items={ArticleList.mapArticleToItem(articles)} itemRenderer={this.itemRenderer} />
      </div>
    );
  }
}
