import { GetServerSideProps } from 'next';

import Head from 'next/head';

import dynamic from 'next/dynamic';
const Home = dynamic(() => import('../../components/shared/Home'), {
  ssr: false,
});

export default function PHome() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <Home />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
