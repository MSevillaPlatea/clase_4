import React, { Component } from 'react';
import {CardDeck} from 'reactstrap';
import Item from './Item';
import {connect} from 'react-redux';
import axios from 'axios';



class Gallery extends Component {
   
    componentWillMount() {
       /*  fetch('http://localhost:3001/items')
        .then(Response=> Response.json())
        .then(data=> this.setState({items:data})) */
        axios('http://localhost:3001/items').then(response=>{

            this.props.fetchItems(response.data)
        
    })
}

      
       render(){ 
                return(
                            <CardDeck>
                                        <h1>{this.props.appTitle}</h1>

                                        {this.props.items.map((item,i)=><Item key={i} data={item}/>)}
                                       
                            </CardDeck>
);
}
}

//
// ─── SE MAPEAN DATOS ────────────────────────────────────────────────────────────
//

    

let mapStateToProps = (state) => {

    return{
        items: state.items,
        appTitle: state.appTitle
    }
}

//
// ─── SE MAPEAN ACCIONES ─────────────────────────────────────────────────────────
//

    


let mapDispatchToProps = (dispatch) => {

    return {
            fetchItems: (data) =>{
                dispatch({type:'FETCH_ITEMS',payload:data})
            }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Gallery);