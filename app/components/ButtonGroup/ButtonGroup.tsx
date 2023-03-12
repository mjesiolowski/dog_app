import Button from '@mui/material/Button';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import { ButtonGroupProps } from './ButtonGroup.types';

export function ButtonGroup({
  items = [],
  onItemClick,
  variant,
  selectedItem,
  selectedItemVariant,
  ...props
}: ButtonGroupProps) {
  return (
    <MuiButtonGroup
      variant={variant}
      size="large"
      {...props}
    >
      {items.map((itemName) => (
        <Button
          key={itemName}
          onClick={() => onItemClick(itemName)}
          variant={itemName === selectedItem ? selectedItemVariant : variant}
        >
          {itemName}
        </Button>
      ))}
    </MuiButtonGroup>
  );
}
