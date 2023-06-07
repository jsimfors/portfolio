import React from 'react'


const preWorkData  = 

[
    {
        title:"Swift Event Finder",
        subtitle: "TBC ",
        images: [
            {
                source: "tbc.png",
                caption: "TBC"
            }
            ],
        infoShort:<div>
        tbc
            </div>,
        infoLong:
        <div> tbc </div>,
        links: [
        ],
        linktext: ""
    },
    {
        title:"Master Thesis",
        subtitle: "Full-stack Development in Typescript, Sass, React Native UI design. UX research. ",
        images: [
            {
                source: "tbc.png",
                caption: "TBC"
            }
            ],
        infoShort:<div>
        tbc
            </div>,
        infoLong:
        <div> tbc </div>,
        links: [
        ],
        linktext: ""
    },
    {
        title:"Voice controlled Game on the Furhat Robot",
        subtitle: "Built in Kotlin with the Furhat SDK.",
        images: [
            {
                source: "furhat1.png",
                caption: "Image of two Furhat robots"
            },
            {
                source: "furhat2.png",
                caption: "Screenshot from the trailer to the game"
            },
            {
                source: "furhat3.png",
                caption: "Screenshot from the trailer to the game"
            },
            {
                source: "furhat4.png",
                caption: "Part of the planning of the game, made in Miro"
            }
            ],
        infoShort:<div>
        Murder Mysery is a multimodal cluedo-inspired game based on speech recognition. The player talks to different characters displayed on the Furhat robot, and tries to find out who is the murderer.  The actions, phrases and facial expressions of the robot throughout the game is based on the latest research within multimodal interaction and lie detection.A user study was also performed to evaluate the naturalness of these expressions, and if they affected the robots trustworthiness. 
            </div>,
        infoLong:
        <div>This project consists of two parts, firstly, the multimodal cluedo-inspired game based on speech recognition. Where a player talks to different characters displayed on the Furhat robot, and tries to find out who is the murderer. Sounds complex? Check out the video linked below the get to the trailer!

        The second part of the project was a user study. The action, phrases and facial expressions of the robot throughout the game was actually based on the latest research within multimodal interaction and lie detection. It was investigated whether and how non-verbal cues and different sentence structures can impact the perceived pleasantness and naturalness in interactions with a virtual agent, and how facial gestures can be used to make a robot seem more or less trustworthy. Through interviews conducted with four participants, qualitative data were also generated. Results suggest that some non-verbal cues, such as facial gestures, sometimes affect the perceived trustworthiness of the interaction. It was easier for the participants to decide whether they thought of the virtual agent as trustworthy when the facial gestures were more enhanced. </div>,
        links: [
            {
                name: "See the trailer",
                url: "https://drive.google.com/file/d/1_eamvoXp1FuLZ4WXzg1GqdJsbGW1B8dT/view?usp=sharing"
            },
            {
                name: "Github Repository",
                url: "https://github.com/annagustavsson/cluedo",
            },
            {
                name: "Read the report",
                url: " https://drive.google.com/file/d/1szyGjrrile3x5nudOOdQwAeV_bKcTvMk/view?usp=sharing",
            },
        ],
        linktext: "See the trailer"
    },
    {
        title:"The Startender",
        subtitle: "User interface design &  full-stack development in React Typescript, Sass, mongoDB, Node.js, Express & The Cocktail DB",
        images: [
            {
                source: "startender_land_dark.png",
                caption: "The landing page in dark mode"
            },
            {
                source: "startender_land_light.png",
                caption: "The landing page in light mode"
            },
            {
                source: "startender11.png",
                caption: "The tech stack we used"
            },
            {
                source: "startender4.png",
                caption: "Searching for a drink"
            },
            {
                source: "startender8_light.png",
                caption: "Modal of a drink, shown in light mode"
            },
            {
                source: "startender8.png",
                caption:  "Modal of a drink, shown in dark mode"
            },
            {
                source: "startender13.png",
                caption: "The page is also fully mobile responsive"
            },
            {
                source: "startender6.png",
                caption: "This user has written an insightful comment about the 'Coffee with Aquavit'"
            },
            {
                source: "startender10.png",
                caption: "My-page shows all the comments and favorite drinks of the logged-in user"
            },
            {
                source: "startender12.png",
                caption: "For this project we chose an agile way of working, where we had three shorter sprints. The work was managed through Git and an interactive schedule in Miro"
            },
            ],
        infoShort: <div>
            <i>The Startender</i> is is your new digital bartender! This web-based application lets you browse through hundreds of cocktails and learn how to 
            make them. Just tell the Startender what you're craving today!
            You can set up your own account, start commenting on drinks and save your favorites.
            The frontend is built in React Typescript, Sass, Bootstrap and Redux Thunk and follows a MVC-code structure. 
            The backend is build with Node.js, Express, mongoDB and <a href="https://www.thecocktaildb.com/">the Cocktail DB</a>. 
        </div>,
        infoLong:  <div>
        <i>The Startender</i> is is your new digital bartender! This web-based application lets you browse through hundreds of cocktails and learn how to 
        make them. Just tell the Startender what you're craving today!
        You can set up your own account, start commenting on drinks and save your favorites.
        The frontend is built in React Typescript, Sass, Bootstrap and Redux Thunk and follows a MVC-code structure. 
        The backend is build with Node.js, Express, mongoDB and <a href="https://www.thecocktaildb.com/">the Cocktail DB</a>. 
        The website is hosted at Heroku for the backend, and Netlify for the frontend.
        This project was created as a part of the course <i>DH2643 Advanced Interaction Programming</i>. We were a group of 4 students. 
        In this project we had a big focus on pair programming and solving bugs together. So I have been involved in most different parts of the process.
        From backend, to front-end to user interface design. Two things I was solely responsible for was however the header image of the Startender himself, 
        and the dark-mode feature which is built in Sass Themes integrated with Redux. To managed all this work we used Miro, to set up a preliminary timeline, 
        as well as divide responsibilities for different parts of the process early. 
        <br />
        <br />
        <b>My responsibilities:</b>
        <ul>
            <li>
                Deployment of backend (Made with Heroku)
            </li>
            <li>
                Deployment of frontend (Made with Netlify)
            </li>
            <li>
                Connecting the <a href="https://www.thecocktaildb.com/">the Cocktail DB</a> API.
            </li>
            <li>
                Redux &amp; Redux-thunk. I was responsible for the set up with Redux and Redux-thunk. Which included creating the Store, all reducers and actions. 
            </li>
            <li>
                Dark Mode Feature - built with Sass Themes(), and integrated in the app through Redux, with it's own dark-theme-reducer. 
            </li>
            <li>
                User Interface Design, which included everything regarding Sass, and also the header-image illustration you see on the landing page. Which I drew in Adobe Illustrator.
            </li>
            <li>
                An ongoing theme for this project was however pair-programming, so I have been very involved in other parts of the process as well. Just not solely responsible. Such as setting up and working the MongoDB, NodeJS and Express.
            </li>
        </ul>
    </div>,
         links: [
            {
                name: "Visit the website",
                url: "https://startender.netlify.app/"
            },
            {
                name: "Github Repository",
                url: "https://github.com/DH2643-Group10/startender",
            },
        ],
        linktext: "Visit the website"
    },
    {
    title:"Ericsson Research & Development Internship",
    subtitle: "Full-stack Development in Typescript, Sass, React & Angular. UI design. UX research. ",
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
    infoShort:<div>
        During the summer of 2021 I was an <i>Research &amp; Development Intern</i> at Ericsson. My mission was to create a proof-of-concept and improve an existing internal application. 
        The page was functioning, but built in AngularJS, and followed an old graphical profile. 
        I rebuilt the page in both React Typescript and Angular, and investigated what worked the best.
        My job also consisted of user experience research and user interface design.
        </div>,
    infoLong:
    <div>
        During the summer of 2021 I was an <i>Research &amp; Development Intern</i> at Ericsson. My mission was to create a proof-of-concept and improve an existing internal application. 
        The page was functioning, but built in AngularJS, and followed an old graphical profile. 
        I rebuilt the page in both React Typescript and Angular, and investigated what worked the best.
        My job also consisted of user experience research and user interface design. 
        The UX research was mostly in-depth interviews and think out loud's with the current users of the application.
        The interface design was centered around Figma, Miro and then implemented to the page with Sass.
        </div>,
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
    infoShort:<div>
        During the summer of 2020 I was a part of  <i>SPP’s Sandbox Summer Internship</i>. Together with four other students we delivered an MVP, 
        focusing on helping people close to retirement make good choices. The project included research, user-testing and development.
        My contribution was centered around the development and designing the user interface. The product was built in React, Typescript, 
        Less, d3 and Material UI</div>,
    infoLong:<div>
    During the summer of 2020 I was a part of  <i>SPP’s Sandbox Summer Internship</i>. Together with four other students we delivered an MVP, 
    focusing on helping people close to retirement make good choices. The project included research, user-testing and development.
    My contribution was centered around the development and designing the user interface. The product was built in React, Typescript, 
    Less, d3 and Material UI</div>,
    links: [],
    linktext: ""
},
    {
        title:"Smarty Pantz",
        subtitle:"User interface design & full-stack development in React, Javascript, Spotify Web API & Cloud Firestore",
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
        infoShort:<div>
            Smarty Pantz is a game built with the Spotify Web API 😍  This game tests your knowledge on music in different categories, with the help of the
            API's popularity attribute. The game is played on the web, and built in React, CSS, and the Baas Cloud Firestore.
            Click the link below to play the game - and find out if you are the smartest of Smarty Pantz… 
            or just a dumb sock.</div>,
        infoLong: <div>
            Smarty Pantz is a game built on the Spotify Web API 😍 This game tests your knowledge on music in different categories, and you
            get questions regarding both tracks and artist. 
            The game is played on the web, and built in React, HTML and CSS. To store all data we used the Baas Cloud Firestore. 
            The game was built as a part of the course <i>DH2642 Interaction Programming and the Dynamic Web</i> at KTH. We were a team of four people.
            Besides development, I also did all of the user interface design (psst! there is a different theme for every category, check it out!)
            Click the link below to play the game - and find out if you are the smartest of Smarty Pantz… 
            or just a dumb sock.</div>,
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
        title:"CandyChess",
        subtitle: "Java based game mixing chess and Candy Crush",
        images: [
            {
                source: "candychess.png",
                caption: ""
            },
            {
                source: "candychess0.png",
                caption: "Initial setup of game. The message at the bottom keeps track of who's turn it is."
            },
            {
                source: "candychess1.png",
                caption: "When clicking a piece, possible positions to go to lights up as green on the board. The user can not choose any position other than these"
            },
            {
                source: "candychess2.png",
                caption: "When one of opponents pieces has been eaten - the message field will update what just happened. Followed by a randomly generated word from the Candy Crush dictionary, such as Divine! Tasty! or why not, Sugar Crushing it!"
            },
            {
                source: "candychess3.png",
                caption: "The game keeps track of when a player has been checked. Yep, that multi-colored sugar sprinkled chocolate ball is indeed the king."
            },
            {
                source: "candychess4.png",
                caption: "And will not let the user make any silly moves when their Candy King is in danger."
            },
            {
                source: "candychess5.png",
                caption: "If a brave Candy Fish, also known as a pawn, makes it all the other way to the other side of the board, it will turn into a juicy gummy bear - also known as a queen."
            },
            {
                source: "candychessuml.png",
                caption: "Java Class-UML Diagram of program"
            },
        ], 
        infoShort:"A sweet Java based game built solely by me: a mashup between chess and Candy Crush. Two users play together on this smart game board. The board keeps track of who's turn it is, where it is ok to move pieces and when there is check mate. The board will even stop any silly moves that puts a user's own king in danger.",
        infoLong:<div>
            A java based game built solely by where Chess meets Candy Crush, built as a part of the course DD1385 Software Engineering. On this smart game board two users can play, and the program keeps track of who's turn it is, where it is ok to move pieces, when there is check mate or when the king is in danger.
            <br/><br/>
            <h3>Project Structure</h3><br/>
            <i>UML-diagram available in the image carousel above</i><br/>
            <b>Game Logic:</b><br/>
            <ul>
                <li>
                The main game logic takes place in the Chess class. This class also implements the BoardGame interface.
                </li>
                <li>
                The abstract class Piece, contains all the logic for all the different chess pieces.
                </li>
                <li>
                The classes King, Queen, Knight, Bishop, Rook and Pawn then extends the Piece class. The Pawn also has it's own special move class, for the special move-logic that comes with being a pawn.
                </li>
                <li>
                The class PiecePosition knows everything about a certain position on the board.
                </li>
                <li>
                The User class handles all the logic regarding the two users playing the game. Such as what color they are, what pieces they have left, and if the are checked.
                </li>
            </ul>
            <b>View:</b><br/>
            <ul>
                <li>
                The class ViewControl takes care of the front-end. It extends JFrame and implements the interface ActionListener. When initialized, it creates a JFrame with an JPanel and adds 64 objects of the Square class to it.
                </li>
                <li>
                The class Square is our second, very important, front-end class. It extends JButton, and keeps track of the front-end for a specific square on the board. Such as, what color the square is, and if it should display an image of a candy piece.
                </li>
            </ul>
        </div>,
         toolsUsed: ["Java"],
        myResp: ["Job 1", "Job 2", "Job 3"],
        links: [
            {
                name: "Github Repository",
                url: "https://github.com/jsimfors/candy-chess",
            },
        ],
        linktext: ""
    },
    {
        title:"Vistics - Visualize Statitics",
        subtitle: "User interface design & full-stack development in Dart & Flutter with two REST APIs",
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
        infoShort: <div>
            <i>Vistics</i> is a Flutter app, built solely by me, that visualizes different types of data through both graphs and colour coded maps.
            The user can customize their call to the API directly in the UI to display different types of data.
            The app is written in Dart and uses two different REST APIs. <i>Vistics</i> is not a part of any university course or previous work, 
            just something I've worked with in my spare time because I think data visualization is really interesting. And hey, I thought it was
            really about time to learn more about Dart and Flutter. 
            Please check out the Github Repository for more information about this project.</div>,
        infoLong: <div>
        <i>Vistics</i> is a Flutter app, built solely by me, that visualizes different types of data through both graphs and colour coded maps.
        The user can customize their call to the API directly in the UI to display different types of data.
        The app is written in Dart and uses two different REST APIs. <i>Vistics</i> is not a part of any university course or previous work, 
        just something I've worked with in my spare time because I think data visualization is really interesting. And hey, I thought it was
        really about time to learn more about Dart and Flutter. 
        Please check out the Github Repository for more information about this project.</div>,
        links: [
            {
                name: "Github Repository",
                url: "https://github.com/jsimfors/covid-tracker",
            },
        ],
        linktext: "Link to repository"
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
        infoShort:<div>On the XML-based website <i>The Big Coffee Adventure</i> the user can learn about all the coffee available at KTH-Campus, and also rate it based on their own experience. The page includes a possibility to log-in and to search for a specific place. The data is retrieved from the MySQL-based database phpMyAdmin. The website was built as a part of the course <i>DM2517 XML for Publishing</i> at KTH</div>, 
        infoLong:<div>On the XML-based website <i>The Big Coffee Adventure</i> the user can learn about all the coffee available at KTH-Campus, and also rate it based on their own experience. The page includes a possibility to log-in and to search for a specific place. The data is retrieved from the MySQL-based database phpMyAdmin. The website was built as a part of the course <i>DM2517 XML for Publishing</i> at KTH, we were a team of two Students.</div>, 
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
        linktext: "Visit the site - learn some math!"
    },
]

export default preWorkData;