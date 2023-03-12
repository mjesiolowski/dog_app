import { ButtonGroupProps } from '../ButtonGroup/ButtonGroup.types';

export type BreedListButtonsProps = {
  items: ButtonGroupProps['items'] | undefined,
  onItemClick: ButtonGroupProps['onItemClick'],
  selectedItem: ButtonGroupProps['selectedItem'],
}
