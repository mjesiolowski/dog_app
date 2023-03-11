export type BreedList = Array<string>
export type AllBreedsAPIData = { [key: string]: BreedList}

export type DogListApiResponse = {
  message: AllBreedsAPIData,
  status: string
}

export type ParsedBreedList = { [key: string]: BreedList }
