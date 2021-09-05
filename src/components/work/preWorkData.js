import React from 'react'

const preWorkData = 
    [
        {
            title:"Ericsson R&D Internship",
            subtitle: "Full-stack Development in Typescript, React & Angular. UI design. UX research. ",
            images: [
                {
                    source: "ericsson.png",
                    caption: "My Internship at Ericsson"
                },
                {
                    source: "ericsson2.png",
                    caption: "A big part of my job was to talk to users, find their pain points, turn the pain points into design suggestions, develop those, and then test those on the user."
                }
                ],
            infoShort:"As a Research & Development Intern at Ericsson my mission was to create a proof-of-concept for a new internal application. My job consisted of full-stack development in Typescript, React & Angular. I was also solely responsible for all the UX-research and the UI-design.",
            infoLong:"As a Research & Development Intern at Ericsson my mission was to create a proof-of-concept for a new internal application. My job consisted of full-stack development in Typescript, React & Angular. I was also solely responsible for all the UX-research and the UI-design.",
            links: [
            ],
            linktext: ""
        },
        
        {
            title:"SPP Software Development Internship",
            subtitle: "Front-end development in React, Typescript & Less. UI design. UX research.",
            images: [
                {
                    source: "sandbox.jpg",
                    caption: ""
                },
                {
                    source: "sandbox2.png",
                    caption: ""
                },
                {
                    source: "sandbox3.png",
                    caption: ""
                },
                {
                    source: "sandbox4.png",
                    caption: ""
                },
                {
                    source: "sandbox5.png",
                    caption: ""
                },
                ],
            infoShort:"During the summer of 2020 I was a part of  SPP’s Sandbox Summer Internship. Together with four other students we delivered an MVP, focusing on helping people close to retirement make good choices. The project included research, user-testing and development. My contribution was centered around the development and designing the user interface. The product was built in React, Typescript, Less, d3 and Material UI.",
            infoLong:"During the summer of 2020 I was a part of  SPP’s Sandbox Summer Internship. Together with four other students we delivered an MVP, focusing on helping people close to retirement make good choices. The project included research, user-testing and development. My contribution was centered around the development and designing the user interface. The product was built in React, Typescript, Less, d3 and Material UI.",
            links: [],
            linktext: ""
        },
        {
            title:"Smarty Pantz",
            subtitle:"Full-stack development with React, Spotify’s API & Cloud Firestore. UI design.",
            images: [
                {
                    source: "smartypantz.png",
                    caption: "The landing page"
                },
                {
                    source: "smartypantz2.png",
                    caption: "Playing in EDM mode"
                },
                {
                    source: "smartypantz3.png",
                    caption: "Playing in Hip-Hop mode"
                },
                {
                    source: "smartypantz4.png",
                    caption: "Highscore view."
                },
                {
                    source: "smartypantz5.png",
                    caption: "This talented player got it right in Rock-mode"
                },
                {
                    source: "smartypantz6.png",
                    caption: "Playing in classic mode"
                },
                {
                    source: "smartypantz7.png",
                    caption: "If a user makes it to the highscore confetti appears! :D"
                },
                ],
            infoShort:<div>Smarty Pantz is a game that tests your knowledge on music in different categories. The game is played on the web, and built in React, HTML and CSS with Spotify’s API and the Baas Cloud Firestore.
                The game was built as a part of the course <i>DH2642 Interaction Programming and the Dynamic Web</i> at KTH. Besides development, I also did the user interface design. Click the link below to play the game - and find out if you are the smartest of Smarty Pantz… or just a dumb sock.</div>,
            infoLong:<div>Smarty Pantz is a game that tests your knowledge on music in different categories. The game is played on the web, and built in React, HTML and CSS with Spotify’s API and the Baas Cloud Firestore.
                The game was built as a part of the course <i>DH2642 Interaction Programming and the Dynamic Web</i> at KTH. Besides development, I also did the user interface design. Click the link below to play the game - and find out if you are the smartest of Smarty Pantz… or just a dumb sock.</div>,
            links: [
                {
                    name: "LIVE DEMO: Play the game!",
                    url: "https://smartypantz-c6131.firebaseapp.com/"
                },
                {
                    name: "Github Repository",
                    url: "https://github.com/jsimfors/smartyPantzGame"
                },
            ],
            linktext: "LIVE DEMO: Play the game!"
        },
        {
            title:"Vistics - Visualize Statitics",
            subtitle: "UI design & full-stack development in Flutter with two REST APIs",
            images: [
                {
                    source: "vistics.png",
                    caption: ""
                },
                {
                    source: "vistics2.png",
                    caption: ""
                },
                {
                    source: "vistics3.png",
                    caption: ""
                },
                {
                    source: "vistics4.png",
                    caption: ""
                },
                ],
            infoShort: "Vistics is a Flutter app, built solely by me, that visualizes different types of data, both through graphs and colour coded maps. The user can customize their call to the API directly in the UI, to display different types of data, in many different ways. The app is written in Dart and uses two different REST APIs. It's is not a part of any University course or previous work, just something I've worked with in my spare time because I think data visualization is really interesting. Please check out the Github Repository for more information about this project.",
            infoLong: "Vistics is a Flutter app, built solely by me, that visualizes different types of data, both through graphs and colour coded maps. The user can customize their call to the API directly in the UI, to display different types of data, in many different ways. The app is written in Dart and uses two different REST APIs. It's is not a part of any University course or previous work, just something I've worked with in my spare time because I think data visualization is really interesting. Please check out the Github Repository for more information about this project.",
            links: [
                {
                    name: "Github Repository",
                    url: "https://github.com/jsimfors/covid-tracker",
                },
            ],
            linktext: "Link to repository"
        },
        {
            title:"The Card Game",
            subtitle: "UI design & full-stack development in React, CSS & Cloud Firestore",
            images: [
                {
                    source: "thecardgame.png",
                    caption: ""
                },
                {
                    source: "thecardgame2.png",
                    caption: ""
                },
                {
                    source: "thecardgame3.png",
                    caption: ""
                },
                {
                    source: "thecardgame4.png",
                    caption: ""
                },
                ],            
            infoShort:"The Card Game is a web based game, built by me and one more student, with the purpose to conduct user studies for our Bachelor Thesis in Media Technology. It was based around the question “How does the degree of anonymity affect our morals?”. The website was built in React, CSS, and with the Baas Cloud Firestore. Besides development, I also did the user interface design.",
            infoLong:"The Card Game is a web based game, built by me and one more student, with the purpose to conduct user studies for our Bachelor Thesis in Media Technology. It was based around the question “How does the degree of anonymity affect our morals?”. The website was built in React, CSS, and with the Baas Cloud Firestore. Besides development, I also did the user interface design.",
            links: [
                {
                    name: "Live Demo",
                    url: "https://bit.ly/thecardgame",
                },
                {
                    name: "Read the Report",
                    url: "http://www.diva-portal.org/smash/get/diva2:1440921/FULLTEXT01.pdf",
                },
            ],
            linktext: "LIVE DEMO"
        },
        {
            title:"FindTheDrink",
            subtitle: "Mobile based full-stack development in React Native, CSS, Google-Maps-React, Systembolaget’s API & Cloud Firestore",
            images: [
                {
                    source: "findthedrink.png",
                    caption: ""
                },
                {
                    source: "findthedrink2.png",
                    caption: ""
                },
                {
                    source: "findthedrink3.png",
                    caption: ""
                },
                {
                    source: "findthedrink4.png",
                    caption: ""
                },
                ], 
            infoShort:<div>Find The Drink is a mobile-based web app that focuses on the user's GPS position and device orientation. The app finds the user’s position, and suggests a random beverage from the inventory of the closest Systembolag. If the user wants another suggestion they have to point their phone in a different cardinal direction, suggested by the app. 
                The app was built with React Native, Google-Maps-React, Systembolaget’s API and the Baas Cloud Firestore. It was build as a part of the course <i>DM2518 Mobile Development with Web Technologies</i> at KTH</div>,
            infoLong:<div>Find The Drink is a mobile-based web app that focuses on the user's GPS position and device orientation. The app finds the user’s position, and suggests a random beverage from the inventory of the closest Systembolag. If the user wants another suggestion they have to point their phone in a different cardinal direction, suggested by the app. 
            The app was built with React Native, Google-Maps-React, Systembolaget’s API and the Baas Cloud Firestore. It was build as a part of the course <i>DM2518 Mobile Development with Web Technologies</i> at KTH</div>,
            links: [
                {
                    name: "Live Demo",
                    url: "https://findthedrink.web.app/",
                },
                {
                    name: "Github Repository",
                    url: "https://github.com/jsimfors/findthedrink",
                },
                {
                    name: "Read the Report",
                    url: "https://drive.google.com/file/d/14kcdRXlzi6JDINGcm2fKhwDzrOW-5ptO/view?usp=sharing",
                },
            ],
            linktext: "LIVE DEMO"
        },
        {
            title:"The Big Coffee Adventure",
            subtitle: "Full-stack development in PHP, XML, CSS, SQL & phpMyAdmin",
            images: [
                {
                    source: "coffee.png",
                    caption: ""
                },
                {
                    source: "coffee2.png",
                    caption: ""
                },
                {
                    source: "coffee3.png",
                    caption: ""
                },
                {
                    source: "coffee4.png",
                    caption: ""
                },
                {
                    source: "coffee5.png",
                    caption: ""
                },
                {
                    source: "coffee6.png",
                    caption: ""
                }
            ], 
            infoShort:<div>On the XML-based website <i>The Big Coffee Adventure</i> the user can learn about all the coffee availabel at KTH-Campus, and also rate it based on their own experience. The page includes a possibility to log-in and to search for a specific place. The data is retrieved from the MySQL-based database phpMyAdmin. The website was built as a part of the course <i>DM2517 XML for Publishing</i> at KTH</div>, 
            infoLong:<div>On the XML-based website <i>The Big Coffee Adventure</i> the user can learn about all the coffee availabel at KTH-Campus, and also rate it based on their own experience. The page includes a possibility to log-in and to search for a specific place. The data is retrieved from the MySQL-based database phpMyAdmin. The website was built as a part of the course <i>DM2517 XML for Publishing</i> at KTH</div>, 
            toolsUsed: ["Typescript", "React", "Angular", "CSS", "ESLint"],
            myResp: ["Job 1", "Job 2", "Job 3"],
            links: [
                {
                    name: "Live Demo",
                    url:"https://bit.ly/coffeedataphp",
                },
                {
                    name: "Github Repository",
                    url: "https://github.com/jsimfors/theCoffeeAdventure",
                },
                {
                    name: "Read the Report",
                    url: "https://drive.google.com/file/d/1kMaZulhaHPH65tGQdZY0rAc_pITn0GOa/view?usp=sharing",
                },
            ],
            linktext: ""
        },  
        {
            title:"Math-app",
            subtitle: "UI design & full-stack development in React, Material UI & CSS",
            images: [
                {
                    source: "mathnotes.png",
                    caption: ""
                },
                {
                    source: "mathnotes2.png",
                    caption: ""
                },
                {
                    source: "mathnotes3.png",
                    caption: ""
                },
                {
                    source: "mathnotes4.png",
                    caption: ""
                },
                {
                    source: "mathnotes5.png",
                    caption: ""
                },
                {
                    source: "mathnotes6.png",
                    caption: ""
                },
                {
                    source: "mathnotes7.png",
                    caption: ""
                },
                {
                    source: "mathnotes8.png",
                    caption: ""
                },
            ], 
            infoShort:"A website I built to easier distribute material in my work as an assistant at the Department of Mathematics, KTH. I usually make custom formula sheets for all my classes, and like to upload my notes afterwards, to make sure my students have the best possible conditions to understand and pass their exams. (You can read more about my work as a teaching assistant in the Math section.)",
            infoLong:"A website I built to easier distribute material in my work as an assistant at the Department of Mathematics, KTH. I usually make custom formula sheets for all my classes, and like to upload my notes afterwards, to make sure my students have the best possible conditions to understand and pass their exams. (You can read more about my work as a teaching assistant in the Math section.)",
            toolsUsed: ["Typescript", "React", "Angular", "CSS", "ESLint"],
            myResp: ["Job 1", "Job 2", "Job 3"],
            links: [
                {
                    name: "Live Demo",
                    url: "https://kthmatte.web.app",
                },
                {
                    name: "Github Repository",
                    url: "https://github.com/jsimfors/mathnotes",
                },
            ],
            linktext: "LIVE DEMO"
        },
        // {
        //     title:"This Portfolio",
        //     subtitle: "UI design & full-stack development in React, Material UI & CSS",
        //     images: [
        //         {
        //             source: "portfolio.png",
        //             caption: ""
        //         }
        //     ], 
        //     infoShort:"A website I built to easier distribute material in my work as an assistant at the Department of Mathematics, KTH. I usually make custom formula sheets for all my classes, and like to upload my notes afterwards, to make sure my students have the best possible conditions to understand and pass their exams. (You can read more about my work as a teaching assistant in the Math section.)",
        //     infoLong:"A website I built to easier distribute material in my work as an assistant at the Department of Mathematics, KTH. I usually make custom formula sheets for all my classes, and like to upload my notes afterwards, to make sure my students have the best possible conditions to understand and pass their exams. (You can read more about my work as a teaching assistant in the Math section.)",
        //     toolsUsed: ["Typescript", "React", "Angular", "CSS", "ESLint"],
        //     myResp: ["Job 1", "Job 2", "Job 3"],
        //     links: [
        //         {
        //             name: "Github Repository",
        //             url: "https://github.com/jsimfors/portfolio",
        //         },
        //     ],
        //     linktext: ""
        // }      
    ]

  export default preWorkData;