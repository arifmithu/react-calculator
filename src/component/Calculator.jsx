import React, { useState } from "react";

function Calculator() {
  const [typedText, setTypedText] = useState("");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [sign, setSign] = useState("");
  const [result, setResult] = useState("");

  const handlefirstNumber = (operator) => {
    if (firstNum && sign) {
      if (sign == "/") {
        setFirstNum(firstNum / Number(typedText));
      } else if (sign == "*") {
        setFirstNum(firstNum * Number(typedText));
      } else if (sign == "-") {
        setFirstNum(firstNum - Number(typedText));
      } else {
        setFirstNum(firstNum + Number(typedText));
      }
      setSign(operator);
      setTypedText("");
      setSecondNum("");
    } else {
      setFirstNum(Number(typedText));
      setSign(operator);
      setTypedText("");
      setSecondNum("");
    }
  };
  const calculateResult = () => {
    if (sign == "/") {
      setFirstNum(firstNum / Number(typedText));
    } else if (sign == "*") {
      setFirstNum(firstNum * Number(typedText));
    } else if (sign == "-") {
      setFirstNum(firstNum - Number(typedText));
    } else {
      setFirstNum(firstNum + Number(typedText));
    }
    setSign("");
    setTypedText("");
  };
  const clearAll = () => {
    setSign("");
    setFirstNum(0);
    setTypedText("");
  };
  return (
    <div className="border-2 w-[500px] mx-auto">
      <div className="bg-gray-400">
        {firstNum && sign && secondNum
          ? firstNum + sign + Number(secondNum)
          : firstNum && sign
          ? firstNum + sign
          : firstNum
          ? firstNum
          : Number(typedText)}
      </div>
      <div className="flex">
        <button onClick={clearAll} className="w-[450px] border">
          Clear
        </button>
        <p
          onClick={() => handlefirstNumber("/")}
          className="w-[50px] text-center border"
        >
          &#247;
        </p>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            setTypedText(typedText + 7);
            setSecondNum(secondNum + 7);
          }}
          className="w-[150px] border"
        >
          7
        </button>
        <button
          onClick={() => {
            setTypedText(typedText + 8);
            setSecondNum(secondNum + 8);
          }}
          className="w-[150px] border"
        >
          8
        </button>
        <button
          onClick={() => {
            setTypedText(typedText + 9);
            setSecondNum(secondNum + 9);
          }}
          className="w-[150px] border"
        >
          9
        </button>
        <button
          onClick={() => handlefirstNumber("*")}
          className="w-[50px] border"
        >
          &#215;
        </button>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            setTypedText(typedText + 4);
            setSecondNum(secondNum + 4);
          }}
          className="w-[150px] border"
        >
          4
        </button>
        <button
          onClick={() => {
            setTypedText(typedText + 5);
            setSecondNum(secondNum + 5);
          }}
          className="w-[150px] border"
        >
          5
        </button>
        <button
          onClick={() => {
            setTypedText(typedText + 6);
            setSecondNum(secondNum + 6);
          }}
          className="w-[150px] border"
        >
          6
        </button>
        <button
          onClick={() => handlefirstNumber("-")}
          className="w-[50px] border"
        >
          -
        </button>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            setTypedText(typedText + 1);
            setSecondNum(secondNum + 1);
          }}
          className="w-[150px] border"
        >
          1
        </button>
        <button
          onClick={() => {
            setTypedText(typedText + 2);
            setSecondNum(secondNum + 2);
          }}
          className="w-[150px] border"
        >
          2
        </button>
        <button
          onClick={() => {
            setTypedText(typedText + 3);
            setSecondNum(secondNum + 3);
          }}
          className="w-[150px] border"
        >
          3
        </button>
        <button
          onClick={() => handlefirstNumber("+")}
          className="w-[50px] border"
        >
          +
        </button>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            setTypedText(typedText + 0);
            setSecondNum(secondNum + 0);
          }}
          className="w-[450px] border"
        >
          0
        </button>
        <button onClick={calculateResult} className="w-[50px] border">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
