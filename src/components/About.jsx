import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './About.css';



export default class About extends Component {

    render(){
        return(
            <div>
                <Image src= "asserts/bay-bus.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                    <Image src="asserts/mini-bus.jpg" circle className="about-profile-pic" rounded/>
                    <h3>The Mark</h3>
                    <p>Sometimes you learn more from your mistakes than you do from your masterpieces. Get away from those little Christmas tree things we used to make in school. Clouds are free they come and go as they please. Very easy to work these to death. Let's do it again then, what the heck. We can always carry this a step further. There's really no end to this.</p>

<p>You have to make those little noises or it won't work. We'll paint one happy little tree right here. Tree trunks grow however makes them happy. This is truly an almighty mountain. I like to beat the brush. If you've been in Alaska less than a year you're a Cheechako.</p>

<p>Little trees and bushes grow however makes them happy. I'm sort of a softy, I couldn't shoot Bambi except with a camera. If you do too much it's going to lose its effectiveness. There's nothing wrong with having a tree as a friend. Just let go - and fall like a little waterfall. There is immense joy in just watching - watching all the little creatures in nature.</p>

<p>Every day I learn. The only prerequisite is that it makes you happy. If it makes you happy then it's good. When things happen - enjoy them. They're little gifts.</p>

<p>Every highlight needs it's own personal shadow.</p>
                    </Col>
                </Grid>
            </div>
        );
    }
}