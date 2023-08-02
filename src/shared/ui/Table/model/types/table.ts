import { CSSProperties, ReactElement } from 'react';
import { FlexJustify } from '../../../Stack/Flex/Flex';

export type ValidRowModel = {
  [key: string]: any;
};

export interface IColumnTable<T extends ValidRowModel> {
  field: string;
  headerName: string;
  render?: (row: T) => ReactElement;
  width?: string;
  style?: CSSProperties;
  justify?: FlexJustify;
  fullWidth?: boolean;
}

export interface ITableProps<T extends ValidRowModel> {
  className?: string;
  columns: IColumnTable<T>[];
  rows: T[];
  gap?: number | string;
  emptyContent?: ReactElement;
  refLoader?: (node: HTMLElement | null) => void;
  findTotal?: number;
  withCheckbox?: boolean;
  rowLink?: (row: T) => string;
  withoutLastBorder?: boolean;
  isLoading?: boolean;
}
