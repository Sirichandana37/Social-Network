import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
class Navbar extends Component{
            logOut(e){
                e.preventDefault()
                localStorage.removeItem('usertoken')
                this.props.history.push('/')
            }
        
    render(){
        const loginRegLink=(
            <div>
            <ul className="navbar-nav navbar-right ">
            <li className="nav-item">
            <Link to="/login" className="nav-link">LogIn</Link>
            </li>
            <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
            </li>
           
            </ul>
            </div>
        )
        const userLink=(
            <div>
                
                {/* <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input /><button className="btn-primary"><span Style="color:white" className="glyphicon glyphicon-search"></span></button> */}
            <ul className=" navbar-nav navbar-right">
            <li className="nav-item">
            <Link to="/home" className="nav-link glyphicon glyphicon-home"><br/><h4 Style="color:white">Home</h4></Link>
            </li>&nbsp;&nbsp;
             <li className="nav-item">
            <Link to="/mynetworks" className="nav-link glyphicon glyphicon-user"><span className="glyphicon glyphicon-plus"></span><br/><h4 Style="color:white">My Network</h4></Link>
            </li>&nbsp;&nbsp;
            <li className="nav-item">
            <Link to="/profile" className="nav-link glyphicon glyphicon-user"><br/><h4 Style="color:white">Profile</h4></Link>
            </li>&nbsp;&nbsp;
            
            <li className="nav-item">
            <Link to="/job"className="nav-link"><span className="glyphicon glyphicon-briefcase"/><br/><h4 Style="color:white">Jobs</h4></Link></li>

             &nbsp;&nbsp;
            
            <li className="nav-item">
            <Link to="/chat" className="nav-link"><img src="https://images-na.ssl-images-amazon.com/images/I/31bD892t2FL.png"height="25"width="25"/><br/><h4 Style="color:white">Messaging</h4></Link>
            </li>
            
            &nbsp;&nbsp;
            <li className=" nav-item">
            <a href=" " onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
            </li>
            </ul>
            
            </div>
        )
        return(
            <nav class="navbar navbar-expand-lg navbar-inverse">
            {/* <nav className="navbar navbar-expand-lg  navbar-dark bg-dark rounded"> */}
            <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        
        </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link"></Link>
        </li>
        </ul>
        {localStorage.usertoken ? userLink:loginRegLink}
        </div>
            
            </nav>
        )
    }
}
export default withRouter(Navbar);