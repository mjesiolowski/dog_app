import Head from 'next/head';

import React from 'react';
import { App } from '@/app/components/App';
import { fetchData, parseDogAPIResponseToGetBreedList } from '@/app/helpers';
import { BREED_LIST_API_URL } from '@/app/constants/constants';
import { DogListApiResponse, ParsedBreedList } from '@/app/components/App/App.types';

export async function getStaticProps() {
  try {
    const rawData = await fetchData<DogListApiResponse>(BREED_LIST_API_URL);
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

export default function Home({ breedList }: {breedList: ParsedBreedList}) {
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
