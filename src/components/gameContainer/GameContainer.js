import React, {Component} from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import withRouter from "react-router-dom/es/withRouter";

class GameContainer extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    return (
        <div style={{minHeight: "100vh"}} className={"d-flex flex-column"}>
          <ButtonGroup>
            <Button
                variant="dark"
                onClick={() => this.props.history.push("/typetowin")}
            >
              Type
            </Button>
            <Button variant="dark" onClick={() => this.props.history.push("/")}>
              Random
            </Button>
            <Button
                variant="dark"
                onClick={() => this.props.history.push("/findall")}
            >
              Find all
            </Button>
          </ButtonGroup>
          {this.props.children}
        </div>
    );
  }
}

export default withRouter(GameContainer);
