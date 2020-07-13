import React,{Component} from 'react';
import{
    NavLink}
from 'react-router-dom';
import '../Navigation/Navigation.css';



class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Navbar">
                <h2 className="Navheader">Pro-Organizer</h2>
                <NavLink className="Navlink" to="/createboard">Create a Board</NavLink>
                
                 <NavLink className="Navlink" to="/">
                      Home
                 </NavLink>
            
             </div>
         );
    }
}
 
export default Navigation;