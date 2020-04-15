import React from "react";
import Button from "react-bootstrap/Button";

export const FindAllModeScoreBoard = ({
                                        remaining,
                                        currentRegion,
                                        onCheck,
                                        ...props
                                      }) => {
  return (
      <div
          className={
            "d-flex flex-column justify-content-center h-100 align-items-center"
          }
      >
        <h2>Remaining: {remaining}</h2>
        <h2>{currentRegion}</h2>
        <Button variant={"dark"} onClick={onCheck}>
          Check
        </Button>
      </div>
  );
};
