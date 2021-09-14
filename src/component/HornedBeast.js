import React from "react";

class HornedBeast extends React.Component{
  render(){
    return(
      <>
        HornedBeast {this.props.Title}, {this.props.img}, {this.props.Des}
        
      </>
    )
  }
}
export default HornedBeast;