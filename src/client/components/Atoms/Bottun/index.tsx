import React from "react";
import Presentation from './presentation'

export type Props = {
    handleClick: () => void;
    displayText: string;
}

const Button = ({ text }: {text: string} ): JSX.Element => {
    // ロジックをここに書いてく
    const displayText = `今日は${text}を食べたい`;
    const handleClick = () => {
        const wordList = ["食べる", "食べない", "お腹空いてない", "他のがいい"];
        const wordCount = wordList.length - 1;
        const random = Math.floor(Math.random() * (wordCount + 1));
        alert(wordList[random]);
    };
    return (
        <Presentation handleClick={handleClick} displayText={displayText} />
    );
};

export default Button;
