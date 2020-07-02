import React, { Component } from 'react';
import axios from 'axios';
import Pagination from './pagination';


class Jobslist extends Component {
    constructor() {
        super(); 
        this.serviceUrl = "http://localhost:5000/api/job";
        this.state = {
            jobs: [],activePage: 2

        }
        this.onChangePage = this.onChangePage.bind(this);
    }
 
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({ jobs: res.data });
        })
    }

    showDetails = (id) => {
    
        this.props.history.push('/jobdetails/'+id);
    //     for( let i=0;i<this.state.jobs.length;i++){
    //         let id=this.state.jobs[i]._id
    //         if(id===_id){
    //             let position=this.state.jobs[i].job_position;
    //           let  cname=this.state.jobs[i].company_name;
    //           let  jdesc=this.state.jobs[i].job_description;
    //           let  etype=this.state.jobs[i].employment_type;
    //           let loc=this.state.jobs[i].location
    //           let quali=this.state.jobs[i].qualification;
    //           let sal=this.state.jobs[i].salary;
    //           let exp=this.state.jobs[i].experience;

    //             alert(position+" "+cname+" "+jdesc+" "+etype+" "+loc+" "+quali+" "+sal+" "+exp);
    //         }
    // }
    }

    // <div>{this.jobs.map((i)=><div key={i._id}><div>{i.job_position}<br/>{i.company_name}<br/>
    //     {i.job_description}<br/>{i.employment_type}<br/>{i.location}<br/>{i.qualification}
    //     <br/>{i.salary}<br/>{i.experience}</div> </div>)}</div> 
    //   <table>
    //        <tbody>{this.jobs.map((i)=><tr key={i._id}><td>{i.job_position}</td></tr>)}</tbody>
    //   </table> 

    // handlePageChange(pageNumber) {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    //   }

    render() {
        return (
            <div>
                <div className="row"className="Pagination">
                    {this.props.jobs.map((j, i) => <div className="col-md-4">
                        <div className="thumbnail" width="50" height="50">
                            <img src={j.image} alt="not found" width="150" height="100"/>{j.job_position}<br />{j.company_name}<br />
                            {j.location}<br/><br/><button onClick={() => this.showDetails(j._id)}>Show More Details</button></div></div>)}
                            {/* <Pagination activePage={this.state.activePage} itemsCountPerPage={2} totalItemsCount={450} pageRangeDisplayed={10}
                    onClick={this.handlePageChange} /> */}
                    {/* <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} /> */}
                    
                </div>
                
                     {/* <Pagination
      hideFirstLastPages
      pageRangeDisplayed={10}
      activePage={this.state.activePage}
      itemsCountPerPage={PER_PAGE}
      totalItemsCount={TOTAL_COUNT}
      onChange={this.handlePageChange}
    /> */}
            </div>
        );
    }
}
export default Jobslist;