import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {regions} from "./regions";


function App() {
    const [currentRegion, setCurrentRegion] = useState(regions[Math.floor(Math.random() * regions.length)]);
    const [remainingRegions, setRemainingRegions] = useState(regions);
    const [points, setPoints] = useState(0);

    const onClick = (event) => {
        const path = event.target;
        const name = path.getAttribute("name");

        if (name === currentRegion.name) {

            path.setAttribute("fill", "green")
            const remaining = remainingRegions.filter(region => region.name !== name);
            setPoints(points+1)
            setRemainingRegions(remaining);
            setCurrentRegion(remaining[Math.floor(Math.random() * remaining.length)])
        } else {
            if(path.getAttribute("fill") !== "green"){
                path.setAttribute("fill", "red")
            }
        }

    }

    const mapRef = useRef("map");
    const setupPaths = (svgElement) => {
        const svgDoc = svgElement.contentDocument;
        let paths = svgDoc.getElementsByTagName("path");
        for (let item of paths) {
            const name = item.getAttribute("name")
            const color = item.getAttribute("fill")
            if(color ==="red"){
                item.removeAttribute("fill");
            }
            if (name === "") {
                continue;
            }
            item.onclick = onClick;
        }
    }
    useEffect(() => {
        const svg = mapRef.current;
        let paths = svg.contentDocument.getElementsByTagName("path");

        if (paths.length === 0) {
            svg.addEventListener("load", function () {
               setupPaths(svg);
            })
        }else{
            setupPaths(svg)
        }

    }, [currentRegion]);
    return (
        <div className="App">
            <h1>Find: {currentRegion.name}</h1>
            <h2>Points: {points}</h2>
            <h3>Remaining: {remainingRegions.length}</h3>
            <div style={{width:"50%",margin:"auto"}}>
                <object ref={mapRef} data="/jp.svg" type="image/svg+xml"
                        id="map"
                ></object>
            </div>

        </div>
    );
}

export default App;
