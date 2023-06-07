import React from 'react'

const computerGraphData = 
[
    {
        title:"MacroPhighters",
        subtitle: "AR Game built in Unity & Blender",
        images: [
            {
                source: "macro1.png",
                caption: "Poster (made by me!) of the game macroPhighters"
            },
            {
                source: "macro2.jpeg",
                caption: "The game in action"
            },
            {
                source: "macro3.jpeg",
                caption: "The game in action"
            },

            {
                source: "macro4.png",
                caption: "The model of the Macrophage, built by me. The model is built in Blender, in this screenshot I'm fixing some of the textures of the model in Unity "
            },
            {
                source: "macro5.png",
                caption:"The model of the bacteria, built by me. The model is built in Blender, in this screenshot I'm fixing some of the textures of the model in Unity "
            
            },
            ],
        infoShort:  <div>
        MacroPhighters is an augmented reality game built in React, with models built in Blender. In this game, you're a macrophage, the first layer of defense in the immune system. 
        The user scans an image and with the help of image tracking, a virtual wound appears on the mobile screen. The user has to help the macrophage to eat all the bacteria that comes out of the wound.
        The user physically runs around in the room, and tries to catch the bacteria - if they succeed haptic feedback is provided as well as the sound of the macrophage enjoying the snack. 
        When 10 bacteria have entered the surrounding blood vessels the game is over. Check out our project website to see a virtual demo of the game being played.
    </div>,
        infoLong: <div>
            MacroPhighters is an augmented reality game built in React, with models built in Blender. In this game, you're a macrophage, the first layer of defense in the immune system. 
            The user scans an image and with the help of image tracking, a virtual wound appears on the mobile screen. The user has to help the macrophage to eat all the bacteria that comes out of the wound.
            The user physically runs around in the room, and tries to catch the bacteria - if they succeed haptic feedback is provided as well as the sound of the macrophage enjoying the snack. 
            When 10 bacteria have entered the surrounding blood vessels the game is over. Check out our project website to see a virtual demo of the game being played.
        </div>,
        toolsUsed: ["Typescript", "React", "Angular", "CSS", "ESLint"],
        myResp: ["Job 1", "Job 2", "Job 3"],
        links: [
            {
                name: "Project website",
                url: "https://dh2413-group4-macrophighters.github.io/Project-Web/"
            },
            {
                name: "Github Repository",
                url: "https://github.com/DH2413-Group4-MacroPhighters/AGI-Project"
            },
        ],
        linktext: "Project website"
    },
    {
        title:"ClimateART",
        subtitle: "Interactive 3D world built with Unity, Blender, Node.js and Socket.io",
        images: [
            {
                source: "climateart0.png",
                caption: "Poster (made by me!) of the game ClimateART"
            },
            {
                source: "climateart4.jpg",
                caption: "User testing during a Open House"
            
            },
            {
                source: "climateart3.png",
                caption: "User testing during a Open House"
            },
            {
                source: "climateart2.jpg",
                caption: "Another player, interacting with the world in night-time mode"
            },

            {
                source: "climateart5.jpg",
                caption: "Screenshots from the mobile device interface"
            
            },
            {
                source: "climateart6.png",
                caption: "The world before any power plants are added"
            
            },
            {
                source: "climateart7.png",
                caption: "Here we can se several power plats added and connected. Since creative freedom was an important part of this project, the user can go crazy and add the objects wherever they find suitable. Why not some wind turbines at the bottom of the lake?"
            
            },
            {
                source: "climateart1.png",
                caption: "Close up of the little village - that is using all this power! WHAT are they doing?! Mining bitcoin?"
            },
            ],
        infoShort:  <div>
            Climate_ART is an interactive art piece. Several users can connect to the world at once - using their own phone. 
            When connected, the users can start placing objects, ex. power plants, and see how that affects the CO2 emissions of the world.
            The project uses a learn by doing approach where each connected user will leave a footprint for the next users to build on.
        </div>,
        infoLong: <div>
            <b>Climate_ART allows users to connect to a shared planet to explore power plants' and their 
              CO2 emissions. The project uses a learn by doing approach where each connected user will leave 
              a footprint for the next users to build on.</b>
            <br></br>
            The project has been ongoing for a period of six weeks. The first two weeks included brainstorming 
            and definition of the project and it’s scoop. Followed by three sprints, one week long each, where 
            the focus has been on product development. The last week of the project focused on putting the 
            last pieces together and displaying the project for users. During the project the aim has been 
            to learn more about graphics and multiplayer interactions. While the motivation for the project 
            actually came from employees at Tom Tits that suggested the theme of “The future of learning about 
            STEM”. One of the learning objectives in the Swedish school curriculum is learning about energy 
            sources and its effect on the environment. With the COP26 taking place during this fall we felt 
            that this topic was highly relevant to work with. 
            <br></br>
            The project has been centered around three main goals:
            <li>Create an interactive and collaborative experience between platforms</li>
            <li>Create a cool and visually pleasing experience </li>
            <li>Create a good learning experience about the climate</li>
            <br></br>

            <h4>My Responsibilities</h4>
            <i>My responsibilities in this project have been within the 3D graphics. I've been working with the world, all nature based 3D objects, such as the trees, bushes and clouds, and lastly also the the village and it's houses. </i>
            <br></br>

            <h4>The Development of the App</h4>
            During the first week of the development process the main focus was to develop a MVP that 
              allowed connections between multiple platforms and displayed simpler graphics. We used 
              <b>Node.js</b> to run it and <b>Socket.io</b> to allow the connection between multiple 
              platforms, which in this case was a running Unity project and internet browsers. The 
              <b>Unity</b> project displayed a simpler 3D world while the browsers showed an interactive 
              2D map over the world, by the help of <b>Leaflet.js</b>. If the user taped the map a tree 
              would be placed and the user could see the tree being dropped in the 3D world. 
              <br></br>
              When it was time to branch out on the MVP we had three areas: the graphics, the interaction and 
              the logic. For the graphics part a larger and more detailed 3D world was created in 
              <b>Blender</b> and later on exported to Unity. More 3D models, like power plants and nature 
              objects were also created and added. Some objects like the water and electrical cables needed 
              shading and these were scripted. For the interaction we allowed the user to choose between 
              multiple objects to place on the map. To make sure the interface was mobile responsive we used 
              <b>Onsen UI</b> and their components. The user was also asked to enter an alias when entering 
              the page to tell who did what interactions and display that for the other users. And for the 
              logic part we added more things in Unity, like a graph displayed on the larger screen, to show 
              all users how their different interactions affected the CO2 emissions, and a bar that gave an 
              overview to what energy sources that was used. To give a more alive and responsive world we 
              integrated a day and night cycle and if the CO2 emissions were too high a fog appeared. 
              <br></br>
              When the project was displayed to users we deployed the project with the help of a 
              <b>Raspberry Pi</b> and the users scanned a <b>QR code</b>, leading to the deployed website, 
              to join. That allowed everyone to use their own phone in a very efficient way.
              <br></br>

            <h4>Challenge and Learnings</h4>
              Most integrations have been pretty seamless for us. One of few challenging parts has been to extract 
            models from Blender to Unity. There were many materials we couldn’t extract and had to add in Unity 
            instead. One time we also had a huge problem with the vectors in the extraction. which made half of 
            the world turn inside out. Otherwise this project has been a good project to learn more about creating 
            shaders and work with very cute low-poly style graphics. Which was also a style of the graphics that 
            was liked by the users, we learned during the users feedback. 
            <br></br>
            Since we decided to work with a very complex topic, the environment, there’s a lot of future 
            implementations and work to be done. We had to scoop the project and focus on just a few things 
            even if we had a lot of ideas and things we wanted to try out - a challenge but also something you 
            need to practice. In the end we saw that this project serves as a very good proof of concept and 
            could be expanded a lot in areas like education, collaboration and exploration. 
             </div>,
        toolsUsed: ["Typescript", "React", "Angular", "CSS", "ESLint"],
        myResp: ["Job 1", "Job 2", "Job 3"],
        links: [
            {
                name: "Project website",
                url: "https://dh2413-group4-macrophighters.github.io/Climate-Project-Web/"
            },
            {
                name: "Github Repository",
                url: "https://github.com/DH2413-Group4-MacroPhighters/AGI_project2"
            },
        ],
        linktext: "Project website"
    },
    {
        title:"Ray Tracing Visualization",
        subtitle: "Ray Tracing project built in GLSL, OpenGL & ShaderToy",
        images: [
            {
                source: "render2.png",
                caption: "First page of the project report"
            },
            {
                source: "shader1.png",
                caption: "Final image of our render, with our own rendering algorithm built from scratch"
            },
            {
                source: "render3.png",
                caption: "Screen shot from our blog - trying to figure out how to implement the math in code"
            },
            {
                source: "render4.png",
                caption: "Screen shot from our blog - unintentional disco render"
            },
            {
                source: "shader2.png",
                caption: "Final image of our render, with our own rendering algorithm built from scratch"
            },

            ],
        infoShort:<div>
            This project is built as a part of the course DH2323 Computer Graphics and Interaction at KTH. 
            Where we tried to investigate the strengths and weaknesses in GPU implementation, when rendering images.
            The method for investigating this was to build a distributed ray tracer rendering a Cornell Box with
            a physically based rendering algorithm at the website Shadertoy. Our journey for doing so can be followed on our blog.
        </div>,
        infoLong:<div>
        This project is built as a part of the course DH2323 Computer Graphics and Interaction at KTH. 
        Where we tried to investigate the strengths and weaknesses in GPU implementation, when rendering images.
        The method for investigating this was to build a distributed ray tracer rendering a Cornell Box with
        a physically based rendering algorithm at the website Shadertoy. 
        Shadertoy is an online community for creating and sharing GLSL shaders, made directly in the browser with WebGL.
        Our journey for doing so can be followed on our blog.
    </div>,
        toolsUsed: ["Typescript", "React", "Angular", "CSS", "ESLint"],
        myResp: ["Job 1", "Job 2", "Job 3"],
        links: [
            {
                name: "Read the Report",
                url: "https://drive.google.com/file/d/1j8tStykcBh4SulGsvWkyN7dTdVuRq_8B/view?usp=sharing",
            },
            {
                name: "Code at ShaderToy",
                url: "https://www.shadertoy.com/view/fdSXDV",
            },
            {
                name: "Read our Project-Blog",
                url: "https://visualraytracing.wordpress.com/",
            },
        ],
        linktext: "Read the Report"      
    },
]

export default computerGraphData;