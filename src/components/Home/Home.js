import React,{Component} from 'react';
import axios from 'axios';
import '../Home/Home.css';
import{
    NavLink}
from 'react-router-dom';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            empty:false,
            result:[],
            nameOfBoard:[],
            isloading:true
         }
    }

    
//ssss
        componentDidMount(){
            this.setState({
                isloading:false
            })
            axios.get(`https://pro-app-7c18b.firebaseio.com/Boards.json`)
            .then(db =>{

                if(db.data === null){
                    this.setState({
                        empty:true
                    })
                }
                else{
             console.log("data::" +db.data)
             const res = db.data;
             
            // {
    
             
            // console.log(res);
             let board= Object.values(res);
             console.log(board)
             for(let i = 0;i<board.length;i++){
                 const BName = board[i].BoardName;
                 console.log("bname:"+BName);
                    this.setState({
                        nameOfBoard:board,
                        //empty:false
                                })
                    }
                }
                            })
        
        //}
      
                        
    }

       
    
   
    render() { 
        
      //  let message = ''
        let Array_Board = this.state.nameOfBoard.map((boardV,index)=>{

            const {BoardName}  = boardV
                return(
                <li><NavLink to={`/${index}`}><button key={index} className="BtnBoardName">{BoardName}</button></NavLink></li>
                )
        })
        return ( 

            
            <div>


                <h1>Boards</h1>
 
                {
                    (this.state.isloading)
                    ?
                    <h1>Loading...</h1>
                    :

                (this.state.empty)
                ?
                <h1>You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.</h1>
                :
                <ul className="ulGrid">{Array_Board}</ul>
            }
                
            </div>
         );
    }
}
 
export default Home;