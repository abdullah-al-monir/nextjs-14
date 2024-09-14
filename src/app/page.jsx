import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">Products</Link>
    </div>
  );
};

export default Home;
