import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = require("./data.json");

const emojis = Object.keys(emojiDictionary);

const appStyle = {
  maxWidth: "700px",
  margin: "auto",
  backgroundColor: "#121212"
};

const inputStyle = {
  display: "block",
  margin: "auto",
  padding: "1rem",
  width: "70%",
  placeholder: "Enter any Food & Drink Emoji",
  backgroundColor: "#1e1e1e",
  border: "none",
  borderRadius: "0.5rem",
  color: "white",
  fontSize: "1.2rem"
};

const outputStyle = {
  display: "block",
  margin: "auto",
  padding: "1rem",
  width: "70%",
  placeholder: "Enter any Food & Drink Emoji",
  backgroundColor: "#1e1e1e",
  border: "none",
  borderRadius: "0.5rem",
  color: "white"
};

const emojiStyle = {
  display: "inline",
  textAlign: "left",
  fontSize: "1.5rem",
  margin: "0.5rem",
  padding: "0.5rem",
  lineHeight: "3rem",
  cursor: "pointer"
};

const selectedEmojiStyle = {
  display: "inline",
  textAlign: "left",
  fontSize: "1.5rem",
  margin: "0.5rem",
  padding: "0.5rem",
  lineHeight: "3rem",
  cursor: "pointer",
  backgroundColor: "#242424",
  borderRadius: "0.5rem"
};

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [error, setError] = useState(false);

  function clickHandler(emoji, idx) {
    setSelectedIdx(idx);
    setSelectedEmoji(emoji);
    setMeaning(emojiDictionary[emoji]);
    setError(false);
  }

  function inputHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji === "") {
      setError(false);
      setSelectedIdx(-1);
    } else if (emojis.includes(inputEmoji)) {
      setSelectedIdx(emojis.indexOf(inputEmoji));
      setSelectedEmoji(inputEmoji);
      setMeaning(emojiDictionary[inputEmoji]);
      setError(false);
    } else {
      setError(true);
      setSelectedIdx(-1);
    }
  }

  return (
    <div className="App" style={appStyle}>
      <h1>Food & Drink Emoji Interpretor</h1>
      {selectedIdx === -1 ? (
        <h2 style={outputStyle}>No Emoji Selected</h2>
      ) : (
        <h2 style={outputStyle}>
          {selectedEmoji} : {meaning}
        </h2>
      )}
      <br />
      <input
        type="text"
        style={inputStyle}
        placeholder="Enter any Food & Drink Emoji"
        onChange={inputHandler}
      />
      {error ? (
        <>
          <br />
          <p style={{ color: "red" }}>Sorry, we don't know this emoji.</p>
        </>
      ) : null}
      <br />
      <p>OR Select any one from the below list</p>
      {emojis.map((emoji, idx) => {
        return (
          <p
            style={idx === selectedIdx ? selectedEmojiStyle : emojiStyle}
            onClick={() => clickHandler(emoji, idx)}
          >
            {emoji}
          </p>
        );
      })}
      <footer>
        <div class="heading-footer">Get in touch with me</div>

        <div>
          <a href="https://github.com/Omkar-Ghate" target="blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/omkarghate/" target="blank">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
