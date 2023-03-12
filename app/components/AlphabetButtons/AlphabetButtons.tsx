import { genCharArray } from '@/app/helpers';
import { useMemo } from 'react';
import { AlphabetButtonsWrapper, StyledButtonGroup } from './AlphabetButtons.styles';
import { AlphabetButtonsProps } from './AlphabetButtons.types';

export function AlphabetButtons({
  onItemClick,
  selectedItem,
}: AlphabetButtonsProps) {
  const alphabetList = useMemo(() => genCharArray('a', 'z'), []);

  return (
    <AlphabetButtonsWrapper>
      <h2>{selectedItem ? `Selected filter: ${selectedItem.toUpperCase()}` : 'Select filter from the list below:'}</h2>
      <StyledButtonGroup
        items={alphabetList}
        onItemClick={onItemClick}
        selectedItem={selectedItem}
        variant="outlined"
        selectedItemVariant="contained"
      />
    </AlphabetButtonsWrapper>
  );
}
