import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {

    render(){
        return(
            <div>
                <Grid>
                    <Jumbotron>
                        <h2>VBM Bus Service</h2>
                        <p>Connecting all remote village...</p>
                        <Link to="/about">
                        <Button bsStyle="primary">About </Button>
                    </Link>
                    </Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="asserts/mini-bus.jpg" circle className="profile-pic" />
                            <p>Journey starting here </p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="asserts/mini-bus.jpg" circle className="profile-pic" />
                            <p>Journey starting here </p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="asserts/mini-bus.jpg" circle className="profile-pic" />
                            <p>Journey starting here </p>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}