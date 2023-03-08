import Head from 'next/head';

import React from 'react';
import { App } from '@/app/components/App';
import { fetchData } from '@/app/helpers';
import { DOG_API_URL } from '@/app/constants/constants';
import { DogItems, DogListApiResponse } from '@/app/components/App.types';

export async function getStaticProps() {
  try {
    const data = await fetchData<DogListApiResponse>(DOG_API_URL);

    return {
      props: {
        dogsList: data.message,
        isError: false,
      },
    };
  } catch (e) {
    return {
      props: {
        dogsList: {},
        isError: true,
      },
    };
  }
}

export default function Home({ dogsList }: DogItems) {
  return (
    <>
      <Head>
        <title>Dog App</title>
        <meta name="description" content="Dog App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App dogsList={dogsList} />
    </>
  );
}
