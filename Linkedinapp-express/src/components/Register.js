import React,{Component} from 'react';
import { register} from './UserFunctions'

export class Register extends Component{
    constructor(){
        super();
        this.state={
            first_name:'',
            last_name:'',
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
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            password:this.state.password
        }
        register(user).then(res=>{
                this.props.history.push('/login')
            
        })
    }
    render(){
        return(
            <div><form onSubmit={this.onSubmit}>
            <div className="form-group col-sm-4 col-sm-offset-4">
            <label >First Name</label>
            <input type="text"
             className="form-control" required
             name="first_name"
             placeholder="Enter Username"
                 value={this.state.first_name}
            onChange={this.onChange}></input></div>
            <div className="form-group col-sm-4 col-sm-offset-4">
            <label >Last Name</label>
            <input type="text"
            name="last_name" required
            placeholder="Enter LastName"
            onChange={this.onChange}
            value={this.state.last_name}
            className="form-control"></input></div>
             <div className="form-group col-sm-4 col-sm-offset-4">
            <label  >Email</label>
            <input type="email"
 pattern=".+@gmail.com" placeholder="enter email id"
            required
            size="30"
            name="email"
            //placeholder="Enter email"
            onChange={this.onChange}
            value={this.state.email}
            className="form-control"></input></div>
             <div className="form-group col-sm-4 col-sm-offset-4">
            <label >Password</label>
            <input type="password"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
           title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            name="password"required
            placeholder="Enter Password"
            onChange={this.onChange}
            value={this.state.password}
            className="form-control"></input></div>
            <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-success"type="submit">Register</button></div>
            </form></div>
        )
    }
 
}
export default Register;