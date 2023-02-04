import self from "../img/self.png"
import photo1 from "../img/photo1.png"
import photo2 from "../img/photo2.png"
import photo3 from "../img/photo3.png"
import photo4 from "../img/photo4.png"



export let colors = ["rgb(154, 44, 126)", "rgb(230, 40, 42)"];

//rgb(58, 240, 8), rgb(125, 93, 145)
//"rgb(0,255,164)", "rgb(166,104,255)"
//rgb(154, 44, 126), rgb(230, 40, 42
//"rgb(0,255,164)", "rgb(166,104,255)"



export const info = {
    firstName: "Inessa",
    lastName: "Petrova",
    initials: "", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'based in Israel'
        },
        {
            emoji: "📧",
            text: "inessa.petrova1906@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Inessa88/gfguide-s3",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/inessa-petrova",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }


    ],
    bio: "Aspiring JavaScript developer with former wide experience in business, has modern toolkit usage experience, took part in all steps of software development life cycle. Eager to learn and to create effective customer-oriented solutions on new projects.",
    skills:
        {
            frontEnd: ['javascript', 'react', 'bootstrap', 'redux', ' typescript', 'html5', 'css3', 'dom'],
            backEnd: ['nodejs', 'express', 'postgresql', 'mongoDB', 'python 3', 'odoo'],
            tools: ['git', 'command line', 'vscode']
        },
    education:
    {
        israel: ['Developers Institute, TLV Coding Bootcamp: Full Stack Web Development, JavaScript program, 2022'],
        self: ['Multiple courses on codecademy.com, edx.com, khanacademy.org etc., 2020-2022'],
        belarus: ['BSs in "Marketing" and "Banking", graduated with honors, 2006-2012']
    },
    experience:
    {
        latest: ['Multiple projects within the studies in Developers Institute using JavaScript, React, Redux, PostgreSQL, Node JS, etc., TLV Coding Bootcamp, self-education'],
        before: ['Self-employed with projects as Python web developer on Odoo 13 and 14 “Learning Hebrew" App and "Home Accounting" App'],
        previous: ['Procurement specialist/Business owner (in government and private sector companies)']
    },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'dancing',
            emoji: '💃🏻'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'bicycle',
            emoji: '🚴🏻‍♀️'
        }
    ],
    portfolio: [ 
        {
            title: "Gluten-Free Guide",
            live: "http://ec2-174-129-62-222.compute-1.amazonaws.com/map", 
            source: "https://github.com/Inessa88/gfguide-s3", 
            image: photo1
        },
        {
            title: "Hackathon Project 'Movie Chooser'",
            live: "https://gfguide-fp.onrender.com/",
            source: "https://github.com/Inessa88/Hackathon_DI",
            image: photo2
        },
        // {
        //     title: "To do List",
        //     live: "https://gfguide-fp.onrender.com/",
        //     source: "https://github.com/Inessa88/DI_Bootcamp/tree/main/Week8/Day5/Mini-project2/todo",
        //     image: photo3
        // },
        // {
        //     title: "Search Book App",
        //     live: "https://gfguide-fp.onrender.com/",
        //     source: "https://github.com/Inessa88/DI_Bootcamp/tree/main/Week10/Day4/Mini-project/search-book",
        //     image: photo4
        // }

    ]
}