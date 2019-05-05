import React, { Component } from 'react'
import '../components/Home.module.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <img src={require('../assets/code-b.jpg')}/>
        <div className="text">
        <p>DESIGN IS NOT JUST WHAT IT LOOKS LIKE <br/>AND FEELS LIKE <br/>
        DESIGN IS HOW IT WORKS<br/><small>-STEVE JOBS</small></p>
        </div>
        <div className="button">
          <h3>Who Am I?</h3>
          <img src={require('../assets/img-1.JPG')} />
           <p>I'm Vrushali Parate, recent college graduate.<br/>
           I would like to work as web designer or <br/>front end developer.</p>
           <p>My job is to build your website so that it is <br/>functional and user 
             friendly but <br/>at the same time attractive.</p>
        </div> 
      </div>
    )
  }
}

export default Home
