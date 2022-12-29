import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(154, 44, 126)", "rgb(230, 40, 42)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */
//rgb(58, 240, 8), rgb(125, 93, 145)

//"rgb(0,255,164)", "rgb(166,104,255)"
//rgb(154, 44, 126), rgb(230, 40, 42

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Inessa",
    lastName: "Petrova",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'based in the Israel'
        },
        {
            emoji: "📧",
            text: "inessa.petrova1906@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Inessa88",
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
            frontEnd: ['javascript', 'react', 'bootstrap', 'html5', 'css3', 'dom'],
            backEnd: ['nodejs', 'express', 'postgresql', 'python 3', 'odoo'],
            tools: ['git', 'gitHub', 'vscode']
        }

    ,
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
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Gluten-Free Guide",
            live: "https://gfguide-fp.onrender.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Inessa88/gfguide-fp", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Quote Generator",
            live: "https://paytonpierce.dev",
            source: "https://github.com/Inessa88/DI_Bootcamp/tree/main/Week8/Day5/Mini-project/quotes",
            image: mock2
        },
        {
            title: "To do List",
            live: "https://paytonpierce.dev",
            source: "https://github.com/Inessa88/DI_Bootcamp/tree/main/Week8/Day5/Mini-project2/todo",
            image: mock3
        },
        {
            title: "Search Book App",
            live: "https://paytonpierce.dev",
            source: "https://github.com/Inessa88/DI_Bootcamp/tree/main/Week10/Day4/Mini-project/search-book",
            image: mock4
        }

    ]
}