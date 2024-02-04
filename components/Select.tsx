import * as RadixSelect from '@radix-ui/react-select';
import clsx from 'clsx';
import { Check, ChevronDown } from 'lucide-react';

const Select = ({ children, ...props }: RadixSelect.SelectProps) => {
  return <RadixSelect.Root {...props}>{children}</RadixSelect.Root>;
};

type SelectTriggerProps = RadixSelect.SelectTriggerProps & {
  placeholder: string;
};

const SelectTrigger = ({ placeholder }: SelectTriggerProps) => {
  return (
    <RadixSelect.Trigger className="flex w-52 cursor-default items-center justify-between gap-10 border-4 border-black bg-white py-2 px-3 text-left text-lg focus:outline-none focus-visible:ring-0">
      <RadixSelect.Value placeholder={placeholder} />
      <RadixSelect.Icon>
        <ChevronDown />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
};

const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        align="start"
        className="z-50 mt-1 w-52 border-4 border-black bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
};

const SelectItem = ({ children, ...props }: RadixSelect.SelectItemProps) => {
  return (
    <RadixSelect.Item
      className={clsx(
        'hover:bg-brand/20 focus:bg-brand/50 relative cursor-default select-none truncate py-2 px-4 text-lg text-black/80 focus:outline-none'
        // diff === difficultyFilter && 'bg-brand/50'
      )}
      {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute right-4">
        <Check className="w-4" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
};

export { Select, SelectTrigger, SelectContent, SelectItem };
