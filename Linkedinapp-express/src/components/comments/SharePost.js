import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";


export class SharePost extends Component {
    constructor() {
        super();
        this.state = {
            posts: [
                {
                    _id:'',
                    id:'',
                    image: '',
                    description: '',
                    likes: '',
                }
            ],
            profiles:[
                {
                    _id:'',
                    id:'',
                    image: '',
                    description: '',
                    likes: '',
                }
            ]

        }
    }
    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get("http://localhost:5000/api/newsfeed/"+_id).then((res) => {
            console.log(res.data);
            this.setState({
                posts: [{
                    _id: res.data._id,
                    id: res.data.id,
                    image: res.data.image,
                    description: res.data.description,
                    likes: res.data.likes
                }]
            });

        })
    }
    cancel = () => {
        this.props.history.push('/home');
    }
    onSendClick = (id,img,desc,likes) => {
        //e.preventDefault();
        // console.log(this.state);
        
        // axios.get("http://localhost:5000/api/profile/" + this.state._id,this.state).then((res) => {
           
        //     alert('posted succesfully');
        //     this.props.history.push('/profile/');
        // })
        let newProfiles=[...this.state.profiles];
        let newProfile={
            //id:newFriends.length+1,
            id:id,
            image:img,
            description:desc,
            likes:likes
        }
        axios.post("http://localhost:5000/api/profile/",newProfile).then((res)=>{
            newProfiles.push(newProfile);
            this.setState({profiles:newProfiles})

           
        })
     
    }
    render() {
     
        const { id, image, description, likes } = this.state;
        return (
            <div class="row">
                <div class="col-sm-6 col-md-4 col-md-offset-4">
                    <div class="thumbnail">
                        <div>{this.state.posts.map((i) =><div key={i._id}><div> <img src={i.image} height="200" width="200"></img> </div>
                            <div>{i.description}</div>
                            <div>{i.likes}</div>
                            <button className="btn btn-success" onClick={()=>this.onSendClick(i.id,i.image,i.description,i.likes)} >Send</button>
                            <button className="btn btn-success" onClick={this.cancel} >Cancel</button>
                            </div>
                        )}

                            {/* <button className="btn btn-success" onClick={this.onSendClick} >Send</button>&nbsp;&nbsp; */}
                        
                       
                        </div>
                   
                    </div></div>
                   
                   
</div>
                   
        );

    }

}
export default withRouter(SharePost);