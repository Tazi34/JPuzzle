import React, {useEffect, useState} from "react";
import {getRandomRegion, getRegion, loadRegions, regions, setupRegions} from "../../../utilities/regions";
import {getName, setElementColorFadeout} from "../../../utilities/SvgUtilities";
import {FindAllModeScoreBoard} from "../../scoreBoards/FindAllModeScoreBoard";
import {withMap} from "../../withMapWrapper";

const checkAnswerColor = "blue";
const correctAnswerColor = "green";
const wrongAnswerColor = "red";

const FindAllGameMode = ({mapRef}) => {
  const [currentRegion, setCurrentRegion] = useState(getRandomRegion());
  const [remainingRegions, setRemainingRegions] = useState(regions);

  useEffect(() => {
    const svg = mapRef.current;
    let paths = loadRegions(svg);

    //wait for svg element to fully load
    if (paths.length === 0) {
      svg.addEventListener("load", function () {
        setupRegions(loadRegions(svg), setupRegion);
      });
    } else {
      setupRegions(loadRegions(svg), setupRegion);
    }
  }, [currentRegion]);

  const resetGame = () => {
    setRemainingRegions(regions);
    resetTargetRegion();
  };

  const resetTargetRegion = () => {
    setCurrentRegion(
        remainingRegions[Math.floor(Math.random() * remainingRegions.length)]
    );
  };

  const setupRegion = pathElement => {
    const name = getName(pathElement);

    if (name === "") {
      return;
    }
    pathElement.onclick = onClick;
  };

  const handleNextElement = () => {
    if (remainingRegions.length <= 1) {
      resetGame();
    } else {
      setRemainingRegions(
          remainingRegions.filter(region => region.name !== currentRegion.name)
      );
      resetTargetRegion();
    }
  };

  const handleCorrectAnswer = regionElement => {
    setElementColorFadeout(regionElement, correctAnswerColor, 2000);
    handleNextElement();
  };

  const handleWrongAnswer = regionElement => {
    setElementColorFadeout(regionElement, wrongAnswerColor, 1500);
  };

  const handleCheck = () => {
    const currentRegionElement = getRegion(currentRegion.id);
    setElementColorFadeout(currentRegionElement, checkAnswerColor, 1500);
    handleNextElement();
  };

  const onClick = event => {
    const region = event.target;
    const name = getName(region);

    name === currentRegion.name
        ? handleCorrectAnswer(region)
        : handleWrongAnswer(region);
  };

  return (
      <FindAllModeScoreBoard
          remaining={remainingRegions.length}
          currentRegion={currentRegion.name}
          onCheck={handleCheck}
      />
  );
};
export default withMap(FindAllGameMode);
