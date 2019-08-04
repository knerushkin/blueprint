import * as React from 'react';
import Articles from 'containers/Article';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className="app">
        <Articles />
      </div>
    );
  }
}
