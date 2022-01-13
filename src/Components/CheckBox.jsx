import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
class CheckBox extends Component {
  state = {
    x: 0,
    x1: 0,
    x2: 0
  };
  handleChange = (e) => {
    const { currentTarget: input } = e;
    const { category, price, size } = this.props;
    if (input.type === "checkbox") {
      let cb = category.find((n1) => n1.name == input.name);
      if (cb) cb.selected = input.checked;
      let cb1 = price.find((n1) => n1.name == input.name);
      if (cb1) cb1.selected = input.checked;
      let cb2 = size.find((n1) => n1.name == input.name);
      if (cb2) cb2.selected = input.checked;
    }
    this.props.onOptChange(category, price, size);
  };
  handleClick = (temp) => {
    let { x, x1, x2 } = this.state;
    if (temp === 0) {
      if (x === 1) this.setState({ x: 0 });
      if (x === 0) this.setState({ x: 1 });
    }
    if (temp === 1) {
      if (x1 === 1) this.setState({ x1: 0 });
      if (x1 === 0) this.setState({ x1: 1 });
    }
    if (temp === 2) {
      if (x2 === 1) this.setState({ x2: 0 });
      if (x2 === 0) this.setState({ x2: 1 });
    }
  };
  render() {
    const { category, price, size } = this.props;
    let { x, x1, x2 } = this.state;
    console.log(x, x1, x2);
    return (
      <div>
        <form>
          <div style={{ background: "white", textAlign: "left" }}>
            {x === 0 ? (
              <div className="filter__category">
                <div>Category</div>
                <div>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    onClick={() => this.handleClick(0)}
                  />
                </div>
              </div>
            ) : (
              <div className="filter__category">
                <div>Category</div>
                <div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    onClick={() => this.handleClick(0)}
                  />
                </div>
              </div>
            )}

            {x === 1
              ? category.map((item) => (
                  <div style={{padding:"5px 0"}}>
                    <div key={item.name}>
                      <input
                        value={item.selected}
                        onChange={this.handleChange}
                        id={item.name}
                        style={{ marginLeft: "12px" }}
                        type="checkbox"
                        name={item.name}
                        checked={item.selected}
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor={item.name}
                        style={{ marginLeft: "10px" }}
                      >
                        {item.name}
                      </label>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div
            style={{
              background: "white",
              marginTop: "20px",
              textAlign: "left"
            }}
          >
            {x1 === 0 ? (
              <div className="filter__category">
                Price
                <FontAwesomeIcon
                  icon={faAngleUp}
                  onClick={() => this.handleClick(1)}
                />
              </div>
            ) : (
              <div className="filter__category">
                Price
                <FontAwesomeIcon
                  icon={faAngleDown}
                  onClick={() => this.handleClick(1)}
                />
              </div>
            )}

            {x1 === 1
              ? price.map((item) => (
                  <div key={item.name} style={{padding:"5px 0"}}>
                    <input
                      value={item.selected}
                      onChange={this.handleChange}
                      id={item.name}
                      style={{ marginLeft: "17px" }}
                      type="checkbox"
                      name={item.name}
                      checked={item.selected}
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label"
                      htmlFor={item.name}
                      style={{ marginLeft: "10px" }}
                    >
                      {item.name}
                    </label>
                  </div>
                ))
              : ""}
          </div>
          <div
            style={{
              background: "white",
              marginTop: "20px",
              textAlign: "left"
            }}
          >
            {x2 === 0 ? (
              <div className="filter__category">
                <div>Size</div>
                <div>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    onClick={() => this.handleClick(2)}
                  />
                </div>
              </div>
            ) : (
              <div className="filter__category">
                <div>Size</div>
                <div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    onClick={() => this.handleClick(2)}
                  />
                </div>
              </div>
            )}

            {x2 === 1
              ? size.map((item) => (
                  <div key={item.name} style={{padding:"5px 0"}}>
                    <input
                      value={item.selected}
                      onChange={this.handleChange}
                      id={item.name}
                      style={{ marginLeft: "17px" }}
                      type="checkbox"
                      name={item.name}
                      checked={item.selected}
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label"
                      htmlFor={item.name}
                      style={{ marginLeft: "10px" }}
                    >
                      {item.name}
                    </label>
                  </div>
                ))
              : ""}
          </div>
        </form>
      </div>
    );
  }
}

export default CheckBox;
