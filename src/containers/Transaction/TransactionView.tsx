// import React from 'react';
// import TransactionList from 'containers/Balance/TransactionList';
// import * as balanceService from '../../services/Balance/Service';

// export default class TransactionView extends React.Component<any, any> {
//   private List: any;

//   constructor(props: any) {
//     super(props);
//     this.state = { items: [] };
//   }

//   setStateAsync(state: any) {
//     return new Promise(resolve => {
//       this.setState(state, resolve);
//     });
//   }

//   async componentDidMount() {
//     const balance = await balanceService.getReport();

//     const { records } = balance;
//     const items = records.map((record: any, index: number) => {
//       return { ...record, id: index };
//     });
//     await this.setStateAsync({ items });

//     const persistentRecords = await balanceService.getRecords();
//     await this.setStateAsync({ persistentRecords });
//   }

//   render() {
//     const { items } = this.state;

//     return (
//       <>
//         <TransactionList transactions={items} />
//       </>
//     );
//   }
// }
