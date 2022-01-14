import React, {useState} from "react";

import "./Calculator.css";

function Calculator() {
    
    const [num,setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        var input = e.target.value; 
        if (num === 0){
            setNum(input);
        }else{
            setNum(num + input);
        }
        //para pegar o valor "alguma coisa + .target.value"
    }

    function clear(){
        setNum(0);
    }

    function porcentage(){
        setNum(num / 100);
    }

    function changeSign(){
        if(num > 0){
            setNum(-num);
        } else {
            setNum(Math.abs(num))
        }
    }

    function operatorHandle(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        if(operator === "/"){
            setNum(parseFloat(oldNum) / parseFloat(num));
        }else if(operator === "x"){
            setNum(parseFloat(oldNum) * parseFloat(num));
        }else if(operator === "-"){
            setNum(parseFloat(oldNum) - parseFloat(num));
        }else if(operator === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num));
            //parseFloat = para resolver o problema na adição. Define o número como realmente um número.
        }
    }


    return(
        <div className="container">
            <div className="calculator">
                <p className="result">{num}</p>
                <div className="grid">
                    <button className="b1 buttons" onClick={clear}>AC</button>
                    <button className="b2 buttons" onClick={changeSign}>+/-</button>
                    <button className="b3 buttons" onClick={porcentage}>%</button>
                    <button className="b4 buttons" onClick={operatorHandle} value="/">/</button>
                    <button className="b5 buttons" onClick={inputNum} value={7}>7</button>
                    <button className="b6 buttons" onClick={inputNum} value={8}>8</button>
                    <button className="b7 buttons" onClick={inputNum} value={9}>9</button>
                    <button className="b8 buttons" onClick={operatorHandle} value="x">X</button>
                    <button className="b9 buttons" onClick={inputNum} value={4}>4</button>
                    <button className="b10 buttons" onClick={inputNum} value={5}>5</button>
                    <button className="b11 buttons" onClick={inputNum} value={6}>6</button>
                    <button className="b12 buttons" onClick={operatorHandle} value="-">-</button>
                    <button className="b13 buttons" onClick={inputNum} value={1}>1</button>
                    <button className="b14 buttons" onClick={inputNum} value={2}>2</button>
                    <button className="b15 buttons" onClick={inputNum} value={3}>3</button>
                    <button className="b16 buttons" onClick={operatorHandle} value="+">+</button>
                    <button className="b17 buttons" onClick={inputNum} value={0}>0</button>
                    <button className="b18 buttons" onClick={inputNum} value=".">,</button>
                    <button className="b19 buttons" onClick={calculate}>=</button>
                </div>
            </div>
        </div>    
    )
}

export default Calculator;