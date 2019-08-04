import React from 'react';

export default class Editor extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    return 'EDITOR';
  }
}
