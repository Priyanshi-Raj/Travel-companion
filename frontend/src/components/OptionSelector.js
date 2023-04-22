import React, { useState } from "react";

function OptionSelector({ options, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

  function handleSubmit() {
    onSubmit(selectedOption);
  }

  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => handleOptionSelect(option)}>
          {option}
        </button>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default OptionSelector;
