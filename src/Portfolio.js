import React from 'react'
import {Link} from 'react-router-dom'
import Card from './components/Card'
import './App.css'
import pbud from './images/poolbuddy.png'
import sent from './images/sentinel/sentineltri.png'

function Portfolio() {
    return (
      <div>
        <header className="App-header">
        <h1>Hi, This is Nadir. Welcome to my portfolio.</h1>
        <p>I am an aspiring <b>UX engineer</b>, well versed in the <b>user-centered</b> methodology. <br></br> I strive to create design solutions that are justified in <b>research</b>, <b>best practices</b> and <b>ethics.</b>         
        </p>
        <p>Take a look at some of my work below.</p>
        <hr></hr><br></br><br></br>
      </header>
      <body class="work">
        <Link to="/poolbuddy" style={{ textDecoration: 'none', color: 'black' }}>
          <Card img={require('./images/poolbuddy.png')} name="PoolBuddy" role="UX Design" year="2020" time="~7min" desc="A UX project aimed at creating a platform to facilitate routine carpools."></Card>
        </Link><br></br><hr></hr><br></br><br></br>
        <Link to="/sentinel" style={{ textDecoration: 'none', color: 'black' }}>
          <Card img={require('./images/sentinel/sentineltri.png')} name="Sentinel" year="2019" time="~7min" role="UX Design" desc="A  UX project investigating the pain points of bikers in Seattle and culminating in a smart bike lock and tracking system."></Card>
        </Link><br></br><hr></hr><br></br><br></br>
        <a href="https://drive.google.com/file/d/1S4oUsZ2CMuXoX-2aVCmJBs15A_YqzxUN/view" target="_blank">
          <Card img={require('./images/rc.JPG')} name="Real Change" year="2020" time="~2" role="Brand Redesign" desc="A brandbook showcasing a redesign of Seattle's premier street newspaper."></Card>
        </a><br></br>
        <hr></hr>
        <article>
          <h2>About this Website</h2>
          <p>I coded this website myself as an excercise in React programming and Neumorphic UI design.<br></br> Shout out to <b><a href="https://dev.to/mrsaeeddev">Saeed Ahmad</a></b> for the UI kit and his <a href="https://dev.to/mrsaeeddev/why-i-made-a-react-components-library-based-on-the-concept-on-neumorphism-ml1">article</a> on Neumorphism that inspired this design.</p>
        </article>
      </body>
      </div>
        
    )
}

export default Portfolio;