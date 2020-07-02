import React, { Component } from 'react'
import axios from 'axios'



class Jobsearch extends Component {

    constructor(props) {
        super(props);
        this.serviceUrl = "http://localhost:5000/api/job/";
        this.state = {
            jobs: []
        }
    }
    // ComponentDidMount() {
    //     let _id=this.props.match.params._id;
    //     axios.get("http://localhost:3003/api/job/"+_id).then((res) => {

    //         this.setState({ jobs: res.data });
    //     })
    // }

    // componentDidMount() {
    //     let id = this.props.match.params._id;
    //     axios.get("http://localhost:5000/api/job/"+id).then((res) => {
    //         console.log(res.data);
    //         this.setState({
    //             jobs: res.data
    //         });
    //     })
    // }
    ComponentDidMount(){
        let id=this.props.match.params._id;
        axios.get("http://localhost:5000/api/job/"+id).then((res)=>{
            console.log(res.data);
            this.setState({jobs:res.data})
        })
    }
    showDetails = (_id) => {
        this.props.history.push('/jobdetails/'+ _id);}

    render() {

        return (
            <div className="row">

                <div className="col-md-4">
                    <div className="thumbnail" width="50" height="50">
                        <img src={this.state.jobs.image} alt="not found" width="150" height="100" />{this.state.jobs.job_position}<br/>
                        {this.state.jobs.company_name}<br/>{this.state.jobs.location}<br /><br />
                        <button onClick={() => this.showDetails(this.state.jobs._id)}>Show More Details</button>
                        </div></div>
            </div>)


    }
}

export default Jobsearch
