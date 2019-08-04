import React from 'react';
import { any } from 'prop-types';

export default class Card extends React.Component<any, any> {
  render() {
    const { content, name } = this.props.article;
    return (
      <div>
        {name}
        {content}
      </div>
    );
  }
}
