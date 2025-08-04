import { useState } from "react";
import "./components/InputBox.jsx";
import InputBox from "./components/InputBox.jsx";
import OutputAndCopy from "./components/OutputAndCopy.jsx";
import RangeSlider from "./components/RangeSlider.jsx";

const App = () => {
  // parameters
  const [len, setlen] = useState(8);
  const [lowercaseStatus, setLowercaseStatus] = useState(true);
  const [uppercaseStatus, setUppercaseStatus] = useState(true);
  const [numberStatus, setNumberStatus] = useState(false);
  const [symbolStatus, setSymbolStatus] = useState(false);
  const [string, setString] = useState("");

  // generates random string based on given parameters
  const generateString = (event) => {
    // console.log(document.getElementById("output").innerText);

    event.preventDefault();

    let str = "";
    let characters = "";
    const lowercase = "zpxvbwecujoltyrmihfgdskanq";
    const uppercase = "UFINVDAXQZPYRHTSLKJOMWGCBE";
    const numbers = "6193027845";
    const symbols = "-~>[%$#@\"^.,<({|!&?+=/});'_*`:";

    if (lowercaseStatus) characters += lowercase;
    if (uppercaseStatus) characters += uppercase;
    if (numberStatus) characters += numbers;
    if (symbolStatus) characters += symbols;

    const limit = characters.length;

    for (let i = 0; i < len; i++) {
      str += characters.charAt(Math.floor(Math.random() * limit));
    }

    setString((old) => str);
    document.getElementById("output").value = str;
  };

  return (
    <div className="flex flex-col bg-[#2a2a2a] h-screen items-center justify-center text-2xl">
      <form className="bg-[#1a1a1a] p-7 w-2xl rounded-lg shadow-md text-white flex flex-col">
        <OutputAndCopy string={string} setString={setString} />

        <button
          onClick={generateString}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Generate
        </button>

        <br />
        {/* <label htmlFor="range">{len}</label> */}

        <RangeSlider
          id="range"
          name="range"
          min="1"
          max="128"
          value={len}
          onChange={(e) => setlen(e.target.value)}
          len={len}
        />

        <div className="flex justify-between mt-4">
          <div>
            <InputBox
              id="lowercase"
              name="lowercase"
              onChangeFn={(e) => setLowercaseStatus(e.target.checked)}
              checked={lowercaseStatus}
            />
            <InputBox
              id="uppercase"
              name="uppercase"
              onChangeFn={(e) => setUppercaseStatus(e.target.checked)}
              checked={uppercaseStatus}
            />
          </div>

          <div>
            <InputBox
              id="numbers"
              name="numbers"
              onChangeFn={(e) => setNumberStatus(e.target.checked)}
              checked={numberStatus}
            />

            <InputBox
              id="symbols"
              name="symbols"
              onChangeFn={(e) => setSymbolStatus(e.target.checked)}
              checked={symbolStatus}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
