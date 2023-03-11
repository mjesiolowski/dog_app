import { useCallback, useState } from 'react';
import { getRandomDogImageUrl } from '@/app/helpers';
import { ButtonGroup as BreedListButtons } from '../ButtonGroup';
import { ParsedBreedList } from './App.types';
import { BreedDetailsModal } from '../BreedDetailsModal';
import { AppWrapper } from './App.styles';
import { AlphabetButtons } from '../AlphabetButtons';

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
      <h1>Dog App</h1>
      <AlphabetButtons
        onItemClick={handleAlphabetLetterClick}
        selectedItem={clickedLetter}
      />
      <BreedListButtons
        items={breedList[clickedLetter]}
        onItemClick={handleBreedNameClick}
        selectedItem={selectedBreed}
        variant="outlined"
        selectedItemVariant="contained"
        orientation="vertical"
      />

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
