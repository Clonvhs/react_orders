import React from 'react';
import './Order.scss';
import {CombinedOrder} from '../../react-app-env';
import {ProductList} from '../ProductList'

type Props = {
  order: CombinedOrder
}
export const Order: React.FC<Props> = (props) => {
  const {order} = props;

  if (order.products?.length === 0) {
    return (
      <div className="OrderCard">
        <div className="orderTitleBlock">
          <span className="orderTitle">{order?.title}</span>
          <span> - </span>
          <span className="orderUserName">
            {
              order.user?.name
            }
          </span>
        </div>
        <p>
          <b>
            No Task
          </b>
        </p>
      </div>
    );
  }

  return (
    <div className="OrderCard">
      <div className="orderTitleBlock">
        <span className="orderTitle">{order?.title}</span>
        <span> - </span>
        <span className="orderUserName">
          (
          {
            order.user?.name
          }
          )
        </span>
      </div>
      <ProductList productList={order?.products}/>
    </div>
  );
};
