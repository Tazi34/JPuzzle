import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

export function TypeModeScoreBoard({onSubmit, score, ...props}) {
  const [regionInput, setRegionInput] = useState("");
  const handleInputKeyDown = event => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onSubmit(regionInput);
    setRegionInput("");
  };

  return (
      <div
          className={
            "d-flex flex-column justify-content-center h-100 align-items-center"
          }
      >
        <h2>Score: {score}</h2>
        <h2>Enter region name.</h2>
        <div className={"d-flex justify-content-center"}>
          <input
              autoFocus={true}
              id={"regionInput"}
              type={"text"}
              onKeyDown={handleInputKeyDown}
              value={regionInput}
              onChange={event => setRegionInput(event.target.value)}
          />
          <Button className={"btn btn-dark "} onClick={handleSubmit}>
            Check
          </Button>
        </div>
      </div>
  );
}

TypeModeScoreBoard.propTypes = {
  score: PropTypes.number,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  currentRegion: PropTypes.any
};
