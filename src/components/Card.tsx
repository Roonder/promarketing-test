'use client'
import {forwardRef, useState} from 'react';
import { HiInformationCircle } from 'react-icons/hi'
import Image from 'next/image';
import { Button } from './Button';
import { useViewport } from '@/hooks/useViewport';

interface GameProps {
    id: number;
    disabled: boolean;
    info: {
        moodBonus: boolean;
        rtp: string;
        version: string;
    };
    name: string;
    src: string;
    supplier: string;
}

const brands: { [key: string]: any} = {
    "playtech": {
        "desktop": "/assets/Size=title, brand=play tech.svg",
        "mobile": undefined
    },
    "evoplay": {
        "desktop": "/assets/Size=title, brand=evoplay.svg",
        "mobile": "/assets/Size=Default.svg"
    },
    "pragmatic": {
        "desktop": "/assets/Size=title, brand=Pragmatic.svg",
        "mobile": undefined
    },
    "spinomenal": {
        "desktop": "/assets/Size=title, brand=spinomenal.svg",
        "mobile": "/assets/Size=spplier.svg"
    }
}

export const Card = forwardRef<HTMLMediaElement, {game: GameProps}>(({game ,...props}, ref) => {
    const {disabled, info: {moodBonus, rtp, version}, name, src: gameImage, supplier} = game;
    const [show, setShow] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const { width } = useViewport();

    const iconSize = () => {
        if(width > 640 && width < 1024) return "mobile";
        if(width > 1024) return "desktop";

        return ""
    }

    const styleProp = {
        backgroundImage: show ? `linear-gradient(to top, rgba(1, 1, 1, .8), rgba(255, 255, 255, .0)), url(${gameImage})` : showInfo ? `linear-gradient(to top, rgba(1, 1, 1, .6), rgba(1, 1, 1, .6)), url(${gameImage})` : `url(${gameImage})`
    } 

    return(
        <article 
            ref={ref} 
            style={styleProp}
            className={`sm:rounded-lg lg:rounded-2xl sm:w-[130px] sm:h-[120px] lg:w-[249px] lg:h-[200px] relative p-2 bg-no-repeat bg-cover bg-center hover:bg-gradient-to-t hover:from-dark hover:to-white`}
            onMouseEnter={e => !showInfo && setShow(true)}
            onMouseLeave={e => setShow(false)}
        >
            <Image 
                src={brands["playtech"][iconSize()]} 
                alt={`${supplier} game - version`} 
                width={20} 
                height={20} 
                className='absolute sm:w-[20px] sm:h-[20px] lg:w-[75px] lg:h-[21px] top-[9px] left-[9px]' 
            />

            <button onClick={e => {
                setShowInfo(!showInfo);
                setShow(false);
            }} className={`p-1  text-marble rounded-[6px] absolute sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] ${showInfo ? "bottom-[9px] bg-accent/30 z-10" : "top-[9px] bg-dark/60"} right-[9px] sm:text-xs lg:text-base ${(show && disabled) && "hidden"}`}><HiInformationCircle /></button>

            {moodBonus && (
                <Image 
                    src={`/assets/bonus.svg`} 
                    alt={`${supplier} game - Bonus Indicator`} 
                    width={20} 
                    height={20} 
                    className={`absolute sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] bottom-[9px] right-[9px] ${showInfo || show ? "bg-accent/30 z-10" : "bg-dark/60"} ${showInfo && "sm:top-[9px] lg:hidden"} ${(show && disabled) && "hidden"} rounded-[6px]`}
                />
            )}

            {show && (
                <>
                    <Button text={disabled ? 'No Disponible' :'Jugar Ahora'} disabled={disabled} type='contained' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[100px] sm:h-[30px] lg:w-fit lg:h-fit whitespace-nowrap'/>

                    <p className='text-white absolute bottom-[16px] left-[9px] font-bold hidden lg:block'>{name}</p>
                </>
            )}

            {showInfo && (
                <section className='absolute bottom-0 flex flex-col gap-2 sm:pb-4 lg:p-4 font-bold text-white'>
                    <p className=' sm:text-xs lg:text-base lg:whitespace-nowrap'>{name}</p>
                    
                    <div className='flex gap-2 uppercase'>
                        <p className="sm:p-1 lg:px-2 lg:py-1 bg-accent/30 rounded-[6px] whitespace-nowrap sm:h-[13px] lg:h-fit w-fit sm:text-[7px] lg:text-xs">
                            Version: {version}
                        </p>
                        <p className="sm:p-1 lg:px-2 lg:py-1 bg-accent/30 rounded-[6px] whitespace-nowrap sm:h-[13px] lg:h-fit w-fit sm:text-[7px] lg:text-xs">
                            RTP: {rtp}
                        </p>
                    </div>
                    <p className="sm:p-1 lg:px-2 lg:py-1 bg-accent/30 rounded-[6px] whitespace-nowrap sm:h-[13px] lg:h-fit w-fit sm:text-[7px] lg:text-xs">
                        Votalidad: Alta
                    </p> 
                </section>
            )}

        </article>
    )
});

Card.displayName = "Card";