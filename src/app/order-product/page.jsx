'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed successfully");
    router.back();
  }
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default OrderProduct;