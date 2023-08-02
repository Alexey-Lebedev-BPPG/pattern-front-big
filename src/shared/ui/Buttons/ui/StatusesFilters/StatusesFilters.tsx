import { memo, useCallback, useState } from 'react';
import cls from './statusesFilters.module.scss';
import { HStack } from '../../../Stack';
import { Button } from '../Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

interface StatusesFiltersProps {
  statuses: string[];
  onChangeStatuses?: (status: string[]) => void;
}

export const StatusesFilters = memo((props: StatusesFiltersProps) => {
  const { statuses, onChangeStatuses } = props;

  type Status = (typeof statuses)[number];
  const [selectStatuses, setSelectStatuses] = useState<Status[]>([]);

  const active = useCallback(
    (localStatus: string) =>
      selectStatuses && selectStatuses.includes(localStatus),
    [selectStatuses],
  );

  const addStatus = (value: Status) => {
    const inArray = selectStatuses.includes(value);
    const temp = inArray
      ? selectStatuses.filter(item => item !== value)
      : [...selectStatuses, value];
    setSelectStatuses(temp);
    onChangeStatuses?.(temp);
  };

  const mods = (modsStatus: string) => ({
    [cls.active]: active(modsStatus),
    [cls['no-active']]: !active(modsStatus),
  });

  return (
    <HStack gap={0.5}>
      {statuses.map(status => (
        <Button
          key={status}
          typeButton='secondary'
          text={status}
          size='small'
          className={classNames(cls.button, mods(status), [])}
          onClick={() => addStatus(status)}
        />
      ))}
    </HStack>
  );
});
