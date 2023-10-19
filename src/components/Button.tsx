import React, {forwardRef} from 'react';

interface ButtonProps { 
    children?: React.ReactNode
    variant?: string
    type?: string
    text?: string
    icon?: React.ReactNode
    disabled?: boolean
}


const styles: { [key: string]: any} = {
    primary: 'bg-primary hover:bg-primary-500 active:bg-primary-500 border border-primary hover:border-primary-500 active:border-primary/90 text-marble disabled:bg-custom-neutral disabled:border-custom-neutral disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    accent: 'bg-accent hover:bg-accent/70 active:bg-accent/70 border border-accent hover:border-accent/10 active:border-accent/70 text-marble disabled:bg-custom-neutral disabled:border-custom-neutral disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    'primary-outline': 'bg-transparent hover:bg-primary/10 active:bg-primary-500 border-2 text-primary border-primary active:border-primary active:text-marble disabled:bg-transparent disabled:border-custom-neutral-500 disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    'accent-outline': 'bg-transparent hover:bg-accent/10 active:bg-accent border-2 text-accent border-accent active:text-marble disabled:bg-transparent disabled:border-custom-neutral-500 disabled:text-custom-neutral-500 disabled:cursor-not-allowed',
    types: {
        'only-icon': 'text-center',
        'icon-left': 'flex gap-1 items-center justify-center',
        'icon-right': 'flex flex-row-reverse gap-1 items-center justify-center',
        'contained': 'text-center',
        'outline': 'text-center'
    }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant = 'primary',
    type = 'icon-left',
    text,
    icon,
    disabled = false,
    children,
    ...props},
     ref) => {

    return(
        <>
            <button disabled={disabled} type="button" ref={ref} className={`py-2 px-5 rounded-md ${styles[variant]} font-bold uppercase ${styles.types[type]}`} {...props}>
              {icon && icon} <p>{text && text}</p>
            </button>
        </>
    )
});

Button.displayName = "Button";