import { genCharArray } from '@/app/helpers';
import { useMemo } from 'react';
import { StyledButtonGroup } from './AlphabetButtons.styles';
import { AlphabetButtonsProps } from './AlphabetButtons.types';

export function AlphabetButtons({
  onItemClick,
  selectedItem,
}: AlphabetButtonsProps) {
  const alphabetList = useMemo(() => genCharArray('a', 'z'), []);

  return (
    <StyledButtonGroup
      items={alphabetList}
      onItemClick={onItemClick}
      selectedItem={selectedItem}
      variant="outlined"
      selectedItemVariant="contained"
    />
  );
}
