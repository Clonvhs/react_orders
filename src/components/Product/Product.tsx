import React from 'react';
import './Product.scss';

type Props = {
  productName:string;
}

export const Product: React.FC<Props> = (props) => {
  const { productName } = props;

  return (
    <>
      {
        productName
      }
    </>
  );
};
