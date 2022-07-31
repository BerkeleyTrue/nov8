import {
  FunctionComponent,
  PropsWithChildren,
  forwardRef,
  ButtonHTMLAttributes,
} from 'react';

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: FunctionComponent<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      {...rest}
      ref={ref}
      className={
        className +
        ' inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
      }
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
