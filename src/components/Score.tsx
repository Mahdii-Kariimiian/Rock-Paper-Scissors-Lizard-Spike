import logo from "../assets/logo-bonus.svg";
type ScoreProps = {
    score: number;
};

const Score = ({ score }: ScoreProps) => {
    return (
        <div>
            <section className="flex items-center gap-3 min-w-[max-content] text-[16px] justify-between border-[3px] border-gray-500 rounded-md p-3 md:text-[24px] max-w-xl mx-auto">
                <img className="w-[60px] md:w-[80px]" src={logo} alt="logo" />

                <div className="text-[1em] bg-white text-gray-700 rounded-sm px-5 md:px-8 py-1 text-center whitespace-nowrap">
                    <p className="uppercase text-[.6em]">Score</p>
                    <p className="text-[1.5em] font-bold">{score}</p>
                </div>
            </section>
        </div>
    );
};

export default Score;
