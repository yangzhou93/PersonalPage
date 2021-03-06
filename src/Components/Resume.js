import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { IconContext } from "react-icons";
import { FaAngular,FaGithub,FaReact,FaPython,FaNodeJs,} from 'react-icons/fa';
import {SiJavascript,SiDjango,SiMongodb,SiPostgresql,SiCss3,SiHtml5} from "react-icons/si";
class Resume extends Component {
  iconSelecter = (skillName) => {
    switch(skillName){
      case 'Git':
        return <FaGithub />
      case 'JavaScript':
        return <SiJavascript />

      case 'Python':
        return <FaPython />

      case 'React':
        return <FaReact />

      case 'Angular':
        return <FaAngular />

      case 'Node.js':
        return <FaNodeJs />

      case 'Django':
        return <SiDjango />

      case 'MongoDB':
        return <SiMongodb />

      case 'SQL':
        return <SiPostgresql />

      case 'CSS':
        return <SiCss3 />

      case 'HTML':
        return <SiHtml5 />

    }
  }
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p><ReactMarkdown plugins={[gfm]} children={education.description} /></p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map((skill) => {
        var className = 'bar-expand '+skill.name.toLowerCase();
        return <li key={skill.name}><span style={{width:skill.level}}className={className}></span><em>{skill.name} {this.iconSelecter(skill.name)}</em></li>
      })
    }

    return (
      <IconContext.Provider value={{ color: "cornflowerblue", size: '2em', className: 'react-icons'}}>
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
   </IconContext.Provider>
    );
  }
}

export default Resume;
