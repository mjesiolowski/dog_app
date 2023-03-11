import Head from 'next/head';

import React from 'react';
import { App } from '@/app/components/App';
import { fetchData, parseDogAPIResponseToGetBreedList } from '@/app/helpers';
import { DOG_API_URL } from '@/app/constants/constants';
import { BreedList, DogListApiResponse } from '@/app/components/App.types';

export async function getStaticProps() {
  try {
    const rawData = await fetchData<DogListApiResponse>(DOG_API_URL);
    const breedList = parseDogAPIResponseToGetBreedList(rawData.message);

    return {
      props: {
        breedList,
        isError: false,
      },
    };
  } catch (e) {
    return {
      props: {
        breedList: {},
        isError: true,
      },
    };
  }
}

export default function Home({ breedList }: {breedList: BreedList}) {
  return (
    <>
      <Head>
        <title>Dog App</title>
        <meta name="description" content="Dog App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App breedList={breedList} />
    </>
  );
}
