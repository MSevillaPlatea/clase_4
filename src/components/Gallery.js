import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

import Item from './Item';


class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items:[]
         }
    }
    componentWillMount() {
        fetch('http://localhost:3001/items')
        .then(Response=> Response.json())
        .then(data=> this.setState({items:data}))
        }
       render(){ 
                return(
                            <CardDeck>
                                        {this.state.items.map((item,i)=><Item key={i} data={item}/>)}
                            </CardDeck>
);
}
}

export default Gallery