import React from 'react';
import './OrderList.scss';
import { CombinedOrder } from '../../react-app-env';
import { Order } from '../Order';

type Props = {
  orderList: CombinedOrder[];
}

export const OrderList: React.FC<Props> = (props) => {
  const { orderList } = props;

  return (
    <ul className="OrderList">
      {
        orderList.map(order => (
          <li key={order.id} className="OrderItem">
            <Order order={order} />
          </li>
        ))
      }
    </ul>
  );
};
