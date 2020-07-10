import React from 'react';
import {Component} from 'react';

import PropTypes from 'prop-types';
//import AddStock from '../ADD_STOCKS/AddStock';
import Backdrop from "../Backdrop/Backdrop";
import firebase from '../../services/firebase';
import 'firebase/firestore';
import "../Modal/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
//import Detail from "../Detail/Detail";
//import axios from 'axios';




  
let data;

//var db = firebase.firestore();
class Modal extends Component {
    
constructor(props){
    super(props)
    this.state = {
       name :''
        
    }
    this.postData = this.postData.bind(this);
   
}

// valid(){
//    let NumEr = document.getElementById('noShares').value
//    let PriceERR  = document.getElementById('buyPrice').value
//    if(NumEr === "" && PriceERR === ""){
//        this.setState({
//            shareErr:"enter share",
//            PriceErr:"enter price",
//            iagain : false
//        })
//    }
   
// }


 
 postData = (name) =>{ 
  let newData =  data.push();

  newData.set({
    //id: newData.id,
    name:this.state.name
})
    // var newdoc = db.collection('co').doc(`'${this.props.id}'`)
    // newdoc.set({
    //   id: newdoc.id,
    //   name:this.state.name
  

    
   

   
       
        // db.collection("co").add({
        
        //   name: this.state.name
          
          
        // });
        
        
       
 }


//    handleChangeN = (event)=>{
//        event.preventDefault();
//        this.setState({
//            number_of_shares:event.target.value
//        })
//    }

   handleChangeP = (event)=>{
    //event.preventDefault();
    this.setState({
        name:event.target.value
    })
}

// handleChangeD = (event)=>{
//     event.preventDefault();
//     this.setState({
//         Buy_date:event.target.value
//     })
// }

// handleChange = (props) =>{
// this.setState({
//     symbol:this.props.compname
// })
// }





    render(){
         if(!this.props.show) {
             return null;
           }

           data = firebase.database().ref(`${this.props.id}/Columns`);


          // data = firebase.database().ref('/6');
          return (
           
        <div>
            {
              console.log("idddddd" + this.props.id)
            }
            <div >
            
                {this.props.children} 
                <Backdrop/>
            <div className="mform" style={{height: '300px', textAlign: 'center', position: 'fixed', backgroundColor: '#fff', zIndex: 500, left: '15%', top: '10%', boxSizing: 'border-box', width: '70%'}}>
                <h1 className="adds">Add Column</h1><br></br><br></br>
                <form className="sform" >
                <table>   
         
                <tr>
                    <th>
                 Enter a column name:{this.props.name}<br>
                     
              </br>
              </th>

              <td>
                 <input type="text" size="57" id="column_name" value={this.state.name} onChange={this.handleChangeP}/>
                 </td>
                 </tr>
           
           
                <button className="btnclose" onClick={this.props.onClose}>
                <AiOutlineClose />
                </button>

                <button className="btnOpen" id="CreateColumn" onClick={(e) => this.postData()}>
                Add Column
                </button>


                </table>
                </form>


                </div>
                
            </div>
            
        </div>
        )
    }
}

Modal.propTypes = {
    //onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  }
export default Modal;