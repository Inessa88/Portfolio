import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Front End</p>
            <ul className={Style.skills}>
                {info.skills.frontEnd.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Back End</p>
            <ul className={Style.skills}>
                {info.skills.backEnd.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Tools</p>
            <ul className={Style.skills}>
                {info.skills.tools.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function educationText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd education
            </p>
            <p><span style={{color: info.baseColor}}>education <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Israel</p>
            <ul className={Style.education}>
                {info.education.israel.map((array, index) => <li key={index}>{array}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Self-education</p>
            <ul className={Style.education}>
                {info.education.self.map((array, index) => <li key={index}>{array}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Belarus</p>
            <ul className={Style.education}>
                {info.education.belarus.map((array, index) => <li key={index}>{array}</li>)}
            </ul>
        </>;
    }
    function experienceText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd experience
            </p>
            <p><span style={{color: info.baseColor}}>experience <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> 2022</p>
            <ul className={Style.experience}>
                {info.experience.latest.map((array, index) => <li key={index}>{array}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> 2020-2021</p>
            <ul className={Style.experience}>
                {info.experience.before.map((array, index) => <li key={index}>{array}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> 2011-2020</p>
            <ul className={Style.experience}>
                {info.experience.previous.map((array, index) => <li key={index}>{array}</li>)}
            </ul>
        </>;
    }
    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={educationText()}/>
            <Terminal text={experienceText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}