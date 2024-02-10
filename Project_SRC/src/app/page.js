import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to UniChat</h1>
      <h2><Link href="/login">Login</Link></h2>
    </Layout>
  );
}
