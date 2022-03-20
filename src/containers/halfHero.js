import React from "react";
import { Parallax } from 'react-parallax';
import './halfHero.scss'

class HalfHero extends React.Component{
    
    render(){
        return(
            <Parallax blur={1.5} style={{ height: '300px', background:"black" }} bgImage={this.props.image}>
                <div style={{height: 300}}>
                    <h1 className="insideStyles">{this.props.title}</h1>
                </div>
            </Parallax>
        );
    }  
}

export default HalfHero