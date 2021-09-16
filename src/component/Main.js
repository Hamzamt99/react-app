import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./assets/data.json";

class Main extends React.Component {
    render() {
        let list = data.map(item => {
            return(
                <HornedBeast title={item.title} image_url={item.image_url} description={item.description} />
            )
        })
         return list;
     } 
}

export default Main;