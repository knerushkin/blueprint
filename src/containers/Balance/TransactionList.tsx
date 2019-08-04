// import * as React from 'react';
// import * as balanceService from 'services/Balance/Service';
// import List from 'components/List/SimpleList';
// import { IListItem, IItemRendererProps } from 'components/List/List';
// import TransactionPreview from 'containers/Transaction/TransactionPreview';

// interface ITransactionListState {
//   items: IListItem[];
// }

// interface ITransaction {
//   id: string;
//   amount: string;
//   date: string;
//   description: string;
//   total: string;
//   transactionType: string;
//   type: string;
// }

// interface ITransactionListProps {
//   transactions: ITransaction[];
// }

// export default class TransactionList extends React.Component<
//   ITransactionListProps,
//   ITransactionListState
// > {
//   private List: any;

//   constructor(props: ITransactionListProps) {
//     super(props);
//     this.itemRenderer = this.itemRenderer.bind(this);
//   }

//   itemRenderer({ item }: IItemRendererProps) {
//     const { transactions } = this.props;
//     const { key, value } = item;
//     const transaction = transactions.find(({ id }) => id === key);
//     return transaction ? (
//       <li key={key} style={{ listStyle: 'none' }}>
//         <TransactionPreview transaction={transaction} />
//       </li>
//     ) : (
//       <div />
//     );
//   }

//   render() {
//     const { transactions } = this.props;
//     const items = transactions.map(({ amount, id }) => {
//       return {
//         key: id,
//         value: amount,
//       };
//     });

//     return <List items={items} itemRenderer={this.itemRenderer} />;
//   }
// }
