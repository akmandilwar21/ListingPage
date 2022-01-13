import CheckBox from "./CheckBox.jsx";
import React, { Component } from "react";

class LeftPanel extends Component {
  state = {
    category: ["Kurtas", "Tops", "Lips"],
    price: [
      "Rs.0 to Rs. 2000",
      "Rs.2000 to Rs.4000",
      "Rs.4000 to Rs.6000",
      "Rs.6000 to Rs.8000",
      "Rs.8000 to Rs.10000",
      "Rs.10000 to Rs.14000"
    ],
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    checkCategory: "",
    checkPrice: "",
    checkSize: "",
    namesCategory: null,
    namesPrice: null,
    namesSize: null
  };

  makeCbStructure(category, checkCategory) {
    let temp = category.map((n1) => ({
      name: n1,
      selected: false
    }));
    let cnames = checkCategory.split(",");
    for (let i = 0; i < cnames.length; i++) {
      let obj = temp.find((n1) => n1.name === cnames[i]);
      if (obj) obj.selected = true;
    }
    return temp;
  }
  makeCbStructure1(price, checkPrice) {
    let temp = price.map((n1) => ({
      name: n1,
      selected: false
    }));
    let cnames = checkPrice.split(",");
    for (let i = 0; i < cnames.length; i++) {
      let obj = temp.find((n1) => n1.name === cnames[i]);
      if (obj) obj.selected = true;
    }
    return temp;
  }
  makeCbStructure2(size, checkSize) {
    let temp = size.map((n1) => ({
      name: n1,
      selected: false
    }));
    let cnames = checkSize.split(",");
    for (let i = 0; i < cnames.length; i++) {
      let obj = temp.find((n1) => n1.name === cnames[i]);
      if (obj) obj.selected = true;
    }
    return temp;
  }
  addToParams(params, newParamName, newParamValue) {
    if (newParamValue) {
      params = params ? params + "&" : params;
      params = params + newParamName + "-" + newParamValue;
    }
    return params;
  }
  callUrl(params, category, price, size) {
   
    let path = "";
    params = this.addToParams(params, "product_category", category);
    params = this.addToParams(params, "selling_price", price);
    params = this.addToParams(params, "size", size);
    
    this.props.history.push({
      pathname: path + "/"+ params,
      state: params
    });
    console.log(this.props.history);
  }
  handleOptChange = (namesCategory, namesPrice, namesSize) => {
    let { checkCategory, checkPrice, checkSize } = this.state;
    let filtered = namesCategory.filter((n) => n.selected);
    let array = filtered.map((n1) => n1.name);
    checkCategory = array.join(",");
    this.setState({ checkCategory });
    let filtered1 = namesPrice.filter((n) => n.selected);
    let array1 = filtered1.map((n1) => n1.name);
    checkPrice = array1.join(",");
    this.setState({ checkPrice });
    let filtered2 = namesSize.filter((n) => n.selected);
    let array2 = filtered2.map((n1) => n1.name);
    checkSize = array2.join(",");
    this.setState({ checkSize });
    let params = "";
    this.callUrl(params, checkCategory, checkPrice, checkSize);
  };
  render() {
    let {
      category,
      price,
      size,
      checkCategory,
      checkPrice,
      checkSize
    } = this.state;
    let namesCB = this.makeCbStructure(category, checkCategory);
    let namesCB1 = this.makeCbStructure1(price, checkPrice);
    let namesCB2 = this.makeCbStructure2(size, checkSize);
    console.log(this.props);
    return (
      <div className="leftPanel__container">
        <div className="filter__header">
          <h3>Filter</h3>
        </div>
        <div className="filter__Category">
          <CheckBox
            category={namesCB}
            price={namesCB1}
            size={namesCB2}
            onOptChange={this.handleOptChange}
          />
        </div>
      </div>
    );
  }
}
export default LeftPanel;
