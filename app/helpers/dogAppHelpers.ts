import { AllBreedsAPIData, ParsedBreedList } from '../components/App/App.types';

export const getRandomDogImageUrl = (breedNames: Array<string>) => {
  const [mainName, subName] = breedNames;

  if (subName) {
    return `https://dog.ceo/api/breed/${mainName}/${subName}/images/random`;
  }

  return `https://dog.ceo/api/breed/${mainName}/images/random`;
};

export const parseDogAPIResponseToGetBreedList = (
  dogsData: AllBreedsAPIData,
) => Object.entries(dogsData).reduce((acc: ParsedBreedList, curr) => {
  const [breedName, breedSubname] = curr;

  const firstLetter = breedName.charAt(0);

  if (acc[firstLetter]) {
    if (breedSubname.length === 0) {
      acc[firstLetter].push(breedName);
    } else {
      breedSubname.forEach((subname) => acc[firstLetter].push(`${breedName} - ${subname}`));
    }
  } else {
    acc[firstLetter] = [breedName];
  }

  return acc;
}, {});
