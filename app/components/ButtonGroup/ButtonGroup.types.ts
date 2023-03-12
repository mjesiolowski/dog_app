import { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material';

export type ButtonGroupProps = {
  items: Array<string>;
  onItemClick: (item: string) => void;
  selectedItem?: string;
  selectedItemVariant?: MuiButtonGroupProps['variant']
} & MuiButtonGroupProps
