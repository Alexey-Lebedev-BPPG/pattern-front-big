import { memo, useCallback, useMemo } from 'react';
import cls from './Table.module.scss';
import { Spinner } from '../../Loaders';
import { HStack, VStack } from '../../Stack';
import { ITableProps, ValidRowModel } from '../model/types/table';
import { classNames } from '@/shared/lib/classNames/classNames';

const typedMemo: <T>(c: T) => T = memo;

export const Table = typedMemo(
  <T extends ValidRowModel>(props: ITableProps<T>) => {
    const {
      className,
      columns,
      rows,
      emptyContent,
      findTotal,
      refLoader,
      withCheckbox = false,
      rowLink,
      withoutLastBorder = false,
      gap = 0,
      isLoading,
    } = props;

    const headerContent = useMemo(
      () =>
        columns.map((column, index) => {
          const {
            field,
            headerName,
            style,
            width = 5,
            justify = 'start',
            fullWidth,
          } = column;

          return (
            <HStack
              key={field + index}
              justify={justify}
              max={fullWidth}
              style={{ minWidth: width, ...style }}
            >
              {headerName}
            </HStack>
          );
        }),
      [columns],
    );

    const currentChildren = useCallback(
      (row: T) =>
        columns.map((column, indexColumn) => {
          const {
            field,
            render,
            style,
            width,
            justify = 'start',
            fullWidth,
          } = column;

          return (
            <HStack
              key={field + indexColumn}
              justify={justify}
              max={fullWidth}
              style={{ minWidth: width, ...style }}
            >
              {render ? render(row) : row[field]}
            </HStack>
          );
        }),
      [columns],
    );

    const bodyContent = useMemo(
      () =>
        rows.map((row, indexRow) =>
          rowLink ? (
            <a
              key={row.id + indexRow}
              href={rowLink(row)}
              style={{ gap: `${gap}rem` }}
              className={classNames(cls.row, {}, [cls.cursor])}
            >
              {currentChildren(row)}
            </a>
          ) : (
            <div
              key={row.id + indexRow}
              className={cls.row}
              style={{ gap: `${gap}rem` }}
            >
              {currentChildren(row)}
            </div>
          ),
        ),
      [currentChildren, gap, rowLink, rows],
    );

    const emptyTableContent = useMemo(
      () =>
        emptyContent || (
          <HStack
            max
            align='center'
            justify='center'
            className={cls['empty-table']}
          >
            <p>{'Not found'}</p>
          </HStack>
        ),
      [emptyContent],
    );

    const selectContent = useMemo(() => {
      if (isLoading)
        return (
          <HStack justify='center'>
            <Spinner />
          </HStack>
        );
      return rows.length > 0 ? bodyContent : emptyTableContent;
    }, [bodyContent, emptyTableContent, isLoading, rows.length]);

    return (
      <VStack
        max
        className={classNames(
          cls['list-table'],
          { [cls['without-last-border']]: withoutLastBorder },
          [className],
        )}
      >
        <HStack max className={cls.th} gap={gap}>
          {headerContent}
        </HStack>
        <VStack max className={cls.tb} align='center'>
          {selectContent}
          {!!findTotal && !!rows.length && findTotal > rows.length && (
            <HStack ref={refLoader} max justify='center' className={cls.loader}>
              <Spinner size='1.5rem' />
            </HStack>
          )}
        </VStack>
      </VStack>
    );
  },
);
