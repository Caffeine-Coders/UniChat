import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
    <h3>Welcome to UniChat</h3>
    <h2><Link href="/login">Login</Link></h2>
    </Layout>
  );
}
