import React, { Component } from 'react';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile/Profile';
import './App.css';
import MyNetwork from './components/MyNetwork/MyNetwork';
import MyConnections from './components/MyNetwork/MyConnections';
import EditProfile from './components/Profile/EditProfile';
import Chat from './components/Chat';
import job from './components/jobs/job';
import JobDetails from './components/jobs/jobdetails';
import Jobpost from './components/jobs/jobpost';
import Jobapply from './components/jobs/jobapply';
import Jobsearch from './components/jobs/jobsearch';
import { SharePost } from './components/comments/SharePost';
import { Comments } from './components/comments/Comments';
import { Home } from './components/Home';


class App extends Component {
  render() {
    return (
     <Router>
       <div className="App">
         <Navbar />
         <Route exact path="/" component={Landing}/>
         <div className="container">
         <Switch>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/register" component={Register}/>
           <Route exact path="/profile" component={Profile}/>
           <Route exact path="/chat" component={Chat}/>
           <Route exact path="/mynetworks" component={MyNetwork}/>
           <Route exact path="/myconnection" component={MyConnections}/>
           <Route exact path="/editprofile/:_id" component={EditProfile}/>
           <Route exact path="/job" component={job}/>
              <Route exact path="/jobdetails/:_id" component={JobDetails}/>
              <Route exact path="/jobpost/" component={Jobpost}/>
              <Route exact path="/jobapply/" component={Jobapply}/>
               <Route exact path="/jobsearch/:_id" component={Jobsearch}/>
                
               <Route exact path="/home" component={Home}></Route>
               <Route exact path="/comments" component={Comments}></Route>
            <Route exact path="/share/:_id" component={SharePost}></Route>

         </Switch>
         </div>
       </div>
     </Router>
    );
  }
}

export default App;
