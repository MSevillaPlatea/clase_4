import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';


class Item extends Component {
    render(){
        return(
<Card>
<CardImg top width="100%" src={this.props.data.cover.img} alt={this.props.data.cover.alt} />
<CardBody>
  <CardTitle>{this.props.data.title}</CardTitle>
  <CardSubtitle>perro</CardSubtitle>
  <CardText>{this.props.data.texto}</CardText>
  <Button>{this.props.addtoplaylist}add to playlist</Button>
</CardBody>
</Card>

);

}

}


let mapDispatchToProps = (dispatch,props) => {
  return {
    addtoplaylist: () =>{
      dispatch({type:'ADD_TO_PLAYLIST',payload:this.props.data})
  }
  }
}
export default connect(null, mapDispatchToProps)(Item);