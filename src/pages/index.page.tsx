import { GetServerSideProps } from 'next';

import Head from 'next/head';

export default function PHome() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
