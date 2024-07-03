import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";
import { ColorMap } from "../utils/Types";

export const iconsData = [
    {
        title: "paper",
        icon: paper,
        styles: "absolute flex items-center justify-center top-[17%] left-[calc(80%)] bg-white rounded-full size-[100px] ring-[12px] ring-[#5671F4] cursor-pointer",
    },
    {
        title: "rock",
        icon: rock,
        styles: "absolute flex items-center justify-center top-[75%] left-[61%] bg-white rounded-full size-[100px] ring-[12px] ring-[#D54464] cursor-pointer",
    },
    {
        title: "scissors",
        icon: scissors,
        styles: "absolute flex items-center justify-center top-[-40px] left-[50%] transform -translate-x-[50%] bg-white rounded-full size-[100px] ring-[12px] ring-[#EDA526] cursor-pointer",
    },
    {
        title: "spock",
        icon: spock,
        styles: "absolute flex items-center justify-center top-[17%] left-[-20%] bg-white rounded-full size-[100px] ring-[12px] ring-[#52BACD] cursor-pointer",
    },
    {
        title: "lizard",
        icon: lizard,
        styles: "absolute flex items-center justify-center top-[75%] left-[4%] bg-white rounded-full size-[100px] ring-[12px] ring-[#8B57E6] cursor-pointer",
    },
];

export const color: ColorMap = {
    paper: "#5671F4",
    scissors: "#EDA526",
    rock: "#D54464",
    spock: "#52BACD",
    lizard: "#8B57E6",
};

export const win = [
    ["paper", "rock"],
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["rock", "lizard"],
    ["lizard", "spock"],
    ["spock", "scissors"],
    ["scissors", "lizard"],
    ["paper", "spock"],
    ["lizard", "paper"],
    ["spock", "rock"],
];
