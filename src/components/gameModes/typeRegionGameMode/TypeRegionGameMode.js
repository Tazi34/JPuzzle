import React, {useEffect, useState} from "react";
import {getRandomRegion, loadRegions} from "../../../utilities/regions";
import {getName, removeColor, setColor} from "../../../utilities/SvgUtilities";
import {TypeModeScoreBoard} from "../../scoreBoards/TypeModeScoreBoard";
import {withMap} from "../../withMapWrapper";

const TypeRegionGameMode = ({mapRef}) => {
  const [currentRegion, setCurrentRegion] = useState(getRandomRegion());
  const [score, setScore] = useState(0);

  const resetTargetRegion = () => {
    setCurrentRegion(getRandomRegion());
  };

  const setupRegion = pathElement => {
    const name = getName(pathElement);
    removeColor(pathElement);
    if (name === "") {
      return;
    }
    if (name === currentRegion.name) {
      setColor(pathElement, "green");
    }
  };

  const setupRegions = regions => {
    for (let region of regions) {
      setupRegion(region);
    }
  };

  useEffect(() => {
    const svg = mapRef.current;
    let paths = loadRegions(svg);

    //wait for svg element do fully load
    if (paths.length === 0) {
      svg.addEventListener("load", function () {
        setupRegions(loadRegions(svg));
      });
    } else {
      setupRegions(loadRegions(svg));
    }
  }, [currentRegion]);

  const checkIfCorrectAnswer = answer => {
    return (
        answer.localeCompare(currentRegion.name, undefined, {
          ignorePunctuation: true,
          sensitivity: "base"
        }) === 0
    );
  };

  const handleCorrectAnswer = () => {
    resetTargetRegion();
    setScore(score + 1);
    alert("success");
  };

  function handleWrongAnswer() {
    alert("error");
  }

  const handleAnswerSubmit = answer => {
    if (checkIfCorrectAnswer(answer)) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer();
    }
  };

  return <TypeModeScoreBoard score={score} onSubmit={handleAnswerSubmit}/>;
};

export default withMap(TypeRegionGameMode);
