import React, {useEffect, useState} from "react";
import {getRandomRegion, getRegion, loadRegions, setupRegions} from "../../../utilities/regions";
import {getName, removeColor, setColor, setElementColorFadeout} from "../../../utilities/SvgUtilities";
import {RandomModeScoreBoard} from "../../scoreBoards/RandomModeScoreBoard";
import {withMap} from "../../withMapWrapper";

const checkAnswerColor = "blue";
const correctAnswerColor = "green";
const wrongAnswerColor = "red";

const RandomRegionGameMode = ({mapRef}) => {
  const [currentRegion, setCurrentRegion] = useState(getRandomRegion());
  const [score, setScore] = useState(0);

  const resetTargetRegion = () => {
    setCurrentRegion(getRandomRegion());
  };

  const setupRegion = pathElement => {
    const name = getName(pathElement);

    if (name === "") {
      return;
    }
    pathElement.onclick = onClick;
  };

  useEffect(() => {
    const svg = mapRef.current;
    let paths = loadRegions(svg);

    //wait for svg element do fully load
    if (paths.length === 0) {
      svg.addEventListener("load", function () {
        setupRegions(loadRegions(svg), setupRegion);
      });
    } else {
      setupRegions(loadRegions(svg), setupRegion);
    }
  }, [currentRegion]);

  const onClick = event => {
    const region = event.target;
    const name = getName(region);

    if (checkIfCorrectAnswer(name)) {
      handleCorrectAnswer(region);
    } else {
      handleWrongAnswer(region);
    }
  };

  const checkIfCorrectAnswer = answer => {
    return answer == currentRegion.name;
  };

  const handleCorrectAnswer = region => {
    setElementColorFadeout(region, correctAnswerColor, 2000);
    setScore(score + 1);
    resetTargetRegion();
  };

  const handleWrongAnswer = region => {
    setElementColorFadeout(region, wrongAnswerColor, 1500);
  };

  const handleCheck = () => {
    const currentRegionElement = getRegion(currentRegion.id);
    setColor(currentRegionElement, checkAnswerColor);
    setTimeout(() => removeColor(currentRegionElement), 1500);
    resetTargetRegion();
    setScore(score - 1);
  };

  return (
      <RandomModeScoreBoard
          score={score}
          currentRegion={currentRegion.name}
          onCheck={handleCheck}
      />
  );
};

export default withMap(RandomRegionGameMode);
