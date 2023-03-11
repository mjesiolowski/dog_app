import { useCallback, useMemo, useState } from 'react';
import { genCharArray, getRandomDogImageUrl } from '@/app/helpers';
import { ButtonGroup as AlphabetButtons, ButtonGroup as BreedListButtons } from '../ButtonGroup';
import { ParsedBreedList } from './App.types';
import { BreedDetailsModal } from '../BreedDetailsModal';
import { AppWrapper } from './App.styles';

export function App({ breedList } : {breedList: ParsedBreedList}) {
  const [clickedLetter, setClickedLetter] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const alphabetList = useMemo(() => genCharArray('a', 'z'), []);

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
        items={alphabetList}
        onItemClick={handleAlphabetLetterClick}
        selectedItem={clickedLetter}
        variant="outlined"
        selectedItemVariant="contained"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '12px 0',
        }}
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
