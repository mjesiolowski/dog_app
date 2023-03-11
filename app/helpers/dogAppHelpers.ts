import { AllBreedsAPIData, ParsedBreedList } from '../components/App/App.types';
import { capitalizeFirstLetter } from './commonHelpers';

export const parseDogAPIResponseToGetBreedList = (
  dogsData: AllBreedsAPIData,
) => Object.entries(dogsData).reduce((acc: ParsedBreedList, curr) => {
  const [breedName, breedSubname] = curr;

  const firstLetter = breedName.charAt(0);

  if (acc[firstLetter]) {
    if (breedSubname.length === 0) {
      acc[firstLetter].push(capitalizeFirstLetter(breedName));
    } else {
      breedSubname.forEach((subname) => acc[firstLetter].push(`${capitalizeFirstLetter(breedName)} - ${capitalizeFirstLetter(subname)}`));
    }
  } else {
    acc[firstLetter] = [capitalizeFirstLetter(breedName)];
  }

  return acc;
}, {});
