import React, {forwardRef} from 'react';
import { ButtonProps } from '@/interfaces/ButtonProps';

const styles: { [key: string]: any} = {
    primary: 'bg-primary hover:bg-primary-500 active:bg-primary-500 border border-primary hover:border-primary-500 active:border-primary/90 text-marble disabled:bg-custom-neutral disabled:border-custom-neutral disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    accent: 'bg-accent hover:bg-accent/70 active:bg-accent/70 border border-accent hover:border-accent/10 active:border-accent/70 text-marble disabled:bg-custom-neutral disabled:border-custom-neutral disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    'primary-outline': 'bg-transparent hover:bg-primary/10 active:bg-primary-500 border-2 text-primary border-primary active:border-primary active:text-marble disabled:bg-transparent disabled:border-custom-neutral-500 disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    'accent-outline': 'bg-transparent hover:bg-accent/10 active:bg-accent border-2 text-accent border-accent active:text-marble disabled:bg-transparent disabled:border-custom-neutral-500 disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    types: {
        'only-icon': 'flex justify-center items-center w-[81.5px] h-[48px]',
        'icon-left': 'flex gap-1 items-center justify-center  lg:min-w-[150px] h-[51px]',
        'icon-right': 'flex flex-row-reverse gap-1 items-center justify-center lg:min-w-[150px] h-[51px]',
        'contained': 'flex justify-center items-center lg:min-w-[150px] h-[51px]',
        'outline': 'flex justify-center items-center lg:min-w-[150px] h-[51px]'
    }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant = 'primary',
    type = 'icon-left',
    text,
    icon,
    disabled = false,
    className,
    children,
    ...props},
     ref) => {

    return(
        <>
            <button disabled={disabled} type="button" ref={ref} className={`py-2 px-5 rounded-md ${styles[variant]} font-bold uppercase ${styles.types[type]} ${className} sm:text-xs lg:text-base`} {...props}>
              {icon && icon} <p>{text && text}</p>
            </button>
        </>
    )
});

Button.displayName = "Button";