'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from 'components/Select';
import { useSearchParamsManipulator } from 'lib/utils';
import type { Difficulty } from 'schemas/difficulties';

const DifficultiesSelectorClient = ({
  difficulties,
}: {
  difficulties: Difficulty[];
}) => {
  const { setSearchParams, searchParams } = useSearchParamsManipulator();

  function handleSelect(difficulty) {
    if (difficulty === '-1') {
      difficulty = undefined;
    }

    setSearchParams({
      difficulty,
    });
  }

  return (
    <Select
      onValueChange={handleSelect}
      value={searchParams.get('difficulty') || '-1'}>
      <SelectTrigger placeholder="Difficulty" />
      <SelectContent>
        <SelectItem value="-1">Difficulty</SelectItem>
        {difficulties.map(({ id, name }) => (
          <SelectItem key={id} value={String(id)}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DifficultiesSelectorClient;
