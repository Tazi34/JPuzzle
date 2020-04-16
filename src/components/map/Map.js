import React, {Component} from "react";

export class Map extends Component {
    render() {
        const {mapRef} = this.props;
        return (
            <div
                style={{
                    height: 0,
                    paddingTop: "calc(360 / 360 * 100%)"
                }}
            >
                <object
                    ref={mapRef}
                    data="/jp.svg"
                    type="image/svg+xml"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        maxWidth: "100%",
                        height: "auto"
                    }}
                    id="map"
                />
            </div>
        );
    }
}
