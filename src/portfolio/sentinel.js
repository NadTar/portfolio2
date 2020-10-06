import React, {useState} from 'react'
import Screen from '../components/Screen'
import BulletMap from '../components/BulletMap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal'
import Button from '../components/Button';
import NeuButton2 from '../components/NeuButton2';
import interviews from '../images/sentinel/interviews/i.pdf'
import compan from '../images/sentinel/compan/comp.pdf'
import testrep from '../images/sentinel/pp/e.pdf'
import wireframes from '../images/sentinel/wireframes/w.pdf'

function scroll(id) {
  var anchor = document.querySelector(id)
  console.log(anchor)
  anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function scale(id) {
  var x = document.querySelector(id)
  x.classList.toggle('scaled')
}

function openPDF(pdf){
  window.open(pdf);
  return false;
}

function show(c, z) {
  var x = document.querySelectorAll(c)
  var y = document.querySelector(z)
  console.log(y.innerHTML)
  if (y.innerHTML == "Expand") {
    y.innerHTML = "Collapse"
  } else {
    y.innerHTML = "Expand"
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i].style.display == 'none') {
      x[i].style.display = 'flex';
    } else {
      x[i].style.display = 'none'
    }
  }
}


function Sentinel() {
  const [modalIsOpen1, setModalIsOpen1] = useState(false)
    return (
      <div className="project">
        <header className="App-header" style={{minHeight: '40vh'}}>
        <h1>Sentinel</h1>
        <br></br>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '80vw', flexWrap: 'wrap'}}>
            <img src={require('../images/sentinel/screens/screen.png')} style={{maxWidth: '20vw', height: '25vh'}}></img>
            <img src={require('../images/sentinel/lock.png')} style={{maxWidth: '20vw', height: '25vh'}}></img>
            <img src={require('../images/sentinel/tracker.png')} style={{maxWidth: '20vw', height: '25vh'}}></img>
        </div><br></br>
        <img src={require('../images/sentinel/logo.png')} style={{maxHeight: '15vh'}}></img>
        <br></br>
        <p><i>A comprehensive smart bike lock system.</i></p>
      </header>
      <body class="description">
        <article>
          <h2>Vision</h2>
          <p>
            Our research showed that bike <b>safety</b> was a primary concern of bikers in the Seattle area. Thus, Sentinel aims to build on existing bike lock technology to provide a convenient way for users to secure their bikes as well as provide them information on the safest places to park.<br></br></p>
            <p><img src={require('../images/sentinel/screens/compscreen.png')} style={{maxHeight: '40vh', float: 'right'}}></img>The Sentinel bike lock system takes a multi-step approach to achieve this goal:<br></br><br></br>
            <b>Prevention - </b> the Sentinel App informs users how safe the parking location of their bike is based on Seattle Police Department Bike Theft metrics.<br></br>
            <b>Detterance - </b> the Sentinel Smart Lock allows users to monitor the status of their bike through the App, alerting them to any breaches in security while using alarms on the lock to deter theft.<br></br>
            <b>Recovery - </b> the Sentinel GPS tracker can be used to track a stolen bike and the bike profile makes it easy report its location and make to the authorities</p>

        </article>
        <article>
          <h2>Process Summary</h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '80vw', flexWrap: 'wrap'}}>
          
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '7vh'}}>
              <img src={require('../images/sentinel/proarrow.svg')}></img>
              <p className="link"> <a onClick={()=>scroll('#ur')}>User Interviews</a></p>
              <p className="link"><a onClick={()=>scroll('#ca')}>Competitive Analysis</a></p>
              <p className="link"><a onClick={()=>scroll('#per')}>Personas</a></p>
              <p className="link"><a onClick={()=>scroll('#jour')}>Journey Map</a></p>
            </div>
            <img src={require("../images/sentinel/icons/r.png")} className="icon"></img>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '7vh'}}>
              <img src={require('../images/sentinel/proarrow1.svg')}></img>
              <p className="link"><a onClick={()=>scroll('#dr')}>Design Requirements</a></p>
              <p className="link"><a onClick={()=>scroll('#stor')}>Storyboards</a></p>
              <p className="link"><a  onClick={()=>scroll('#ia')}>Information Architecture</a></p>
            </div>
            <img src={require("../images/sentinel/icons/i.svg")}  className="icon"></img>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '7vh'}}>
              <img src={require('../images/sentinel/proarrow2.svg')}></img>
              <p className="link"><a onClick={()=>scroll('#pp')}>Paper Prototypes</a></p>
              <p className="link"><a onClick={()=>scroll('#ut')}>Usability Testing</a></p>
              <p className="link"><a  onClick={()=>scroll('#aw')}>Annotated Wireframes</a></p>
            </div>
            <img src={require("../images/sentinel/icons/p.png")} className="icon"></img>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '7vh'}}>
              <img src={require('../images/sentinel/proarrow4.svg')}></img>
              <p className="link"><a  onClick={()=>scroll('#hf')}>Hi-Fidelity Mockups</a></p>
            </div>
            <img src={require("../images/sentinel/icons/f.png")} className="icon"></img>
          </div>
          <br></br><br></br>
          <p><b>Team Size:</b> 4 members</p>
          <p><b>Duration:</b> 10 weeks</p>
          <p><b>Location:</b> University of Washington: Seattle</p>
          <p><b>Users:</b> Bikers in the Seattle Area</p>
        </article>
        <article>
          <h2>Team</h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            <Screen img={require("../images/sentinel/team/tn.webp")} maxHeight="30vh" cap="Travis Neils - Sophomore in HCDE"></Screen>
            <Screen img={require("../images/sentinel/team/ca.webp")} maxHeight="30vh" cap="Carl Arenas - Senior in Psychology"></Screen>
            <Screen img={require("../images/sentinel/team/nt.webp")} maxHeight="30vh" cap="Nadir - Sophomore in HCDE"></Screen>
            <Screen img={require("../images/sentinel/team/sy.webp")} maxHeight="30vh" cap="Samantha - Senior in Public Health"></Screen>
          </div>
        </article>
        <article>
          <h2>Context & Role</h2>
          <p>This project was part of an upper level undergraduate course in User Centered Design with the University of Washington's Human Centered Design & Engineering department.
              Our team was formed through random assignment and we collectively decided to focus our project on the biking community in Seattle. Initially we planned to divide the work for each deliverable evenly, however, due to schedule conficts I took the lead on making the <b>paper prototype</b>, <b>homescreen wireframes</b> and <b>3-D rendering </b>the lock and tracker. The logo and name were also proposed by me.
          </p>
        </article><hr></hr>
        <article>
          <h2><img src={require("../images/sentinel/icons/r.png")} className="icon"></img> Research</h2>
          <h3 id="ur">User Interviews</h3> <br></br>
          <p>Method: <b>Semi Structured Interview</b></p>
          <p>With a clear user group in mind, our next step was to explore the problem space to see what kind of challenges bikers face on a regular basis.
            Semi-structured interviews allowed us to have an open ended conversation with our target users that revolved around their biking history, pain points and what could enhance their experience.
          </p>
          <h4>Participants</h4>
          <p>We conducted four interviews with participants of varying age groups that were either recreational or commuter bikers. Their description are with pseudonyms are as follows:</p>
          <p><b>Jane - </b>A senior biker who works at the UW IMA and has commuting on her bike for the majority of her life</p>
          <p><b>Ahmed - </b>A student who works at the UW bike shop and is a member of the UW recreational cycling club</p>
          <p><b>Ian - </b>A working professional who regularly bikes on the weekends for fun.</p>
          <p><b>Brenda - </b>A student who bikes regularly to commute to class and work.</p>
          <h4>Key Insights</h4><br></br>
          <div style={{margin: 'auto'}}>
          <p><b>- Safety is a primary concern of bikers.</b> (4/4 participants mentioned it with 2/4 having had their bike stolen)</p>
          <p><b>- There is a need for clearer information on bike friendly routes. </b>(Map navigation can lead to routes that aren't safe)</p>
          <p><b>- Finding a safe and convenient place to park a bike can be time consuming</b></p>
          <p><b>- Biking rules and regulations can be unclear.</b></p>
          </div>
          <br></br>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "flex-start", flexWrap: 'wrap'}}>
            <img className ="scale" src={require('../images/sentinel/interviews/j.svg')} style={{maxHeight: '45vh'}}></img>
            <img className ="scale" src={require('../images/sentinel/interviews/a.svg')} style={{maxHeight: '45vh'}}></img>
            <img className ="scale" src={require('../images/sentinel/interviews/i.svg')} style={{maxHeight: '50vh'}}></img>
            <img className ="scale" src={require('../images/sentinel/interviews/b.svg')} style={{maxHeight: '55vh'}}></img>
          </div>
          <p>You can view the full interview protocol and transcripts by clicking the button below.</p> <br></br>
          <div style={{display: 'flex', justifyContent:'center'}}><NeuButton2 text='Full Interviews'  onClick={()=>openPDF(interviews)}></NeuButton2></div> <br></br>
          <h3 id="ca">Competitive Analysis</h3>
          <p>Once we had an understanding of our users'pain points, we studied the following competing products that inhabited our problem space:</p><br></br>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', maxWidth: '20vw'}}>
              <img src={require("../images/sentinel/compan/sherl1.JPG")} style={{maxHeight: '15vh', maxWidth: '30vh'}}></img>
              <img src={require("../images/sentinel/compan/sherl2.JPG")}style={{maxHeight: '15vh', maxWidth: '30vh'}}></img>
              <p><b>Sherlock - </b>A cylindrical GPS tracker that is hidden in the handlebars of the bike</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', maxWidth: '20vw'}}>
              <img src={require("../images/sentinel/compan/bitlock.png")} style={{maxHeight: '30vh', maxWidth: '50vh'}}></img>
              <p><b>Bitlock - </b>A keyless smart bike lock that can be tracked and unlocked via phone app</p>
           </div>
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', maxWidth: '20vw'}}>
              <img src={require("../images/sentinel/compan/rs.png")}style={{maxHeight: '30vh', maxWidth: '50vh'}}></img>
              <p><b>Rackspotter -</b>A crowdsourced map for bike racks in Arlington.</p>
           </div> 
          </div>
          <h4>Key Insights</h4><br></br>
          <div style={{margin: 'auto', width: '70vw'}}>
            <p><b>- Hands free locking saves time. </b>Bitlock reviews show a reduction of time taken due to sparing the hassle of keys.</p>
            <p><b>- Electronic lock needs alternate way to unlock in case of power failure. </b>Bitlock provided pin code input as an alternative method of unlocking faster than keys.</p>
            <p><b>- Smartlock does not actively deter theft. </b>Bitlock can be tracked but it does nothing to deter theft while it occurs. Tracking is not useful if the lock has been broken.</p>
            <p><b>- Hidden tracker is an useful in recovering stolen bike. </b> Sherlock made it easy to report a stolen bike's location to the authorities.</p>
            <p><b>- Crowdsourcing is an effective way to build a map. </b> Rackspotter showed the effectiveness of crowdsourcing to map bike racks in Arlington.</p>
          </div>
          <p>You can view the full analysis report by clicking the button below.</p> <br></br>
          <div style={{display: 'flex', justifyContent:'center'}}><NeuButton2 text='Full Report' onClick={()=>openPDF(compan)}></NeuButton2></div> <br></br>
          <h3 id="per">Personas</h3>
          <p>To synthesize our interviews, we created two personas that cumalitively represented our user's goals and pain points. The key aspect of these personas was that they were <b>data-driven </b>and cleary defined our user group between <b>commuter vs. recreational</b> bikers.</p><br></br>
          <Carousel>
            <div>
              <img src={require("../images/sentinel/personas/k.png")} alt="Persona for Karen, the commuter."></img>
            </div>
            <div>
              <img src={require("../images/sentinel/personas/t.png")} alt="Persona for Timothy, the recretational user."></img>
            </div>
          </Carousel>
          <p><b>Tools Used: Adobe Illustrator</b></p><br></br>
          <h3 id="jour">User-Journey Map</h3>
          <p>In order to <b>contextualize </b>our users' interactions with our product, we created a user journey map for Karen, the commuting user, with insights from our interviews from commuting bikers. These users would be engaging in the locking process on a <b>daily basis </b> so we thought it was important to develop a nuanced understanding of their experience.</p><br></br>
          <img src={require("../images/sentinel/journey.webp")} alt="Commuter Journey Map" style={{float: 'center'}}></img>
        </article><hr></hr>
        <article>
          <h2><img src={require("../images/sentinel/icons/i.svg")} className="icon"></img> Design</h2><br></br>
          <h3 id="dr">Task Requirements</h3>
          <p>In order to <b>converge</b> on a design solution, we generated the following task requirements for the Sentinel system, based on our research:</p>
          <ol>
            <li><b>Notify users if their bike is being stolen.</b></li>
            <li><b>Remotely unlock the bike lock.</b></li>
            <li><b>Actively deter theft in action.</b></li>
            <li><b>Track the location of the bike.</b></li>
            <li><b>Allow users to report bike theft to authorities in a straight forward manner.</b></li>
            <li><b>Give users information where is safe to park.</b></li>
            <li><b>Allow users to navigate to specific bike racks and other biking relating resources such as pumps.</b></li>
            <li><b>Navigation should be bike specific.</b></li>
          </ol>
          <br></br>
          <h3 id="stor">Storyboards</h3><br></br>
          <p>We each then created storyboards to visualize these requirements in a <b>real-world context.</b></p>
          <br></br>
          <div style={{display: 'flex', justifyContent: 'center'}} onMouseEnter={() => scale('#story')} onMouseLeave={()=> scale('#story')}>
            `<div id="story" style={{height: '50%', width: '50%'}} className='scaled'  > 
              <Carousel>
                <div style={{margin: 'auto'}}>
                  <img  src={require("../images/sentinel/storyboards/theftstory.jpg")} alt="Storyboard showing bike theft"></img>
                  <p className="legend"><b>Theft Storyboard</b> - Designer: Nadir</p>
                </div>
                <div style={{margin: 'auto'}}>
                  <img src={require("../images/sentinel/storyboards/rackstory.jpg")} alt="Storyboard showing navigation"></img>
                  <p className="legend"><b>Navigating to bike rack</b> - Designer: Carl</p>
                </div>
                <div style={{margin: 'auto'}}>
                  <img  src={require("../images/sentinel/storyboards/pumpstory.jpg")} alt="Storyboard showing navigation"></img>
                  <p className="legend"><b>Uploading resources: bike pump</b> - Designer: Nadir</p>
                </div>
                <div style={{margin: 'auto'}}>
                  <img  src={require("../images/sentinel/storyboards/rackstory2.jpg")} alt="Storyboard showing navigation"></img>
                  <p className="legend"><b>Navigating to bike rack</b> - Designer: Carl</p>
                </div>
                <div style={{margin: 'auto'}}>
                  <img src={require("../images/sentinel/storyboards/rackstory3.jpg")} alt="Storyboard showing navigation"></img>
                  <p className="legend"><b>Navigating to bike rack</b> - Designer: Travis</p>
                </div>
                <div style={{margin: 'auto'}}>
                  <img  src={require("../images/sentinel/storyboards/rackstory4.JPG")} alt="Storyboard showing navigation"></img>
                  <p className="legend"><b>Navigating to bike rack</b> - Designer: Samantha</p>
                </div>
              </Carousel>
            </div>
          </div>
          <br></br>
          <h3 id="ia">Information Architecture</h3><br></br>
          <p>In order to create a functional prototype, we designed the following information architecture, representing core functions of our system.</p> <br></br>
          <div style={{margin: 'auto'}}>
            <img src={require("../images/sentinel/infoarch.jpg")} alt="Poolbuddy information architecture" style={{maxWidth: "75vw", height: 'auto'}}></img>
          </div>
          <hr></hr>
        </article>
        <article>
          <h2><img src={require("../images/sentinel/icons/p.png")} className="icon"></img>Prototype</h2>
          <h3 id="pp">Paper Prototype</h3>
          <p>To begin <b>usability testing</b> our concept, we created paper prototypes for its main functions. This was a <b>lean</b> and <b>simple</b> way for use to test the core concept of our app without having to make higher level design decisions at this stage.</p> <br></br>
          <p>We created three separate prototypes that encompassed three core task requirements for our design:</p>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '65vw', minWidth: '20vw'}}>
              <h4>Task 1: Onboarding + Pairing</h4> <br></br>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-start', flexWrap: 'wrap'}} >
                <Screen maxHeight='40vh' img={require("../images/sentinel/pp/t1/0.JPG")} cap="User grants permissions" onLoad={() =>show(".t1",'#tb1') }></Screen>
                <Screen maxHeight='40vh' className="t1" img={require("../images/sentinel/pp/t1/1.JPG")} cap="Pairing lock with phone"></Screen>
                <Screen maxHeight='40vh' className="t1" img={require("../images/sentinel/pp/t1/2.JPG")} cap="Pairing complete"></Screen>
                <Screen maxHeight='40vh' className="t1" img={require("../images/sentinel/pp/t1/3.JPG")} cap="User completes login info"></Screen>
                <Screen maxHeight='40vh' className="t1" img={require("../images/sentinel/pp/t1/4.JPG")} cap="User agrees to a simplified T&C"></Screen>
                <Screen maxHeight='40vh' className="t1" img={require("../images/sentinel/pp/t1/5.JPG")} cap="User adds their preferences"></Screen>
                <Screen maxHeight='40vh' className="t1" img={require("../images/sentinel/pp/t1/6.JPG")} cap="User selects back up pin code"></Screen>
                <NeuButton2 text="Expand" className="test" id="tb1" onClick={() =>show('.t1', '#tb1') }></NeuButton2>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',  maxWidth: '65vw', minWidth: '20vw'}}>
              <h4>Task 2: Selecting a bike rack + Navigation</h4> <br></br>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-start', flexWrap: 'wrap'}} >
                <Screen maxHeight='40vh' img={require("../images/sentinel/pp/t2/0.JPG")} cap="Map button navigates to map screen." onLoad={() =>show(".t2", '#tb2') }></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/1.JPG")} cap="Tapping on a bike rack will give information."></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/2.JPG")} cap="Holding on the screen will bring up a list view of racks."></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/3.JPG")} cap="Filtering bike racks by type."></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/4.JPG")} cap="Filtering bike racks by type."></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/5.JPG")} cap="Selecting a bike rack to navigate to"></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/6.JPG")} cap="Navigation"></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/7.JPG")} cap="Navigation complete. User can save rack."></Screen>
                <Screen maxHeight='40vh' className="t2" img={require("../images/sentinel/pp/t2/8.JPG")} cap="Saved rack is starred."></Screen>
                <NeuButton2 text="Expand" className="test" id="tb2" onClick={() =>show(".t2", '#tb2') }></NeuButton2>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '65vw', minWidth: '20vw'}}>
              <h4>Task 3: Adding a new bick rack/resource to the map</h4> <br></br>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-start', flexWrap: 'wrap'}} >
                <Screen maxHeight='40vh' img={require("../images/sentinel/pp/t2/0.JPG")} cap="User is on map screen at an unindexed location." onLoad={() =>show(".t3", '#tb3') }></Screen>
                <Screen maxHeight='40vh' className="t3" img={require("../images/sentinel/pp/t3/2.JPG")} cap="User presses add button to add new location"></Screen>
                <Screen maxHeight='40vh' className="t3" img={require("../images/sentinel/pp/t3/4.JPG")} cap="Data input: Location pin drop"></Screen>
                <Screen maxHeight='40vh' className="t3" img={require("../images/sentinel/pp/t3/6.JPG")} cap="Data input: Amenities"></Screen>
                <Screen maxHeight='40vh' className="t3" img={require("../images/sentinel/pp/t3/7.JPG")} cap="Data input: Crowd reporting"></Screen>
                <Screen maxHeight='40vh' className="t3" img={require("../images/sentinel/pp/t3/8.JPG")} cap="Submission completed"></Screen>
                <NeuButton2 text="Expand" className="test" id="tb3" onClick={() => show(".t3", "#tb3") }></NeuButton2>
              </div>
            </div>
          </div> <br></br>
          <h3 id="ut">Usability Testing</h3><br></br>
          <h4>Protocol</h4><br></br>
          <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
            <p>With our prototypes, we conducted three separate usability tests to evaluate how well users could perform each task. <br></br> <br></br>
            Participants with prior recreational/commuting bike experience were recruited. Tests were conducted in an environment of the participants' preference. The participants were given a script for each task and instructed to use the <b>think-aloud protocol.</b><br></br><br></br>
            You can view our full report with the complete protocol, participant profiles, questions and insights by clicking the button below.</p>
            <Screen img={require("../images/sentinel/test.jpg")} cap="Testing our paper prototype"></Screen>
          </div>
          <div style={{width: '30vw'}}><NeuButton2 text="Full Report" onClick={() => openPDF(testrep)}></NeuButton2></div>
          <br></br>
          <h4>Main Insights</h4><br></br>
          <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', flexWrap: 'wrap', width: "85vw"}}>
          <div style={{width: "35vw", marginBottom:"5vh"}}>
            <p><b>Finding 1.[T1]: Purpose of back-up pine code unclear</b></p>
            <p>The participant was confused as to why a back-up pin code was needed</p>.
            <Screen img={require("../images/sentinel/pp/t1/6.JPG")} cap="Problem screen"></Screen>
            <p><b>Fix:</b> Add clarifying information for the user.</p>
          </div>
          <div style={{width: "35vw", marginBottom:"5vh"}}>
            <p><b>Finding 2.[T2]: Bike rack list view was not discoverable</b></p>
            <p>The participant struggled to bring up bike racks on the map as pressing and holding to bring up a list was not clear.</p>.
            <Screen img={require("../images/sentinel/pp/t2/3.JPG")} cap="Problem screen"></Screen>
            <p><b>Fix:</b> Add a seperate button to bring up list view.</p>
          </div>
          <div style={{width: "35vw", marginBottom:"5vh"}}>
            <p><b>Finding 3.[T2]: Unclear terminology in bike rack description</b></p>
            <p>Terms such as "camera", "covered" and "distance" were unclear descriptors of bike rack.</p>.
            <Screen img={require("../images/sentinel/pp/t2/4.JPG")} cap="Problem screen"></Screen>
            <p><b>Fix:</b> Change "covered" to rain cover. Add helper buttons for optional expanded descriptions.</p>
          </div>
          <div style={{width: "35vw", marginBottom:"5vh"}}>
            <p><b>Finding 4.[T2 + 3]: Lack of information on the map.</b></p>
            <p>Participant was unsure what the spots on the map meant.</p>.
            <Screen img={require("../images/sentinel/pp/t2/0.JPG")} cap="Problem screen"></Screen>
            <p><b>Fix:</b>Use unique descriptive icons, add legend to the map.</p>
          </div>
          </div><br></br>
          <h3 id="aw">Annotated Wireframes</h3><br></br>
          <p><b>Tools Used: Figma</b></p><br></br>
          <p>After testing the basic premise of our system with our paper prototype, we created wireframes for all the screens of our application. The slide show below showcases key wireframes and paths essential to fulfilling our task requirements, each annotated with our design rationale.</p><br></br>
          <Carousel>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/0.jpg")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img src={require("../images/sentinel/wireframes/1.jpg")} alt="Lockscreen wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/2.jpg")} alt="Map wireframe"></img>
                </div>
                <div style={{margin: 'auto', width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/3.jpg")} alt="Map wireframe"></img>
                </div>
                <div style={{margin: 'auto', width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/4.jpg")} alt="Add location wireframe"></img>
                </div>
                <div style={{width: "800px", margin: 'auto', height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/5.jpg")} alt="Add location wireframe"></img>
                </div>
                <div style={{margin: 'auto', width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/6.jpg")} alt="Key path set up"></img>
                </div>
                <div style={{margin: 'auto', width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/7.jpg")} alt="Key path add location"></img>
                </div>
                <div style={{margin: 'auto', width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/8.jpg")} alt="Key path navigation"></img>
                </div>
                <div style={{margin: 'auto', width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/wireframes/9.jpg")} alt="Key path theft"></img>
                </div>
              </Carousel>
              <p>Click the button below to view all 35 wireframes created for Sentinel<br></br><br></br></p>
              <div style={{width: '30vw'}}><NeuButton2 text="Full Wireframes" onClick={() => openPDF(wireframes)}></NeuButton2></div>
              <hr></hr>
        </article>
        <article>
        <h2><img src={require("../images/sentinel/icons/f.png")} className="icon"></img>Finalize</h2>
        <h3 id="hf">Hi-Fidelity Mockups</h3><br></br>
        <p><b>Tools Used: Figma, AutoCAD</b></p><br></br>
        <p>To finalize our design, we had an inclass critique for our wireframes. We then incorporated this feedback in order to create polished mockups that represented the final design.</p><br></br>
        <p>We made the final decision regarding color schemes and branding, choosing a white/navy blue scheme to and a strong font to identify with the theme of <b>security</b>.</p><br></br>
        <p>I also used AutoCAD to model our lock and tracker components to finish the concept. Notable features include an <b>alarm</b> that can act as active detterant of theft as well as a <b>hidden GPS tracker</b> based on our findings from our competitive analysis.</p><br>
        </br>
        <Carousel>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/0.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/1.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/2.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/3.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/4.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/5.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/6.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/7.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/8.png")} alt="Setup wireframe"></img>
                </div>
                <div style={{margin: 'auto',width: "800px", height: "600px"}}>
                  <img  src={require("../images/sentinel/hifi/9.png")} alt="Setup wireframe"></img>
                </div>
        </Carousel>
        </article>
        <article>
          <h2>Reflection</h2><br></br>
          <h4>Successes</h4><br></br>
          <p><b>A unique solution -</b> We finished with confidence in our concept. We believe that there has yet to exist a system like Sentinel that focuses on all aspects of bike security, from theft prevention and detterence to tracking and recovery.</p>
          <p><b>Designing a physical product</b> - Most of our peers worked exclusively on mobile/web applications. We are proud to have an idea that also features a physical device.</p>
          <p></p>
          <br></br>
          <h4>Shortcomings</h4><br></br>
          <p><b>Lack of clear roles - </b>We could have done a better job of delegating duties and having distinct roles in order to speed up decisions, especially in our prototype phase.</p>
          <p><b>Need for specific research - </b> Our initial research focused on the general problems faced by bikers. We could have conducted a second round of research focusing specifically on bike security to explore the problem space with more depth.</p>
          <p><b>Inconsistent Paper Prototype - </b> Our prototype was created separately and not as a group. Thus it lacked consistent design and terminology which adversely affected our usability tests.</p>
          <p><b>Testing independently - </b>Due to scheduling conflicts, our usability tests were done independently. This hampered our ability to conduct these tests smoothly by taking on specific roles, as well as follow a consistent protocol.</p>
          <br></br>
          <h4>Lessons & Skills Learned</h4><br></br>
          <p><b>Learning from the competition - </b>Our competitive analyses at the early stage of our research, went on to inform key aspects of our design by studying what did and didn't work in other products. I would like to build on this type research skills in the future.</p>
          <p><b>Proficiency in interface design - </b>In creating prototypes, wireframes and mockups, I got a lot of practice making interfaces that I enjoyed and look forward to honing in future work.</p>
          <p><b>First comprehensive UX project - </b>As a newly accepted student into a design program, I am proud to have this as my first UX case study. The hands-on experience working with our user group, reaffirmed my passion for this emerging field.</p>
          <hr></hr>
          <br></br><h2 style={{margin: 'auto'}}>Thank You for Reading !</h2><br></br><br></br>
        </article>
      </body>
      </div>
        
    )
}

export default Sentinel;