import { VariantProps, cva } from 'class-variance-authority';
import { Asterisk } from 'lucide-react';

export const Field = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="mb-8 text-xl lg:text-2xl" {...props}>
      {children}
    </div>
  );
};

export const FieldAsterisk = () => {
  return (
    <span className="text-red-500 ml-1">
      <Asterisk className="w-6" />
    </span>
  );
};

export const FieldHelp = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="text-lg mt-2 text-black/60" {...props} />;
};

type LabelProps = React.HTMLAttributes<HTMLLabelElement>;

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label className="flex mb-4 text-2xl text-black/80" {...props}>
      {children}
    </label>
  );
};

export const inputStyle = cva(
  'w-full px-4 py-2 border-4 border-black text-2xl focus:outline-none focus-visible:ring-0'
);

type InputProps = VariantProps<typeof inputStyle> &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={inputStyle({ className })} {...props} />;
};

type TextareaProps = VariantProps<typeof inputStyle> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={inputStyle({ className })} {...props} />;
};

export const FieldMessage = ({ message }: { message?: string | string[] }) => {
  if (!message) return null;

  return <div className="text-xl text-red-500 mt-2">{message}</div>;
};
