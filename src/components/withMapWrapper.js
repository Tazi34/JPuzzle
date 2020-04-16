import React, {Component, createRef} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Map} from "./map/Map";

export const withMap = GameComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.mapRef = createRef();
        }

        render() {
            return (
                <Row className={"mt-3"}>
                    <Col
                        xs={{span: 12, order: 2}}
                        md={{span: 3, order: 1}}
                        className={"border mx-1 my-1"}
                        style={{flex: 1, minWidth: 0}}
                    >
                        <GameComponent mapRef={this.mapRef}/>
                    </Col>
                    <Col
                        xs={{span: 12, order: 1}}
                        md={9}
                        className={"border mx-1 my-1 bg-light"}
                    >
                        <Map mapRef={this.mapRef}/>
                    </Col>
                </Row>
            );
        }
    };
};
