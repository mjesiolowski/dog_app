export type DogItems = { [key: string]: Array<string> }

export type DogListApiResponse = {
  message: DogItems,
  status: string
}
