import React, {useState} from 'react'
import useHistory from 'react-router-dom'
import Screen from '../components/Screen'
import BulletMap from '../components/BulletMap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal'
import NeuButton2 from '../components/NeuButton2'

function imageScale() {
  let i = document.querySelector('#poster')
  i.classList.toggle('scaled')
  
}

var t = 0;
var tim = null;

function imgLoop(){
  if (window.location.pathname == "/poolbuddy") {
    var f = document.querySelectorAll('#propstat p')
    console.log(f)
    t++;
    console.log(t)
    var d = document.querySelector('#def')
    if (t % 6 == 0) {
      f[4].classList.remove('scaled')
      d.src = require('../images/proposal/default.jpg')
    } else if (t % 6 == 1) {
      d.src = require('../images/proposal/create.jpg')
      f[0].classList.add('scaled')
    } else if (t % 6 == 2) {
      d.src = require('../images/proposal/search.jpg')
      f[0].classList.remove('scaled')
      f[1].classList.add('scaled')
    } else if (t % 6 == 3) {
      d.src = require('../images/proposal/maintain.jpg')
      f[1].classList.remove('scaled')
      f[2].classList.add('scaled')
    } else if (t % 6 == 4) {
      d.src = require('../images/proposal/message.jpg')
      f[2].classList.remove('scaled')
      f[3].classList.add('scaled')
    } else if (t % 6 == 5) {
      d.src = require('../images/proposal/nav.jpg')
      f[3].classList.remove('scaled')
      f[4].classList.add('scaled')
    } 
  }
}

function statLoop() {
  var f = document.querySelectorAll("#propstat p")
}
function slide() {
  console.log("asdasda")
  tim = setInterval(imgLoop, 1750)
}

setTimeout(slide, 2500)


function Poolbuddy() {
  const [modalIsOpen1, setModalIsOpen1] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)
    return (
      <div className="project">
        <header className="App-header" style={{minHeight: '40vh'}}>
        <h1>PoolBuddy</h1>
        <p><i>Facilitating Carpooling within a Community</i></p>
        <img  onClick={() => setModalIsOpen1(true)}src={require('../images/poster.png')}style={{maxHeight: '40vh', float: 'right', cursor: 'pointer'}}/>
        <Modal isOpen={modalIsOpen1}>
          <div style={{width: '100%', height: '100%'}} onClick={() => setModalIsOpen1(false)} >
            <img  src={require('../images/poster.png')} style={{maxWidth:'100vw', maxHeight: '100vh', position: 'absolute', left: '25vw'}}/>
          </div>
        </Modal>
        <p>Project Poster: Click to enlarge</p>
      </header>
      <body class="description">
        <article>
          <h2>Project Summary</h2>
          <p>In the US, adding one passenger to every 10 vehicles can make a significant impact on carbon emissions. Moreover, carpooling has several practical effects including reduced traffic congestion and cost savings for the individual.</p> <br></br>
          <p>PoolBuddy is an application that focuses on providing its a users a safe and convenient way to find people to carpool with.  Our research showed that there was an interest in finding both routine and one-off carpools as long as safety and convenience are prioritized. Consequently our design features a matching system that factors in background checks and user ratings to ensure safety. Its focuses on allowing users to build a reliable network of people to carpool with as well as easily organize carpools with existing contacts.</p>
          <p><b>Team Size:</b> 4 members</p>
          <p><b>Duration:</b> 10 weeks</p>
          <p><b>Location:</b> University of Washington: Seattle</p>
          <p><b>Users:</b> Drivers, Riders, Current carpoolers</p>
        </article><br></br><br></br>
        <article>
          <h2>Process Summary</h2>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={require('../images/processsummary.svg')}></img>
          </div>
          <p>The diagram above summarizes our design process for this project. The diamonds visualize the divergent and convergent methods we used in researching and designing Poolbuddy.</p>
        </article><br></br><br></br>
        <article>
          <h2>Team</h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            <Screen img={require("../images/team/0.png")} maxHeight="20vh" cap=" Mengjiao Li - UW Informatics Student"></Screen>
            <Screen img={require("../images/team/1.png")}  maxHeight="20vh" cap=" Rachel Sitt - UW CSE Student"></Screen>
            <Screen img={require("../images/team/2.png")}  maxHeight="20vh" cap=" Nadir Tareen - UW HCDE Student"></Screen>
            <Screen img={require("../images/team/3.png")}  maxHeight="20vh" cap=" Perry Wu - UW CSE Student"></Screen>
          </div>
        </article><br></br><br></br>
        <article>
          <h2>My Role</h2>
          <p>This project was part of an undergraduate course in Human Computer Interaction with the Paul Allen School of Computer Science.
             As a team, we collectively choose to pursue this direction by bidding on this design problem from a selection of student proposals.
             We approached the majority of the work as a team, but as the only one with research experience, I took the lead on the <b>research plan</b>, <b>survey</b>, and <b>branding</b>. I also drafted the intial <b>paper prototypes</b>, conducted the <b>heuristic evaluation</b> and designed the <b>usability test</b> protocol. The rest of the design were iterated upon as a group.
          </p>
        </article><br></br><br></br><hr></hr>
        <article>
          <h2>User Research</h2><br></br>
          <p>As carpooling is an activity that is applicable to many user groups, we wanted to explore the different contexts of carpooling with a focus on users' current transport experience, previous carpool relationships and the factors they consider the most important in regards to carpooling.
          </p>
          <p>
            We used two methods to conduct this research:<br></br> <br></br>Our primary method was semi-structured interviews as it gave us the flexibility to ask follow-up questions in an informal setting to fully explore our problem space.
            We conducted these interviews with five different participants which included university students and working professionals who either drove, used public transport or biked. One of them had prior carpool experience. Interviews were recorded, transcribed and significant themes were analyzed using affinity diagramming.<br></br>
            Our secondary method was an online survey as it allowed us to gather feedback anonymously to prevent bias and reach a broad range of users. The survey was created on Google Forms and the results were analyzed using the visualizations provided. We also did a brief competitive analyses to look at similar applications such as Scoope, Waze and Uber
          </p>
          <p><b>Tools Used:</b> Google Forms</p><br></br>
          <h3>Results</h3><br></br>
          <br></br>
          <p><b>Safety</b><br></br>Our research showed that safety was a primary use concern. The survey results showed an interest in having background checks, reviews and ratings to help ensure a thorough screening for each member in the carpooling community. </p>
          <p><b>Preferences</b><br></br> Four out of five participants in our semi-structured interviews also suggested allowing users to choose their own preferences for their fellow carpoolers in order to set mutual expectations of each other. For example, one of the university students suggested drivers should clarify if smoking or eating in the car is allowed. </p>
          <p><b>Scheduling</b><br></br> Participants from both research methods expressed a concern for scheduling the carpool. They suggested live update for locations of their drivers along with a clear itinerary for the entire ride. Two of the working professionals in the semi-structured interviews explained that they would not want anyone in the group to have to wait during the ride and that the application should facilitate scheduling and communicating in some way.</p>
          <p><b>Carpooling is different for everyone</b><br></br> One importanting finding from our research was that people had different definitions of what a carpool entailed. One participant mentioned that they would only be a rider for the carpool while offering monetary compensation to the driver. Another suggested a routine where the driver and rider alternated roles. One off rides to special events were also brought up. Thus, we realized that our platform should allow all these different carpool structures to be implemented. </p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center", flexWrap: 'wrap'}}>
            <img src={require("../images/int/0.png")} style={{height: '40vh'}}></img>
            <img src={require("../images/int/1.png")} style={{height: '40vh'}}></img>
            <img src={require("../images/int/2.png")} style={{height: '40vh'}}></img>
            <img src={require("../images/int/3.png")} style={{height: '40vh'}}></img>

          </div>
        </article><br></br><hr></hr>
        <article>
          <h2>Task Requirements</h2> <br></br>
          <p>Using the findings from our research, we generated a list of required tasks that our design should enable:</p>
          <p><b>1. Finding carpoolers with compatible routes and preferences.</b><br></br> Finding people to carpool with who are not only geographically compatible with your target route but also compabitible with you ride preferences is a high priority of our design.
</p>
          <p><b>2. Communicating the location and status of the carpool.</b><br></br> This task was motivated by the participants indicating that scheduling and waiting for transportation were major pain points for them. Thus, we want our design to minimize the amount of waiting done by the carpoolers by providing clear updates on the status of the ride.
</p>
          <p><b>3. Monitoring driving behaviors to ensure the safety of carpoolers.</b> <br></br>  As safety was also was a concern amongst the vast majority of our participants, and we wanted our design to give people peace of mind when finding carpoolers and while they are in the ride.</p>
          <p><b>4. Seeing money/C02 emissions saved from carpooling.</b><br></br> The practical and environmental benefits of carpooling was a main motivating for many of our participants. For instance, one university student we interviewed mentioned they carpooled to reduce parking costs. By clearly showing these benefits to people, we can motivate them to carpool more frequently.</p>

        </article>
        <article>
          <h2>Initial Proposal</h2>
          <p>For our initial design proposal, we decided to focus on requirements <b>1</b> and <b>2</b> as they encompassed the most important functional aspects of our platform.
             We broke down these requirements into further subtasks.</p>
          <div id="imgmap">
            <img id="def" src={require('../images/proposal/default.jpg')} className="screen" style={{height: '70vh'}}></img>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-evenly'}} id="propstat">
              <p><b>1.1- Create profiles with ride preferences</b></p>
              <p><b>1.2- Search and match with others based on preferences</b></p>
              <p><b>2.1- Maintain a schedule of carpools</b></p>
              <p><b>2.2- Message and communicate with carpoolers</b></p>
              <p><b>2.3- Live navigation</b></p>
            </div>
          </div>
          <div id="mobproposal">
            <img src={require('../images/proposal/default.jpg')} style={{margin: 'auto', height:"40vh", width: 'auto'}}></img>
          </div>
        </article>
        <article>
        <article>
          <h2>Storyboards</h2>
          <p>We also created the following storyboards to represent what tasks 1 & 2 would entail in real-life scenarios</p>
          <p className="mobinst">(Rotate screen to landscape view to fit image.)</p>
          <div style={{transform: 'scale(0.8)'}}>
          <Carousel>
            <div>
              <img src={require("../images/slides/st1.png")} />
            </div>
            <div>
              <img src={require('../images/slides/st2.png')}  />
            </div>
          </Carousel>
          </div>
        </article>
        <h2>Information Architecture</h2>
        <p> Using the task requirements we were able to map out the information architecture of our first prototype. <br></br> The key screens corresponding to task requirements are colored <b style={{color: 'purple'}}>purple</b></p><br></br>
        <img onClick={() => setModalIsOpen2(true)} src={require('../images/infoarchitecture.png')} alt='poolbuddy information architecture' style={{width: '75vw', margin:'auto',  cursor: 'pointer'}} className="screen"></img>
        <Modal isOpen={modalIsOpen2}>
        <div style={{width: '100%', height: '100%'}} onClick={() => setModalIsOpen2(false)}>
          <img  onClick={() => setModalIsOpen2(false)} src={require('../images/infoarchitecture.png')} style={{maxWidth:'100vw', maxHeight: '100vh', position: 'absolute', left: '25vw'}}/>
        </div>
        </Modal>
        </article><br></br><hr></hr>
        <article>
          <h2>Paper Prototype</h2>
           <article>
           <p>This initial paper prototype was created in order to conduct usability tests for tasks 1 and 2.</p>
          <p>The screens below show how the prototype accomplishes each task with respect to the information architecture.</p>
          <h3>Task 1: Onboarding + Finding a Carpool</h3>
          <p><b>Onboarding</b></p>
          <img src={require("../images/onboarding.jpg")} alt="poolbuddy onborading paper" style={{maxHeight: '400px'}} className="screen"/>
          <p>The screens adove show the onboarding process for our prototype which invovles scanning your driver license for safety purposes and inputting your preferences.</p>
          <br></br>
          <p><b>1.1 - Create a ride</b></p>
          <br></br>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "flex-start", flexWrap: 'wrap'}}>
            <Screen img={require('../images/task1/0.png')} cap="1. Upcoming Rides Page"></Screen>
            <Screen img={require('../images/task1/1.png')} cap="2. Click Add Button"></Screen>
            <Screen img={require('../images/task1/2.png')} cap="3. Entering Ride Details"></Screen>
            <Screen img={require('../images/task1/3.png')} cap="4. Ride Page"></Screen>
          </div>
          <br></br>
          <p><b>1.2 - Find a carpooler</b></p>
          <br></br>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "flex-start", flexWrap: 'wrap'}}>
            <Screen img={require('../images/task1/4.png')} cap='5. Ride Page'></Screen>
            <Screen img={require('../images/task1/5.png')} cap='6. Clicking add rider button'></Screen>
            <Screen img={require('../images/task1/6.png')} cap='7. Friends Screen'></Screen>
            <Screen img={require('../images/task1/7.png')} cap='8. Adding Rider'></Screen>
          </div>
          <br></br>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "flex-start", flexWrap: 'wrap'}}>
            <Screen img={require('../images/task1/8.png')} cap='9. App Generated Rider List'></Screen>
            <Screen img={require('../images/task1/9.png')} cap='10. User approves rider'></Screen>
          </div>
           </article>
          <h3>Task 2: Communicating Live Updates</h3>
          <p><b>2.1 - Starting a Ride</b></p>
          <br></br>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "flex-start", flexWrap: 'wrap'}}>
            <Screen img={require('../images/task2/0.png')} cap='1. Notification on Lock Screen'></Screen>
            <Screen img={require('../images/task2/1.png')} cap='2. Clicking Ride Card'></Screen>
            <Screen img={require('../images/task2/2.png')} cap='3. Starting Ride'></Screen>
          </div>
          <p><b>2.2 - Navigation</b></p>
          <br></br>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "flex-start", flexWrap: 'wrap'}}>
            <Screen img={require('../images/task2/3.png')} cap='4. Live Navigation'></Screen>
            <Screen img={require('../images/task2/4.png')} cap='5. Clicking chat button'></Screen>
            <Screen img={require('../images/task2/5.png')} cap='6. Chat communication'></Screen>
          </div>
          <article></article>
        </article><br></br><hr></hr>
        <article>
          <h2>Evaluation + Usability Testing</h2>
          <p><b>Methods:</b> Heuristic Analysis & Usability Testing</p>
          <h3>Heuristic Analysis</h3>
          <h4>Protocol</h4>
          <p>For our heuristic analysis, each screen of our paper prototype was examined with respect to <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank">Nielsen's heuristics</a> by an evaluator. There were 2 evaluators, a student and TA from within our class. We classified each problem according to the heuristic violated and gave it a severity rating between 0-4 according to the following <a href="https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/" target="_blank">scale</a>.</p>
          <p>
            <ul><b>0</b> = I don't agree that this is a usability problem at all</ul>
            <ul><b>1</b> = Cosmetic problem only: need not be fixed unless extra time is available on project</ul>
            <ul><b>2</b> = Minor usability problem: fixing this should be given low priority</ul>
            <ul><b>3</b> = Major usability problem: important to fix, so should be given high priority</ul>
            <ul><b>4</b> = Usability catastrophe: imperative to fix this before product can be released</ul>
          </p>
          <h4>Findings</h4>
          <div>
            <p><b>1. Heuristic Violated: </b>Visibility of System Status</p>
            <p><b>Severity: </b>3</p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1.5em', flexWrap: 'wrap'}}>
              <Screen img={require('../images/findings/ha/0.jpg')} cap="Problem: No indication of scan status"></Screen>
              <img src={require("../images/arrow.svg")} className="arrow"></img>
              <Screen img={require('../images/findings/ha/1.png')} cap="Fix: Scan prompt"></Screen>
              <Screen img={require('../images/findings/ha/2.png')} cap="Scan preview"></Screen>
            </div>
          </div>
          <div>
            <p><b>2. Heuristic Violated: </b>Match between System & Real World</p>
            <p><b>Severity: </b>2</p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1.5em', flexWrap: 'wrap'}}>
              <Screen img={require('../images/findings/ha/3.png')} cap="Problem: Nav bar does not indicate current page"></Screen>
              <img src={require("../images/arrow.svg")} className="arrow"></img>
              <Screen img={require('../images/findings/ha/4.png')} cap="Fix: Icon descriptions + tab above current page"></Screen>
            </div>
          </div>
          <div>
            <p><b>3. Heuristic Violated: </b>Error Prevention</p>
            <p><b>Severity: </b>3</p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1.5em', flexWrap: 'wrap'}}>
              <Screen img={require('../images/findings/ha/5.png')} cap="Problem: Accidental press will send request"></Screen>
              <img src={require("../images/arrow.svg")} className="arrow"></img>
              <Screen img={require('../images/findings/ha/6.png')} cap="Fix: Confirmation prompt prior to sending request"></Screen>
            </div>
          </div>
          <p></p>
          <h3>Usability Testing</h3>
          <h4>Protocol</h4>
          <p>We counducted three usability tests and refined our paper prototype in between each test</p>
          <p><b>Participants</b></p>
          <p>University student with prior carpool experience who was interested in sharing her car</p>
          <p>A student from within this class who was interested in carpooling and knowledgeable about good design practices</p>
          <p>Working professional who was interested in carpooling as a rider to reduce her commute.</p>
          <p><b>Environment</b></p>
          <p>CSE Student Lounge / Sharetea Cafe which provide an open, casual setting for the user to simulate use of the prototype</p>
          <p><b>Roles</b></p>
          <p><b>Facilitator -</b> Guiding participant with scripts: Mengjiao/Nadir</p>
          <p><b>Computer -</b> Simulating the paper prototype for the partcipant: Perry</p>
          <p><b>Notetaker </b>- Noting down user comments and pain points: Rachel</p>
          <p><b>Recorder - </b>Video recording the test: Mengjiao/Nadir</p>
          <p><b>Introduction & Task Scripts</b></p>
          <p>We started by giving the participants the following introduction of our project and the test:</p>
          <p><i>“We are students in CSE working on designing an app to facilitate carpooling for the general public. Our goals are to provide a platform to organize carpools and help users build a network of reliable people to carpool with. Today we will be testing the effectiveness of our app in achieving these goals. We are not testing your ability to complete the tasks we set for you in any way, rather, we will be using our observations of your test in conjunction with the feedback you provide us to elicit areas of improvement in our design.”</i></p>
          <p><b>Task 1: Onboarding + Finding a Carpool</b></p>
          <p><i>“Imagine that you have relocated to a new city for a new job. You have decided to use our carpool app to share your new company car for carpooling as a way to save on expenses and make new friends. You would like to create an account and then use the app to set up a carpool. Since you have no friends in the area you would like to find a person to carpool with using the app.”</i></p>
          <p><b>Task 2: Starting Carpool + Communicating Updates</b></p>
          <p><i>”Now imagine that the time has come for you to start your carpool ride. As you are the driver, your phone alerts you that it is time to get going. Start your ride on the app and get driving. Make sure to message your partner your ETA halfway through your ride.”</i></p>
          <br></br>
          <h4>Findings</h4>
          <div>
            <p><b>1. Clarifying the roles of Riders and Drivers</b></p>
            <p><b>Severity: </b>4</p>
            <p>The most important finding from our testing was that their needed to be a clear distinction between creating a carpool as a driver and requesting a ride as a rider. Our solution was to clearly distinguish these roles by adding separate pathways for the driver and rider. The driver can create carpool rides and accept ride requests. The rider can request passage on existing rides and create ride requests</p> <br></br>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1.5em'}}>
              <Screen img={require('../images/findings/ut/0.png')} cap="Problem: The user's role is unclear when starting the carpool"></Screen>
              <img src={require("../images/arrow.svg")} className="arrow"></img>
              <Screen img={require('../images/findings/ut/1.png')} cap="Fix: User now has two paths to create a carpool with clear roles"></Screen>
            </div>
          </div>
          <div>
            <p><b>2. Simplified Process of Finding Riders</b></p>
            <p><b>Severity: </b>3</p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1.5em'}}>
              <Screen img={require('../images/findings/ut/3.png')}  cap="Problem: Add new friends function is unclear"></Screen>
              <img src={require("../images/arrow.svg")} className="arrow"></img>
              <Screen img={require('../images/findings/ut/4.png')} cap="Iteration 1: Clarified labels and clearer visual hiearchy"></Screen>
              <img src={require("../images/arrow.svg")} className="arrow"></img>
              <Screen img={require('../images/findings/ut/5.png')} cap="Iteration 2: Priority on suggested riders and separate function to add friends"></Screen>
            </div>
          </div>
          <div>
            <p><b>3. Safer and Simpler Communication while en route</b></p>
            <p><b>Severity: </b>4</p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1.5em'}}>
              <Screen img={require('../images/findings/ut/6.png')} cap="Problem: User suggested that supporting messaging while driving could be unsafe"></Screen>
              <Screen img={require('../images/findings/ut/7.png')} cap=""></Screen>
              <img src={require("../images/arrow.svg")} className="arrow"></img>
              <Screen img={require('../images/findings/ut/8.png')} cap="Fix: Replace with predetermined messages with important information such as ETAs that can be pressed and sent"></Screen>
            </div>
          </div>
        </article><br></br><hr></hr>
        <article>
          <h2>Digital Mockup</h2>
          <p>The digital mockup below was created on Marvel. It is fully interactive in order to prototype Tasks 1 & 2. The slides show the task flow for each screen of the mockup.</p>
          <br></br>
          <p><b>Tools Used:</b> Adobe XD, Marvel</p>
          <br></br>
          <div style={{display:'flex', justifyContent: 'center'}}>
          <iframe src="https://marvelapp.com/prototype/8ibh3db?emb=1&iosapp=false&frameless=false" width="453" height="864" allowTransparency="true" frameborder="0"></iframe>
          </div>
          <div style={{transform: 'scale(0.8)'}}>
          <Carousel>
            <div>
              <img src={require("../images/slides/0.png")}/>
            </div>
            <div>
              <img src={require("../images/slides/1.png")} />
            </div>
            <div>
              <img src={require("../images/slides/2.png")} />
            </div>
            <div>
              <img src={require("../images/slides/3.png")} />
            </div>
            <div>
              <img src={require("../images/slides/4.png")} />
            </div>
            <div>
              <img src={require("../images/slides/5.png")} />
            </div>
            <div>
              <img src={require("../images/slides/6.png")} />
            </div>
            <div>
              <img src={require("../images/slides/7.png")} />
            </div>
            <div>
              <img src={require("../images/slides/8.png")} />
            </div>
            <div>
              <img src={require("../images/slides/9.png")} />
            </div>
            <div>
              <img src={require("../images/slides/10.png")} />
            </div>
            <div>
              <img src={require("../images/slides/11.png")} />
            </div>
            <div>
              <img src={require("../images/slides/12.png")} />
            </div>
          </Carousel>
          </div>
        </article><br></br><hr></hr>
        <article>
          <h2>Reflection</h2>
          <p>Unfortunately the COVID-19 pandemic halted the last phase of our design plan for PoolBuddy. Our final design critiques, project video and project showcase were cancelled. Thus, we were unable to complete this project to its entirety and we missed valuable feedback from our peers that would have polished our idea further. Nevertheless, there were many learning experiences that I'd consider valuable to my journey as a designer.<br></br><br></br>

This was my first time working on a UX project with students who were not trying to go into UX. However,when we started this project, the team converged on a clear idea of what our carpooling platform would entail and I felt comfortable in our cohesiveness as a team. However, our research revealed all the different kinds of arrangements a carpool can take on, from paid, to structured to one off rides This was a valuable learning experience in that our problem space was more complex than we had initially imagined, however, it reaffirmed the importance of engaging in user research and getting direct feedback from our stakeholders to guide our solution. <br></br><br></br>

I am proud that we were able to accomplish the basic architecture for our matching system and scheduling system that accomodated a variety of carpool schedules. However, I would have liked to have put more time and research into studying how the benefits of carpooling can be visualized for our users as per the requirements we initially laid out.
</p>
        </article> <hr></hr>
        <br></br><h2 style={{margin: 'auto'}}>Thank You for Reading !</h2><br></br><br></br>
      </body>
      </div>
        
    )
}

export default Poolbuddy;