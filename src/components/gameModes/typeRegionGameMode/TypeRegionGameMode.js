import React, {useEffect, useRef, useState} from "react";
import {getRandomRegion, loadRegions} from "../../../utilities/regions";
import {getName, removeColor, setColor} from "../../../utilities/SvgUtilities";

import {GameLayout} from "../../layout/GameLayout";
import {Map} from "../../map/Map";
import {TypeModeScoreBoard} from "../../scoreBoards/TypeModeScoreBoard";

export const TypeRegionGameMode = props => {
  const [currentRegion, setCurrentRegion] = useState(getRandomRegion());
  const [score, setScore] = useState(0);
  const mapRef = useRef(null);

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

  return (
      <GameLayout>
        <TypeModeScoreBoard score={score} onSubmit={handleAnswerSubmit}/>
        <Map mapRef={mapRef}/>
      </GameLayout>
  );
};
