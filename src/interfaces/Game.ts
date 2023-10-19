export interface Game {
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