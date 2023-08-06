import { Component } from "react";
import "./App.css";
import Navbaar from "./Navbaar";
import Bulb from "./bulb";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      display: [
        { id: 1, status: "off" },
        { id: 2, status: "off" },
      ],
    };
  }
  getstatus = () => {
    if (
      this.state.display[0].status === "on" ||
      this.state.display[1].status === "on"
    ) {
      return "on";
    }
    return "off";
  };

  gettoggle = (id) => {
    let newdisplay = [...this.state.display];
    let bulb = newdisplay.find((bulb) => bulb.id === id);
    if (bulb.status === "on") {
      bulb.status = "off";
    } else {
      bulb.status = "on";
    }
    this.setState({ display: newdisplay });
  };

  render() {
    return (
      <div className="App">
        <Navbaar status={this.getstatus()} />
        <Bulb
          status={this.state.display[0].state}
          toggle={() => this.gettoggle(0)}
        />
        <Bulb
          status={this.state.display[1].state}
          toggle={() => this.gettoggle(1)}
        />
      </div>
    );
  }
}
