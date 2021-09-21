import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🐵": "Monkey Face",
  "🐶": "Dog Face",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🐱": "Cat Face",
  "😹": "Cat with Tears of Joy",
  "🐷": "Pig Face",
  "🐄": "Cow",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐭": "Mouse Face",
  "🦇": "Bat",
  "🐔": "Chicken"
};

export default function App() {
  var [meaning, setmeaning] = useState("Meaning will be shown here");

  var emojilist = Object.keys(emojiDictionary);

  function textHandler(event) {
    var textInput = event.target.value;
    meaning = emojiDictionary[textInput];
    if (meaning === undefined) {
      meaning = "sorry this emoji is not in our database";
    }
    setmeaning(meaning);
  }

  function clickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Emoji Translator <span id="head-second">(Animal Edition)</span>
      </h1>

      <div>
        <input
          placeholder="Input emoji here"
          id="text-area"
          type="text"
          onChange={textHandler}
        />
      </div>

      <div id="output-div">{meaning}</div>

      <div id="list">
        {emojilist.map((emoji) => {
          return (
            <span
              id="list-inner"
              key={emoji}
              onClick={() => clickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
