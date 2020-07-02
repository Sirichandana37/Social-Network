import React,{Component} from 'react';
import {login} from './UserFunctions'

export class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const user={
            email:this.state.email,
            password:this.state.password
        }
        login(user).then(res=>{
            if(res){
                this.props.history.push('/home')
            }
        })
    }
    render(){
        return(
            <div><form onSubmit={this.onSubmit}>
            <div className="form-group col-sm-4 col-sm-offset-4">
            <label >Email Id</label>
            <input type="email"
            name="email" required pattern=".+@gmail.com" placeholder="enter email id"
            
            onChange={this.onChange}
            value={this.state.email} required
            className="form-control"></input></div>
            <div className="form-group col-sm-4 col-sm-offset-4">
            <label >Password</label>
            <input type="password"
            name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            placeholder="Enter password" required
            onChange={this.onChange}
            value={this.state.password}className="form-control"></input></div>
            <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-success"type="submit">Sign In</button></div>
            </form></div>
        )
    }
 
}
export default Login;