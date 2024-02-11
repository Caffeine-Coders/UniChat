import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Layout from './components/layout';
import Landing from './components/landing';
export default function Home() {
  return (
    <Layout>
      <Landing/>
    </Layout>
  );
}
