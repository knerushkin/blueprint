import * as React from 'react';
import { IListProps, IListItem } from './List';

export default function<T>({ items, itemRenderer }: IListProps<T>) {
  console.log(items);
  console.log(itemRenderer);
  return <ul>{items.map((item: IListItem<T>) => itemRenderer({ item }))}</ul>;
}
