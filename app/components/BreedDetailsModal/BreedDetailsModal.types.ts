export type BreedDetailsApiData = {
  message: string;
  status: string
}

export type BreedDetailsModalProps = {
  isOpen: boolean,
  handleClose: () => void,
  apiUrl: string,
  breedName: string,
}
