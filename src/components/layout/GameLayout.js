import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const GameLayout = ({children, mapRef}) => {
    return (
        <div style={{flex: 1}} className={"mt-3 "}>
            <Row>
                <Col xs={9} md={{order: "2"}}>
                    <div className={"h-100 border mr-3 mh-auto bg-light"}>
                        <div
                            style={{
                                minHeight: "800px",
                                width: "80%",
                                margin: "auto",
                                height: "100%"
                            }}
                        >
                            {children[1]}
                        </div>
                    </div>
                </Col>
                <Col xs={3} md={{order: "1", span: 3}} className={"border bg-"}>
                    {children[0]}
                </Col>
            </Row>
        </div>
    );
};
