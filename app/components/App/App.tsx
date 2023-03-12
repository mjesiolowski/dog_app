import { useCallback, useState } from 'react';
import { getRandomDogImageUrl } from '@/app/helpers';
import { ParsedBreedList } from './App.types';
import { BreedDetailsModal } from '../BreedDetailsModal';
import { AppTitle, AppWrapper } from './App.styles';
import { AlphabetButtons } from '../AlphabetButtons';
import { BreedListButtons } from '../BreedListButtons';

export function App({ breedList } : {breedList: ParsedBreedList}) {
  const [clickedLetter, setClickedLetter] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAlphabetLetterClick = useCallback((letter: string) => {
    setClickedLetter(letter);

    if (letter !== clickedLetter) {
      setSelectedBreed('');
    }
  }, []);

  const handleBreedNameClick = useCallback((breedName: string) => {
    setSelectedBreed(breedName);
    setIsModalOpen(true);
  }, []);

  return (
    <AppWrapper>
      <AppTitle>Dog App</AppTitle>
      <AlphabetButtons
        onItemClick={handleAlphabetLetterClick}
        selectedItem={clickedLetter}
      />
      {clickedLetter ? (
        <BreedListButtons
          items={breedList[clickedLetter]}
          onItemClick={handleBreedNameClick}
          selectedItem={selectedBreed}
        />
      ) : null}

      {isModalOpen && selectedBreed ? (
        <BreedDetailsModal
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          apiUrl={getRandomDogImageUrl(selectedBreed.split(' - '))}
          breedName={selectedBreed}
        />
      ) : null}

    </AppWrapper>
  );
}
