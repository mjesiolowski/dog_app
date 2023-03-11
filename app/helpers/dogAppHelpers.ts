import { AllBreedsAPIData } from '../components/App.types';
import { capitalizeFirstLetter } from './commonHelpers';

export const parseDogAPIResponseToGetBreedList = (dogsData: AllBreedsAPIData) => Object
  .entries(dogsData)
  .reduce((acc: Array<string>, curr) => {
    const [breedName, breedSubname] = curr;

    if (breedSubname.length === 0) {
      acc.push(capitalizeFirstLetter(breedName));
    } else {
      breedSubname.forEach((subname) => acc.push(`${capitalizeFirstLetter(breedName)} - ${capitalizeFirstLetter(subname)}`));
    }

    return acc;
  }, []);
