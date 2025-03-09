import React, { useState, useEffect } from 'react';
import foundDuck from "../assets/duck_found.jpg"
import missedDuck from "../assets/missed_duck.jpg"
import _ from 'lodash';

const originalBoard = [
    { color: "rgb(19, 55, 139)", duck: false, img: ""},
    { color: "rgb(19, 55, 139)", duck: false, img: ""},
    { color: "rgb(19, 55, 139)", duck: false, img: ""}
];

const Game = () => {
    const [board, setBoard] = useState(_.cloneDeep(originalBoard));
    const [turnCount, setTurn] = useState(originalBoard.length - 1);
    const [isGameOver, setGameOver] = useState(false);

    const tileClick = (loc) => {
        if (isGameOver) return; // Stop clicks if game is over

        setBoard(prevBoard => {
            const tempBoard = _.cloneDeep(prevBoard);
            if (tempBoard[loc].color !== "black") {
                setTurn(prevTurn => prevTurn - 1);
                //Right here logic for finding duck
                if (tempBoard[loc].duck){
                    setGameOver(true);
                    tempBoard[loc].img=foundDuck;
                }
            }
            tempBoard[loc].color = "black";
            return tempBoard;
        });

        if (turnCount < 1) {
            setGameOver(true);
            handleLoss();
        }
    };

    const shuffleDuck = () => {
        const randInt = Math.floor(Math.random() * 3);
        console.log("Random Integer:", randInt);
        setBoard(prevBoard => {
            const tempBoard = _.cloneDeep(prevBoard);
            tempBoard[randInt].duck = true;
            return tempBoard;
        });
    };

    useEffect(() => {
        shuffleDuck();
    }, []);

    const restart = () => {
        console.log("Restarting...");
        setBoard(_.cloneDeep(originalBoard));
        setTurn(originalBoard.length - 1);
        setGameOver(false);
        shuffleDuck();
    };

    const handleLoss = () => {
        board.forEach((map) => {
            if(map.color != "black")
                map.img = missedDuck;
        })
    }

    return (
        <div style={{marginLeft:"1rem"}}>
            <h1>WE NEED TO DUMP OIL</h1>
            <h3>Try to guess which hole the duck is in. Careful, we don't want him escaping now!</h3>
            <h3>Turns Left: {turnCount}</h3>
            <br /><br /><br />
            <div className='gameArea' style={{ display: "flex", justifyContent: "space-around" }}>
                {board.map((item, index) => (
                    <Tile key={index} click={() => tileClick(index)} bgColor={item.color} img={item.img} />
                ))}
            </div>
            <button onClick={restart}>Restart</button>
        </div>
    );
};

const Tile = (props) => {
    
    return (
        <div
        onClick={props.click}
        style={{
            height: "230px",
            width: "230px",
            background: props.bgColor,
            border: "5px solid rgb(30, 30, 30)",
            cursor: "pointer",
            textAlign: "center"
        }}
        >
            {props.img !== "" ? <img style={{height:"115px", marginTop: "50px"}} src={props.img}></img> : null}
            
        </div>
    )
};

export default Game;