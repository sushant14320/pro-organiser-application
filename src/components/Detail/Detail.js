import React,{Component} from 'react';
import axios from 'axios';
import '../Detail/Detail.css';
import Modal from '../Modal/Modal';
import firebase from '../../services/firebase';
import 'firebase/firestore';
import { AiFillDelete} from "react-icons/ai";

import Cards from '../Cards/Cards';
import ModalCard from '../Modal/ModalCard';


class Detail extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            ID:this.props.match.params.id,
            CI:'',
            NAME :'',
            MEMBERS:'',
            columndata:[],
            colID:'',
            isempty:false,
            isOpen:false,
            Open:false
         }
         //this.Ondelete = this.Ondelete.bind(this);
         this.ToggleModal = this.ToggleModal.bind(this);
         this.DeleteBoard = this.DeleteBoard.bind(this)

    }

    componentDidMount(){
        //console.log("diiiiii"+this.props.match.params.id)
       
        this.setState({
            CI:this.props.match.params.id
        })
        axios.get(`https://pro-app-7c18b.firebaseio.com/Boards.json`)
        .then(TheData=>{
            
            const vdata = TheData.data;
            const newData = Object.values(vdata);
            let members = [];
            members = newData[this.props.match.params.id].NumberOfMembers;
           let newarray =[]
           
            newarray = members.split(",");
            //console.log(newarray);
        
            this.setState({ 
                NAME:newData[this.props.match.params.id].Name,
                MEMBERS:newarray
            })
            console.log(this.state.NAME);
        })
        axios.get(`https://pro-app-7c18b.firebaseio.com/${this.props.match.params.id}/Columns.json`)
        .then(columnName=>{
           
           
            if(columnName.data === null){
                this.setState({
                    isempty:true
                })
            }
            else
            {
            
            
            let ddd = [];
            let sd  = [];
             ddd = columnName.data;
             sd = Object.values(ddd);              //new ----
           
            // for(let i = 0; i<sd.length ; i++){
            //     let NameC = []
            //      NameC  = sd[i].name;
            //   //  console.log("nn" +NameC)
            //     this.setState({
            //         columndata:NameC
            //     })
            //     console.log("state:" + this.state.ColName)

            // }
            const ccname  = []
            sd.forEach(doc =>{
               const data = doc.name
                ccname.push(data)
            })
           
            this.setState({
                columndata:ccname
            })
        }
            })
        

    }
    DeleteBoard = (index) =>{
    
    
        
     
    //               db.collection("co").doc(index).delete();
        console.log(index);
    //    alert("Column deletd ! please refresh the page");
       //alert("deletd");     
      let data = firebase.database().ref(`Boards/${this.props.match.params.id}s`);
           data.remove();
    
     
}
    ToggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    OpenModal = (i) => {
        this.setState({
            Open: !this.state.Open,
            colID:i
        })
    }

    allowdrop = (ev) =>{
        ev.preventDefault();
    }
    
    drop =(ev) =>{
        let ddd =  ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(ddd));
    }
    render() { 
        let array = []
      array =  this.state.columndata.map((colData,i) => {
        // i = colData.id;
        // this.setState({
        //     colID:i
        // })
       
            return(
                <div className="columns">
                    
                     {colData}
                     <div onDragOver={(event)=>this.allowdrop(event)} onDrop={(event =>this.drop(event))}>
                     <AiFillDelete onClick={() => this.Ondelete(i,colData)}/>
                     <Cards  
                      id={this.state.CI}     
                      colID={i} 
                      ModalBname = {colData}
                      NameOfBoard ={this.state.NAME}
                      />
                     
                     </div>
                     <button className="btnmodal" id="CreateCard" onClick={() =>this.OpenModal(i)}>Add a card</button>
                </div>
                 
            )  
        })
            
           
        
        return ( 
        <div>
            <h1 className="btitle">{this.state.NAME}</h1>

            <div>
                <button className="btndelete" onClick={() => this.DeleteBoard(this.props.match.params.id)}>Delete Board</button>
            </div>
            
                
                <button onClick={this.ToggleModal} className="plus">
                  Add a column
                 </button>
                <br></br><br></br>
                 
                 {
                     this.state.isempty
                     ?
                     null
                 
                 :
                 <section id="wrap">
                    
                    {array}
                   
                 </section>
                
                 }
        
                 
            <Modal show={this.state.isOpen} onClose={this.toggleModal}
                   id={this.state.CI}/>
                <ModalCard display={this.state.Open} onClose={this.OpenModal}
                      id={this.state.CI}     
                      colID={this.state.colID}
                      members ={this.state.MEMBERS} />
                
                
                <br></br>
                <br></br>
               
        </div> 
        );
    }
}
 
export default Detail;