import React, { Component } from 'react';
import axios from 'axios';

class JobDetails extends Component {
   constructor() {
      super();
      this.serviceUrl = "http://localhost:5000/api/job/";
      this.state = {
         jobs: [],
         user:[]
      }
   }
  
   componentDidMount() {
      let _id = this.props.match.params._id;
      axios.get(this.serviceUrl + _id).then((res) => {
         this.setState({
            jobs: res.data
         })
      })
      //      for( let i=0;i<this.state.jobs.length;i++){
      //       let id=this.state.jobs[i]._id
      //       if(id==_id){
      //           let position=this.state.jobs[i].job_position;
      //         let  cname=this.state.jobs[i].company_name;
      //         let  jdesc=this.state.jobs[i].job_description;
      //         let  etype=this.state.jobs[i].employment_type;
      //         let loc=this.state.jobs[i].location
      //         let quali=this.state.jobs[i].qualification;
      //         let sal=this.state.jobs[i].salary;
      //         let exp=this.state.jobs[i].experience;

      //           alert(position+" "+cname+" "+jdesc+" "+etype+" "+loc+" "+quali+" "+sal+" "+exp);
      //       }
      //   }
   }
   
   apply = () => {
      this.props.history.push('/jobapply/');
  }
   render() {
      return (
         <div>
            <div className="well">
            <img src={this.state.jobs.image} alt="" width="100" height="100"/>
            <h3>{this.state.jobs.job_position}</h3>
            <h3>{this.state.jobs.company_name}</h3>
            <h3>{this.state.jobs.location}</h3>
            <button className="btn btn-success" onClick={(_id)=>this.apply()}>Apply</button>
            </div>
            <div className="well">
            <h3>Job Description</h3><p>About the role: <br/><br/>{this.state.jobs.job_description}</p>
            <h3>Employment type</h3> <p>{this.state.jobs.employment_type}</p>
            <h3>Qualification </h3><p>{this.state.jobs.qualification}</p>
            <h3>Salary </h3><p>{this.state.jobs.salary}</p>
            <h3>Experience</h3><p>{this.state.jobs.experience}</p>
            </div>
            
         </div>
      );
   }
}
export default JobDetails