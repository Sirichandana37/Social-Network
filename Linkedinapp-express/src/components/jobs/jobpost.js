import React, { Component } from 'react';
import axios from 'axios';

class Jobpost extends Component {
   constructor() {
      super();
      this.serviceUrl = "http://localhost:5000/api/job/";
      this.state = { post:[{
        job_position:" ", 
        company_name:" ",
        job_description:" ",
        employment_type:" ", 
        location:" ", 
        qualification:" ",
        salary:" ",
        experience:" ", 
        image:"  "
      }]
        
      }
   }
   onChanged=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
onSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state);
    alert("posted");
    this.props.history.push('/job/');
    let newPost=[...this.state.post];
        let newpost={
            job_position:this.state.job_position, 
            company_name:this.state.company_name,
            job_description:this.state.job_description, 
            employment_type:this.state.employment_type,
            location:this.state.location, 
            qualification:this.state.qualification,
            salary:this.state.salary, 
            experience:this.state.experience,
            image:this.state.image
        }
        axios.post(this.serviceUrl,newpost).then((res)=>{
            newPost.push(newpost);
            this.setState({post:newPost});
        })
}
   componentDidMount() {
      let _id = this.props.match.params._id;
      axios.get(this.serviceUrl + _id).then((res) => {
         this.setState({
            jobs: res.data
         })
      })
    }
   render() {
       
      return (
         <div>
      
            <div className="well">
            <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Job Position</label>
            <input type="text" name="job_position" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" name="company_name" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Job Description</label>
            <input type="text" name="job_description" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Employment Type</label>
            <input type="text" name="employment_type" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Qualification</label>
            <input type="text" name="qualification" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input type="text" name="salary" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <input type="text" name="experience" className="form-control" onChange={this.onChanged} />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="text" name="image" className="form-control" onChange={this.onChanged} />
          </div>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
            </div>
            
         </div>
      );
   }
}
export default Jobpost