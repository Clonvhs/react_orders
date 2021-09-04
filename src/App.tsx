import React from 'react';
import './App.scss';
import { OrderList } from './components/OrderList';
import orders from './api/orders.json';
import products from './api/products.json';
import users from './api/users.json';

const orderList = orders.map(order => ({
  id: order.id,
  title: order.title,
  user: users.find(user => user.id === order.userId),
  products: products.filter(product => product.orderId === order.id),
}));

const App: React.FC = () => (
  <div className="App">
    <OrderList orderList={orderList} />
  </div>
);

export default App;
