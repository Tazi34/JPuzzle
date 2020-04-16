import React from "react";
import Button from "react-bootstrap/Button";

export const RandomModeScoreBoard = ({
                                       score,
                                       currentRegion,
                                       onCheck,
                                       ...props
                                     }) => {
  return (
      <div
          className={
            "h-100 d-flex flex-column justify-content-center align-items-center"
          }
      >
        <h2 className={"text-center"}>Score: {score}</h2>
        <h2 className={"text-center"}>{currentRegion}</h2>
        <Button variant={"dark"} onClick={onCheck}>
          Check
        </Button>
      </div>
  );
};
