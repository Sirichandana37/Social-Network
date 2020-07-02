
import React, { Component } from 'react';
import axios from 'axios';

class Jobapply extends Component {
   constructor() {
      super();
      this.serviceUrl = "http://localhost:5000/api/user/";
      this.state = {  
        apply:[{
        username:" ", 
        email:" ",
        mobile:" ",
        gender:" ",
        qualification:" ",
        technicalskills:" ",
        experience:" ",
        company:" ",
        ctc:" " 
       
      }]
        
      }
   }
   onChanged=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
onSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state);
    alert("applied ");
   this.props.history.push('/job/');
    let newApply=[...this.state.apply];
        let newapply={ 
            username:this.state.username,
            email:this.state.email,
            mobile:this.state.mobile,
            gender:this.state.gender,
            qualification:this.state.qualification,
            technicalskills:this.state.technicalskills,
            experience:this.state.experience,
            company:this.state.company,
            ctc:this.state.ctc
        }
        axios.post(this.serviceUrl,newapply).then((res)=>{
            newApply.push(newapply);
            this.setState({apply:newApply});
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
            <label>User Name</label>
            <input type="text" name="username" className="form-control" onChange={this.onChanged} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" className="form-control" onChange={this.onChanged} />
          </div>

           <div className="form-group">
            <label>Mobile Number</label>
            <input type="number" name="mobile" className="form-control" onChange={this.onChanged} />
          </div>

           <div className="form-group">
           <label for="gender" required ><b>gender</b></label><br/>
    <input type="radio" class="gender" name="gender" value="male" onChange={this.onChanged}/>Male
    <input type="radio" class="gender" name="gender" value="female" onChange={this.onChanged}/>Female<br/>
          </div>

           <div className="form-group">
           <label for="qualification"><b>Qualification</b></label><br/>
    <select name="qualification" required onChange={this.onChanged}>
            <option value="">select</option>
            <option value="BE-CSE">B.Tech</option>
            <option value="BE-ECE">BE-ECE/EEE</option>
            <option value="BSc">BSc</option>
            <option value="BCA">BCA</option>
            <option value="">Others</option>
        </select>
          </div>

           <div className="form-group">
            <label>Technical Skills</label>
            <input type="text" name="technicalskills" className="form-control" onChange={this.onChanged} />
          </div>

           <div className="form-group">
            <label>Experience</label>
            <input type="number" name="experience" className="form-control" onChange={this.onChanged} />
          </div>
          <p>If not a fresher, kindly provide the following details</p>
           <div className="form-group">
            <label>Previous Company Name</label>
            <input type="text" name="company" className="form-control" onChange={this.onChanged} />
          </div>

           <div className="form-group">
            <label>CTC</label>
            <input type="text" name="ctc" className="form-control" onChange={this.onChanged} />
          </div>

          <button className="btn btn-primary" type="submit">Save</button>
        </form>
            </div>
            
         </div>
      );
   }
}
export default Jobapply