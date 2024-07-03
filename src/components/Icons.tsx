import { Dispatch, SetStateAction, FC } from "react";
import { ColorMap } from "../utils/Types";
import { Choice } from "../utils/Types";

interface IconsProps {
    title: Choice;
    setMyChoice?: Dispatch<SetStateAction<Choice>>;
    icon: string;
    children: string;
    isClickable?: true;
    color?: ColorMap;
}

const Icons: FC<IconsProps> = ({
    title,
    icon,
    setMyChoice,
    children,
    isClickable,
    color,
}) => {
    return (
        <button
            disabled={isClickable}
            onClick={() => setMyChoice && setMyChoice(title)}
            className={`${children} ring-[12px] ring-[${
                title && color?.[title]
            }]`}
        >
            <img className="w-[40px]" src={icon} />
        </button>
    );
};

export default Icons;
