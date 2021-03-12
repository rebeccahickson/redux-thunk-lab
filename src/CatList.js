import React, { Component } from "react";

export default class CatList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.catPics.map((cat) => (
            <li>
              <img src={cat.url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
