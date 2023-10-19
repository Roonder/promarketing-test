import {forwardRef} from 'react';

const brands = {

}

export const Card = forwardRef<HTMLMediaElement>(({...props}, ref) => {
    return(
        <>
            <article ref={ref} className='rounded-md'>

            </article>
        </>
    )
});

Card.displayName = "Card";