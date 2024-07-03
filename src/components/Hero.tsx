import { useEffect, useState, useCallback } from "react";
//Components
import Score from "./Score";
import Icons from "./Icons";
import Rules from "./Rules";
import Winner from "./Winner";
//Data
import { iconsData, color, win } from "../db/data";
//Types
import { Choice, WinnerType } from "../utils/Types";
// Images
import pentagon from "../assets/bg-pentagon.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";

const Hero = () => {
    const [score, setScore] = useState<number>(0);
    const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
    const [myChoice, setMyChoice] = useState<Choice | null>(null);
    const [computersChoice, setComputersChoice] = useState<Choice | null>(null);
    const [winner, setWinner] = useState<WinnerType>(null);
    const choices: Choice[] = ["paper", "rock", "scissors", "lizard", "spock"];

    // Icon based on the selection function
    const iconSelector = useCallback(
        (choice: Choice | "") =>
            choice === "paper"
                ? paper
                : choice === "rock"
                ? rock
                : choice === "scissors"
                ? scissors
                : choice === "lizard"
                ? lizard
                : choice === "spock"
                ? spock
                : "",
        []
    );

    // Set Score
    useEffect(() => {
        if (winner === "You") setScore((prev) => prev + 1);
        else if (winner === "The House") setScore((prev) => prev - 1);
    }, [winner]);

    // Computer's random choice
    useEffect(() => {
        if (myChoice) {
            const timer = setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 5);
                const CMChoice = choices[randomNumber] as Choice;
                setComputersChoice(CMChoice);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [myChoice]);

    // Pick winner
    useEffect(() => {
        const winnerResult =
            myChoice === null || computersChoice === null
                ? null
                : myChoice === computersChoice
                ? "Draw"
                : win.some(
                      (combination) =>
                          combination[0] === myChoice &&
                          combination[1] === computersChoice
                  )
                ? "You"
                : "The House";

        setWinner(winnerResult);
    }, [myChoice, computersChoice]);

    return (
        <div className="relative h-[100dvh] p-8">
            <Score score={score} />
            {/* before choosing  */}
            {!myChoice && (
                <section className="z-0 max-sm:transform max-sm:scale-[80%] relative flex items-center justify-center">
                    <div className="absolute top-[135px] w-[250px]">
                        <img src={pentagon} alt="pentagon shape" />
                        {iconsData.map((iconData) => {
                            return (
                                <div key={iconData.title}>
                                    <Icons
                                        title={iconData.title as Choice}
                                        icon={iconData.icon}
                                        setMyChoice={setMyChoice}
                                    >
                                        {iconData.styles}
                                    </Icons>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* after choosing */}
            {myChoice && (
                <section className="relative z-0 flex lg:gap-[70px] gap-[60px] sm:gap-[50px] mt-[110px] items-center justify-center">
                    <div className="flex flex-col items-center">
                        <Icons
                            isClickable={true}
                            title={myChoice}
                            icon={iconSelector(myChoice)}
                            color={color}
                            setMyChoice={setMyChoice}
                        >
                            flex items-center justify-center bg-white
                            rounded-full size-[100px] ring-[12px]
                        </Icons>
                        <h2 className="mt-10 uppercase text-sm font-bold">
                            You picked
                        </h2>
                    </div>
                    {/* Showing Result */}
                    {winner !== null && (
                        <Winner
                            winner={winner}
                            setWinner={setWinner}
                            setMyChoice={setMyChoice}
                            setComputersChoice={setComputersChoice}
                        />
                    )}

                    {computersChoice ? (
                        <div className="flex flex-col items-center">
                            <Icons
                                isClickable={true}
                                title={computersChoice}
                                icon={iconSelector(computersChoice)}
                                setMyChoice={setMyChoice}
                                color={color}
                            >
                                flex items-center justify-center bg-white
                                rounded-full size-[100px]
                            </Icons>
                            <h2 className="mt-10 uppercase text-sm font-bold whitespace-nowrap">
                                The house picked
                            </h2>
                        </div>
                    ) : (
                        <div className="font-bold">
                            The House is Picking ...
                        </div>
                    )}
                </section>
            )}

            {/* Rules Button */}
            <button
                onClick={() => setIsRulesOpen((prev) => !prev)}
                className="absolute min-w-[max-content] max-w-[max-content] max-md:left-[50%] max-md:transform max-md:-translate-x-[50%] bottom-10 right-10 border border-white rounded-lg px-10 py-2"
            >
                RULES
            </button>

            {/* Rules conditional rendering */}
            {isRulesOpen ? <Rules setIsRulesOpen={setIsRulesOpen} /> : null}
            {isRulesOpen && (
                <div className="z-0 absolute inset-0 backdrop-brightness-50">
                    {/*for darkening background */}
                </div>
            )}
        </div>
    );
};

export default Hero;
