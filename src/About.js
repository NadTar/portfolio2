import React from 'react'
import {Link} from 'react-router-dom'
import Card from './components/Card'
import Neuform from './components/Neuform'
import './App.css'
import NeuForm from './components/Neuform'


function checkOffset() {
  var p = document.querySelector("#prof")
  var f = document.querySelector('#footer')
  var a = document.querySelector('#ab')
  console.log(p.offsetTop)
  if (p) {
    if (p.offsetTop + p.height >= f.offsetTop - 10) {
      p.style.position = "absolute"
    }
    if (a.scrollTop + window.innerHeight < f.offsetTop) {
      p.style.position = "fixed"
    }
    
  }
}

function About() {
    return (
      <div id="ab" onScroll={() => checkOffset()}>
      <img src={require("./images/prof1.png")} id="prof"></img>
      <header>
        <h1>About Me</h1> <br></br><br></br>
        <img src={require("./images/prof1.png")} id="mobprof"></img>
      </header>
      <div id="about">
        <article>
          <h2>Design Philosophy</h2>
          <p>
            As an undergraduate student of <b>Human-Centered Design & Engineering</b> at the University of Washington, my design philosophy is rooted in <b>considering the people</b> most affected by my work. This means justifying everything from the vision of the product, to the minutiae of its interface through research, iteration, and testing.
            My experience on the teaching team of an introductory HCDE course taught me to put an emphasis on the <b>ethical and responsible practice of world building</b>. Course materials such as Batya Friedman’s <b>value-sensitive design</b> <a href="https://www.vsdesign.org/" target="_blank">framework</a> have served as a lens for me to deeply consider <b>underrepresented users</b> and map consequences for all potential stakeholders involved in a design.
            My passion for design is also melded with an interest in programming that enables me to directly take part in building some of my designs and collaborate more effectively in multidisciplinary teams.
          </p><br></br>
          <h2>Hobbies</h2>
          <p>In my free time I enjoy staying active by practicing Brazilian jiu jitsu, running, yoga and hiking (occasionally). I unwind on a healthy diet of movies, tv-shows, video games and peanut butter.</p><br></br>
          <h2>Contact</h2>
          <p>Please contact me for any inquiries through the form below or via at <b>nadirkt@uw.edu</b></p><br></br><br></br>
        </article>
        </div>
        <div>
          <NeuForm></NeuForm>
        </div><br></br><br></br>
      </div> 
    )
}

export default About;