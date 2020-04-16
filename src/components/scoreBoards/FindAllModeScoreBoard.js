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
            "h-100 d-flex flex-column justify-content-center align-items-center"
          }
      >
        <h3 className="text-center text-primary">Left: {remaining}</h3>
        <h3 className="text-center">{currentRegion}</h3>
        <Button variant={"dark"} onClick={onCheck}>
          Check
        </Button>
      </div>
  );
};
