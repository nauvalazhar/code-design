import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Interfaces } from 'doodle-icons';
import { cn } from 'lib/utils';
import * as React from 'react';

const buttonVariants = cva(
  'flex font-display items-center justify-center gap-4 uppercase',
  {
    variants: {
      variant: {
        default:
          'border-transparent button-shadow button-text-shadow gradient-blue rounded-xl text-brand-light',
        secondary: 'border-black bg-orange-400',
        danger: 'border-black bg-red-500 text-brand'
      },
      size: {
        sm: 'border-2 px-4 py-2 text-lg',
        md: 'border-2 px-6 py-3 text-xl',
        default: 'border-2 px-8 py-4 text-xl'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  progress?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      progress,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={progress || disabled}
        {...props}
      >
        {progress ? (
          <Interfaces.Sync
            className="animate-spin size-8"
            fill="currentColor"
          />
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
