import React from "react";

function Form() {
  const [word, setWord] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ word });

    setWord("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess: {word}</label>
        <input
          required={true}
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={word}
          onChange={(e) => setWord(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Form;
