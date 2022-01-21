import React from 'react';
import Header from './components/Header'

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>HornedBeasts {this.props.HornedTitle}</h2>
        <img>HornedBeasts {this.props.Hornedimg} </img>
        <p>HornedBeasts {this.props.Horneddes} </p>
        <Header/>
       



        
      </>
    )
  }
}

export default Main;
  
