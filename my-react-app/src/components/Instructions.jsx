const Instructions = ({ instructions }) => {
    return (
        <div className="recipe-paragraph">
            {instructions.map((instructions, index) => (
                <div key={index}>
                    {instructions}
                </div>
            ))}
        </div>
    );
}

export default Instructions;