import React from 'react';
import './ProductList.scss';
import { ProductItem } from '../../react-app-env';
import { Product } from '../Product';
import './ProductList.scss';

type Props = {
  productList: ProductItem[] | undefined
}

export const ProductList: React.FC<Props> = (props) => {
  const { productList } = props;

  if (productList !== undefined) {
    return (
      <ul className="productList">
        {
          productList.map((product:ProductItem) => (
            <li key={product.id}>
              <Product productName={product.name} />
            </li>
          ))
        }
      </ul>
    );
  }

  return (<></>);
};
