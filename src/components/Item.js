import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';



class Item extends Component {
    render(){
        return(
<Card>
<CardImg top width="100%" src={this.props.data.cover.img} alt={this.props.data.cover.alt} />
<CardBody>
  <CardTitle>{this.props.data.title}</CardTitle>
  <CardSubtitle>perro</CardSubtitle>
  <CardText>{this.props.data.texto}</CardText>
  <Button>Button</Button>
</CardBody>
</Card>

);

}

}
export default Item;