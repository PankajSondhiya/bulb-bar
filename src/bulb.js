import { Component } from "react";
import "./bulb.css";

export default class Bulb extends Component {
  render() {
    return (
      <div>
        <div className={`bulb-${this.props.status}`}></div>
        <button onClick={this.props.toggle}>toggle</button>
      </div>
    );
  }
}
