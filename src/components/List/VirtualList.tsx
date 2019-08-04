import * as React from 'react';
import { List, WindowScroller, AutoSizer, ListRowProps } from 'react-virtualized';
import { IListProps } from './List';

export default class VirtualList<T> extends React.Component<IListProps<T>> {
  constructor(props: IListProps<T>) {
    super(props);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  rowRenderer({ key, index, style }: ListRowProps) {
    const { items, itemRenderer } = this.props;
    const currentItem = items[index];

    return itemRenderer({ item: currentItem });
  }

  render() {
    const { items, getRef } = this.props;
    return (
      <ul>
        <List
          style={{ border: '1px solid black' }}
          height={150}
          width={100}
          rowCount={items.length}
          rowHeight={30}
          rowRenderer={this.rowRenderer}
        />
      </ul>
    );
  }
}
