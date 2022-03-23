import React from "react";
import Card from "react-bootstrap/Card";
import { ArrowRight } from "react-bootstrap-icons";

import "./image.scss"

class Image extends React.Component{
    render(){
        return(
            <Card border="light">
                <Card.Img variant="top" src={this.props.link} alt={this.props.name} loading={"lazy"}/>
                <Card.Body>
                    <Card.Text style={{textAlign:"center"}}>
                        <span style={{fontWeight:"bold"}}>{this.props.name}</span>
                        {this.props.isMachineForSale ?
                        <a className="imageLink" href="/"><br/>More Information {<ArrowRight/>}</a> :
                        ''}
                        {this.props.isRecentPurchase ?
                        <span className="recentPurchase"><br/>{this.props.purchase}</span> :
                        ''}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Image