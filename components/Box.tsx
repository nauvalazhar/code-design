import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

const Box = (props: BoxProps) => {
  return (
    <div
      className={clsx(
        'relative p-10 lg:p-20',
        'border-4 border-black bg-brand',
        'shadow-solid'
      )}
      {...props}
    />
  );
};

type BoxTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const BoxTitle = ({ className, ...props }: BoxTitleProps) => {
  return (
    <h1
      className={clsx('mb-8 font-display text-2xl lg:text-4xl', className)}
      {...props}
    />
  );
};

export const BoxDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="mb-10 text-xl leading-tight text-black/60">{children}</p>
  );
};

export const BoxTabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex mb-14 overflow-x-auto scrollbar-hide -mt-20 -mx-20">
      {children}
    </div>
  );
};

type BoxTabProps = React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  active?: boolean;
};

export const BoxTab = ({
  children,
  asChild = false,
  active,
  ...props
}: BoxTabProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'flex-1 flex items-center justify-center',
        'px-8 py-6 font-display text-xl border-b-4 border-r-2 last:border-r-0 border-black',
        'focus:outline-none focus-visible:ring-0',
        active ? 'bg-yellow-400' : 'bg-yellow-300'
      )}
      {...props}>
      {children}
    </Comp>
  );
};

export default Box;
