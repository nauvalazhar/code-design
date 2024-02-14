'use client';

import clsx from 'clsx';
import { Command, useCommandState, type CommandRoot } from 'cmdk';
import { inputStyle } from 'components/Form';

type ComboboxProps = React.ComponentProps<typeof CommandRoot>;

export const Combobox = ({ children, ...props }: ComboboxProps) => {
  return (
    <Command label="Command Menu" className="relative" {...props}>
      {children}
    </Command>
  );
};

type ComboboxListProps = React.ComponentProps<typeof Command.List>;

export const ComboboxList = (props: ComboboxListProps) => {
  const search = useCommandState((state) => state.search);

  return (
    <Command.List
      className={clsx(
        'absolute w-full bg-white border-4 border-black bottom-16 min-h-14 overflow-hidden',
        'h-[var(--cmdk-list-height)] transition-all',
        search.length === 0 && 'hidden'
      )}
      {...props}
    />
  );
};

type ComboboxInputProps = React.ComponentProps<typeof Command.Input>;

export const ComboboxInput = (props: ComboboxInputProps) => {
  return <Command.Input className={clsx(inputStyle())} {...props} />;
};

type ComboboxItemProps = React.ComponentProps<typeof Command.Item>;

export const ComboboxItem = (props: ComboboxItemProps) => {
  return (
    <Command.Item
      className={clsx('px-4 py-2 data-[selected]:bg-brand/20')}
      {...props}
    />
  );
};

type ComboboxLoadingProps = React.ComponentProps<typeof Command.Loading>;

export const ComboboxLoading = (props: ComboboxLoadingProps) => {
  return (
    <Command.Loading
      className="absolute right-4 top-1/2 -translate-y-1/2"
      {...props}
    />
  );
};

type ComboboxEmptyProps = React.ComponentProps<typeof Command.Empty>;

export const ComboboxEmpty = (props: ComboboxEmptyProps) => {
  return <Command.Empty className="px-4" {...props} />;
};
