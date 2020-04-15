import React from "react";

export const Map = ({mapRef}) => {
    return (
        <object
            ref={mapRef}
            data="/jp.svg"
            type="image/svg+xml"
            style={{
                position: "relative",
                minWidth: 600,
                maxWidth: 1000,
                maxHeight: 800
            }}
            id="map"
        ></object>
    );
};