import Button from '@mui/material/Button';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material';

type ButtonGroupProps = {
  items: Array<string>;
  handleItemClick: (item: string) => void;
  selectedItem?: string;
  selectedItemVariant?: MuiButtonGroupProps['variant']
} & MuiButtonGroupProps

export function ButtonGroup({
  items = [],
  handleItemClick,
  variant,
  selectedItem,
  selectedItemVariant,
  ...props
}: ButtonGroupProps) {
  return (
    <MuiButtonGroup
      variant={variant}
      {...props}
    >
      {items.map((itemName) => (
        <Button
          key={itemName}
          onClick={() => handleItemClick(itemName)}
          variant={itemName === selectedItem ? selectedItemVariant : variant}
        >
          {itemName}
        </Button>
      ))}
    </MuiButtonGroup>
  );
}
