import { useState } from "react";

const Box = ({id,handleMoves,boxClickedHistory}) => {

    const [boxClicked, setBoxClicked] = useState(false);
    let square = <span>&#10060;</span>;

    if (boxClickedHistory !== undefined){
        const squareInfo = boxClickedHistory.find(e => e.idBox === id);
        if(!squareInfo?.player1){
            square = <span>&#11093;</span>
        }
    }
    const handleClick = () => {
        if(!boxClicked){
            setBoxClicked(true);
            handleMoves(id)
        }
    }
    const className = boxClicked ? "GridBox block" : "GridBox";
    return(
        <section className={className} onClick={handleClick}>
            {boxClickedHistory !== undefined && boxClicked && square}
         
        </section>
    )
}
export default Box
