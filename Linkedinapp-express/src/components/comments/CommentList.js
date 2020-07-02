import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
//import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';
 class CommentList extends Component {
    render() {
        return (
            <div className="container">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Comment</th>
                            
                        </tr>
                    </thead>
                    <tbody>{this.props.comments.map((c)=><tr key={c.id}>
                            {/* <td>{c.id}</td> */}
                            <td>{c.user}</td>
                            <td>{c.comment}</td>
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        );

    }


}

export default withRouter(CommentList);