'use client';

import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxLoading,
} from 'components/Combobox';
import { Interfaces } from 'doodle-icons';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import { Tech } from 'schemas/techs';

type TechSelectorProps = {
  loadFunc: (search: string) => Promise<Tech[]>;
  defaultValue?: Tech[];
};

const TechSelector = ({ loadFunc, defaultValue }: TechSelectorProps) => {
  const [techs, setTechs] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Tech[]>(defaultValue || []);
  const [search, setSearch] = useState('');
  const [serializedValues, setSerializedValues] = useState('');

  useEffect(() => {
    setSerializedValues(selected.map((tech) => tech.id).join(','));
  }, [selected]);

  const debouncedLoadData = useCallback(
    debounce(async (search) => {
      if (search === '') {
        setTechs([]);
        setLoading(false);
        return;
      }

      const techs = await loadFunc(search);

      setTechs(techs);
      setLoading(false);
    }, 500),
    [loadFunc]
  );

  async function handleInput(input) {
    const value = input.target.value;

    setSearch(value);
    setLoading(true);
    debouncedLoadData(value);
  }

  async function handleSelect(value) {
    if (selected.find((tech) => tech.id === value.id)) {
      return;
    }

    setSelected((prev) => [...prev, value]);
    setTechs([]);
    setSearch('');
    debouncedLoadData.cancel();
  }

  async function handleRemove(id: number) {
    setSelected((prev) => prev.filter((tech) => tech.id !== id));
  }

  return (
    <>
      <Combobox shouldFilter={false}>
        <ComboboxInput
          placeholder="Search technologies ..."
          onInput={handleInput}
          value={search}
        />
        {loading && (
          <ComboboxLoading>
            <Interfaces.Sync className="animate-spin w-6" />
          </ComboboxLoading>
        )}
        <ComboboxList>
          {loading && <ComboboxItem disabled>Searching ...</ComboboxItem>}
          {!loading && search.length > 0 && techs.length === 0 && (
            <ComboboxItem disabled>No results found</ComboboxItem>
          )}

          {techs.map((tech) => (
            <ComboboxItem key={tech.id} onSelect={() => handleSelect(tech)}>
              {tech.name}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </Combobox>

      {selected.length > 0 && (
        <div className="mt-4 space-x-4 mb-6">
          {selected.map((tech) => (
            <div
              key={tech.id}
              className="shadow-solid-sm bg-purple-400 inline-block border-2 border-black px-2 py-1">
              {tech.name}
              <button
                className="ml-4"
                type="button"
                onClick={() => handleRemove(tech.id)}>
                <Interfaces.Cross className="w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <input type="hidden" name="techs" value={serializedValues} />
    </>
  );
};

export default TechSelector;
