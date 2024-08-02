'use client';

import { useSearchParamsManipulator } from 'lib/hooks/useSearchParamsManipulator';
import type { Category } from 'schemas/categories';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from 'components/Select';

const CategoriesSelectorClient = ({
  categories
}: {
  categories: Category[];
}) => {
  const { setSearchParams, searchParams } = useSearchParamsManipulator();

  function handleSelect(category) {
    if (category === '-1') {
      category = undefined;
    }

    setSearchParams({
      category
    });
  }

  return (
    <Select
      onValueChange={handleSelect}
      value={searchParams.get('category') || '-1'}
    >
      <SelectTrigger placeholder="Category" />
      <SelectContent>
        <SelectItem value="-1">Category</SelectItem>
        {categories.map(({ id, name }) => (
          <SelectItem key={id} value={String(id)}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoriesSelectorClient;
