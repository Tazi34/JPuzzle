import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";
import {FormControl} from "react-bootstrap";

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
            "h-100 d-flex flex-column justify-content-center align-items-center"
          }
      >
        <h2 className="text-center">Score: {score}</h2>
        <h2 className="text-center">Enter region name.</h2>

        <FormControl
            className={"my-1"}
            style={{maxWidth: 250}}
            autoFocus={true}
            id={"regionInput"}
            type={"text"}
            onKeyDown={handleInputKeyDown}
            value={regionInput}
            onChange={event => setRegionInput(event.target.value)}
        />

        <Button className={"btn btn-dark my-1"} onClick={handleSubmit}>
          Check
        </Button>
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
