import React, { Component } from 'react';
import { Home } from '../Home';
export class AddComment extends Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }
    routeChange() {
        let path = `/comments`;
        this.props.history.push(path);
    }
    cancel = () => {
        this.props.history.push('/home');
    }
    render() {
        return (
            <div className="container">
                <form >

                    <div className="form-group">
                        <label>User</label>
                        <input ref={(ip) => this.user = ip} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Comment</label>
                        <input
                            ref={(ip) => this.comment = ip} className="form-control"/>
                    </div>


                    <button onClick={() => this.props.addComment(this.user.value, this.comment.value)}
                        class="btn btn-danger" >Post Comment</button>&nbsp;&nbsp;
<button className="btn btn-primary" onClick={this.cancel}>Go to home page</button>
                </form>

            </div>



        );

    }
}