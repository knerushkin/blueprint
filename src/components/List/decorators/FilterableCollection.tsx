import * as React from 'react';
import { get } from 'lodash';

import { IListProps, IListItem, IItemRendererProps } from '../List';

type FilterFunction<T> = (filterItem: Partial<IListItem<T>>, item: IListItem<T>) => boolean;

interface IFilterableCollectionProps<T> extends IListProps<T> {
  filterItem: Partial<IListItem<T>>;
  filterWith: FilterFunction<T>;
}

interface IFilterableCollectionState<T> {
  filteredItems: Array<IListItem<T>>;
}

export default <P, T extends IListProps<T>>(
  WrappedCollection: React.ComponentType<P | IListProps<T>>,
) =>
  class FilterableCollection extends React.Component<
    P & IFilterableCollectionProps<T>,
    IFilterableCollectionState<T>
  > {
    constructor(props: P & IFilterableCollectionProps<T>) {
      super(props);

      // TODO: Is it bad to assign state from props in constructor, where is it better to do? How to handle local state from external props
      // Basically one problem is that the items is array of objects, and its good to have them immutable
      const { items } = this.props;
      this.state = {
        filteredItems: items.concat([]),
      };
      this.itemRenderer = this.itemRenderer.bind(this);
    }

    componentDidMount() {
      this.filter();
    }

    componentDidUpdate(prevProps: any, prevState: any) {
      if (prevProps.items !== this.props.items) {
        this.filter();
      }
      if (prevProps.filterItem !== this.props.filterItem) {
        this.filter();
      }
    }

    filter() {
      const { items, filterWith, filterItem } = this.props;

      const filteredItems = items.filter(item => filterWith(filterItem, item));
      this.setState({ filteredItems });
    }

    itemRenderer({ item }: IItemRendererProps<T>) {
      const { itemRenderer } = this.props;
      return itemRenderer({ item });
    }

    render() {
      const { filteredItems } = this.state;
      const { getRef, filterItem, filterWith, ...restProps } = this.props;

      return (
        <div className="filterableList">
          <WrappedCollection
            getRef={getRef}
            items={filteredItems}
            itemRenderer={this.itemRenderer}
          />
        </div>
      );
    }
  };
