import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Jobslist from './jobslist';
import Jobsearch from './jobsearch';
const history = createHistory();
 class Job extends Component {
    constructor() {
        super();
        this.serviceUrl = "http://localhost:5000/api/job";
        this.state = {
            jobs: [],
            user:[],
            post:[],
            search:''
        }
    }
    // updateSearch(event){
    //     this.setState({search:event.target.value.substr(0,20)});
    // }
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({ jobs: res.data });
        })
    }
    onChanged=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    addpost=(job_position, company_name, job_description, employment_type, location, qualification, salary, experience, image)=>{
        //alert(job_position, company_name, job_description, employment_type, location, qualification, salary, experience, image);
        let newPost=[...this.state.post];
        let newpost={
            job_position:job_position, 
            company_name:company_name,
            job_description:job_description, 
            employment_type:employment_type,
            location:location, 
            qualification:qualification,
            salary:salary, 
            experience:experience, 
            image:image
        }
        axios.post(this.serviceUrl,newpost).then((res)=>{
            newPost.push(newpost);
            this.setState({post:newPost});
        })
    }
search=()=>{

   
    for( let i=0;i<this.state.jobs.length;i++){
    
    

        if((this.state.jobpost===this.state.jobs[i].job_position)&&(this.state.location===this.state.jobs[i].location)){
            // let position=this.state.jobs[i].job_position;
            //   let  cname=this.state.jobs[i].company_name;
            //   let  jdesc=this.state.jobs[i].job_description;
            //   let  etype=this.state.jobs[i].employment_type;
            //   let loc=this.state.jobs[i].location
            //   let quali=this.state.jobs[i].qualification;
            //   let sal=this.state.jobs[i].salary;
            //   let exp=this.state.jobs[i].experience;
            

            //     alert(position+" "+cname+" "+jdesc+" "+etype+" "+loc+" "+quali+" "+sal+" "+exp);
                 this.props.history.push('/jobsearch/'+this.state.jobs[i]._id)
            }
        
              
            //     {this.props.jobs.map((j, i) => <div class="col-md-4">
            //     if(jobpost==j.job_position && joblocation==j.location){
            //     <div className="thumbnail" width="50" height="50">
            //     <img src={j.image} alt="not found" width="150" height="100"/>{j.job_position}<br />{j.company_name}<br />
            //         {j.location}<br/><br/><button onClick={(_id) => this.showDetails(j._id)}>Show More Details</button>
            //   </div>
              
            //   else
              
            //       alert("No search found")
        }}
          
     
    
    showpost = () => {
        this.props.history.push('/jobpost');
    }
    render() {
       
        return (<div>
            
            <br/><br/>
            <input type="text"name="jobpost"value={this.state.jobpost}onChange={this.onChanged} placeholder="search job position" id="jobpost"/>&nbsp;&nbsp;&nbsp;
        <input type="text"name="location"onChange={this.onChanged}value={this.state.location} placeholder="location" id="joblocation"/>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-info"
      onClick={()=>this.search()}
         >search</button><br/><br/>
        <button className="btn btn-default" onClick={(_id)=>this.showpost()}>Post</button>
        <br/><br/>
        <Jobslist history={history} jobs={this.state.jobs} />
            
             <Jobsearch jobs={this.state.jobs}/> 
            
            
            
        </div>
        );
    }
}
export default withRouter(Job)
