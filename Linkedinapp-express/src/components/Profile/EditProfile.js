import React, { Component } from 'react';
import axios from 'axios';

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            _id:'',
            first_name:'',
            last_name:'',
            email:''
        }
    }
    componentDidMount(){
        let _id=this.props.match.params._id;
        axios.get("http://localhost:5000/users/profile/"+_id).then((res)=>{
            this.setState({
                _id:res.data._id,
                first_name:res.data.first_name,
            last_name:res.data.last_name,
            email:res.data.email

            })
        })
    }
    // onChanged(event){
    //     this.setState({[event.target.name]:event.target.value})
    // }
    onChanged=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSave=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:5000/users/profile/"+this.state._id,this.state).then((res)=>{
            this.props.history.push('/profile')
        })
    }

    render() {
    
        return (
            <div>
                <form onSubmit={this.onSave}>
                <div className="well"><img name="image" onChange={this.onChanged} value={this.state.image} src="https://image.ibb.co/djx0P7/11.jpg" Style="border-radius:50%;width:200px"></img></div>
                
                <label>FirstName:</label><input name="first_name" onChange={this.onChanged} value={this.state.first_name}/>
                <label>LastName:</label><input name="last_name" onChange={this.onChanged} value={this.state.last_name}/>
                <label>Email Id:</label><input name="email" onChange={this.onChanged} value={this.state.email}/>
                <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default EditProfile;