export interface IListProps<T> {
  getRef?: (instance: any) => any;
  items: Array<IListItem<T>>;
  itemRenderer: ItemRenderer<T>;
}

export interface IListItem<T> {
  key: string | number;
  value: T;
}

export type ItemRenderer<T> = ({ item }: IItemRendererProps<T>) => React.ReactElement;

export interface IItemRendererProps<T> {
  item: IListItem<T>;
}
