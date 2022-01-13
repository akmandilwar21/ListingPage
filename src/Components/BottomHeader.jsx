import React from "react";
import axios from "axios";
import { render } from "react-dom";
import LeftPanel from "./LeftPanel.jsx";
import RightPanel from "./RightPanel.jsx";


class BottomHeader extends React.Component {
  state = {
    products: []
  };
  async componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let x = await axios.get(
        "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="+ this.props.location.state
      );
      this.setState({ products: x.data.result.products });
     
    }
  }
  
  async componentDidMount() {
    if(this.props.location.state){
         
    let x = await axios.get(
      "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="+ this.props.location.state 
    );
    this.setState({ products: x.data.result.products });
    }
    else {

    let x = await axios.get(
      "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="
    );
    this.setState({ products: x.data.result.products });
    }
  } 
  fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
      let x = await axios.get(
        "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="
      );
      let newProduct=[...this.state.products,...x.data.result.products];
      await this.setState({ products: newProduct });
    
  };
  render() {
    return (
      <div className="content">
        <div className="leftPanel">
          <LeftPanel {...this.props} />
        </div>
        <div className="RightPanel">
          <RightPanel products={this.state.products} fetchMoreData={this.fetchMoreData}/>
        </div>
  
      </div>
    );
  }
}
export default BottomHeader;
