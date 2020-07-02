
import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { ShareList } from './ShareList';
const history=createHistory();
export class Shares extends Component{
    render(){
        return(
            <ShareList history={history}/>
        )
    }
}