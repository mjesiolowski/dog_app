import { useCallback, useMemo, useState } from 'react';
import { genCharArray } from '@/app/helpers';
import { ButtonGroup } from '../ButtonGroup';
import { ParsedBreedList } from './App.types';
import { BreedListButtons } from '../BreedListButtons';

export function App({ breedList } : {breedList: ParsedBreedList}) {
  const [clickedLetter, setClickedLetter] = useState('');

  const alphabetList = useMemo(() => genCharArray('a', 'z'), []);

  const handleAlphabetLetterClick = useCallback((letter: string) => {
    setClickedLetter(letter);
  }, []);

  const breedListFilterByClickedLetter = breedList[clickedLetter];

  return (
    <main>
      <h1>Dog App</h1>
      <ButtonGroup
        items={alphabetList}
        handleItemClick={handleAlphabetLetterClick}
        selectedItem={clickedLetter}
        variant="outlined"
        selectedItemVariant="contained"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '12px 0',
        }}
      />
      <BreedListButtons breedList={breedListFilterByClickedLetter} />
    </main>
  );
}
