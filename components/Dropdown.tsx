import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return <RadixDropdown.Root>{children}</RadixDropdown.Root>;
};

const DropdownTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <RadixDropdown.Trigger className="flex w-52 cursor-default items-center justify-between gap-10 border-4 border-black bg-white py-2 px-3 text-left text-lg focus:outline-none focus-visible:ring-0">
      <span className="block truncate">{children}</span>
      <ChevronDown />
    </RadixDropdown.Trigger>
  );
};

const DropdownContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        align="start"
        className="z-50 mt-1 w-52 border-4 border-black bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
};

const DropdownItem = ({
  children,
  ...props
}: RadixDropdown.DropdownMenuItemProps) => {
  return (
    <RadixDropdown.Item
      className={clsx(
        'hover:bg-brand/20 focus:bg-brand/50 relative cursor-default select-none truncate py-2 px-4 text-lg text-black/80 focus:outline-none'
        // diff === difficultyFilter && 'bg-brand/50'
      )}
      {...props}>
      {children}
    </RadixDropdown.Item>
  );
};

export { Dropdown, DropdownTrigger, DropdownContent, DropdownItem };
