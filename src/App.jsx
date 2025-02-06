import React, { useCallback, useEffect, useState } from "react";
import CopyButton from "./components/CopyButton";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [isNumber, setNumber] = useState(false);
  const [isSymbol, setSymbol] = useState(false);

  const generatePassword = useCallback(() => {
    let passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumber) passwordString += "0123456789";
    if (isSymbol) passwordString += "!@#$%^&*()_+-=/?";

    let realPassword = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * passwordString.length);
      realPassword += passwordString[index];
    }

    setPassword(realPassword);
  }, [length, isNumber, isSymbol]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <div className="w-full text-center font-semibold">{password}</div>
      <hr className="text-gray-500 h-1 w-full" />
      <div className="w-full flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-1 items-center">
          <label htmlFor="range">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={32}
            id="range"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-5">
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              id="number"
              defaultChecked={isNumber}
              onChange={() => {
                setNumber(!isNumber);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              id="symbol"
              defaultChecked={isSymbol}
              onChange={() => {
                setSymbol(!isSymbol);
              }}
            />
            <label htmlFor="symbol">Symbols</label>
          </div>
        </div>

        <hr className="text-gray-500 h-1 w-full" />

        <CopyButton
          textToCopy={password}
          buttonInitialText={"Copy this Password!"}
          buttonFinalText={"Copied Successfully!"}
        />
      </div>
    </>
  );
}

export default App;
