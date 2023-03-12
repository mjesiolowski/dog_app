import { ButtonGroup } from '../ButtonGroup';
import { BreedListButtonsWrapper } from './BreedListButtons.styles';
import { BreedListButtonsProps } from './BreedListButtons.types';

export function BreedListButtons({
  items,
  onItemClick,
  selectedItem,
}: BreedListButtonsProps) {
  return (
    <BreedListButtonsWrapper>
      { items ? (
        <ButtonGroup
          items={items}
          onItemClick={onItemClick}
          selectedItem={selectedItem}
          variant="outlined"
          selectedItemVariant="contained"
          orientation="vertical"
        />
      )
        : <h2>No breeds found, try different filter.</h2>}
    </BreedListButtonsWrapper>
  );
}
