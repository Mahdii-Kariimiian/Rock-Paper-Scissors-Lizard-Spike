// types.ts
export type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock" | null;
export type WinnerType = "You" | "The House" | "Draw" | null;

export type ColorMap = {
    paper: string;
    scissors: string;
    rock: string;
    lizard: string;
    spock: string;
};

export type IconsData = {
    title: Choice;
    icon: string;
    styles: string;
};


