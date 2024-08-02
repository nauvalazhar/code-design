import { cva, VariantProps } from 'class-variance-authority';

const sectionTitleVariants = cva(
  [
    'text-2xl font-semibold relative',
    'before:absolute before:-z-10 before:bg-blue-500',
    'before:-left-2 before:-right-2 before:-top-1 before:-bottom-1',
    'before:-rotate-2'
  ],
  {
    variants: {
      variant: {
        primary: 'before:bg-blue-500',
        rose: 'before:bg-rose-500'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);

type SectionTitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof sectionTitleVariants>;

export function SectionTitle({
  children,
  variant,
  className
}: SectionTitleProps) {
  return (
    <h2 className={sectionTitleVariants({ variant, className })}>{children}</h2>
  );
}
