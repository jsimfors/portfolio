import React from 'react'
import "./styles.css"
import pattern from "../../imgs/pattern.png"
import { Row, Col} from 'react-bootstrap';
import Project from './projects.js'


function Work() {

return (
    <div className="work-container" id="section1">
        <div className="work-container-inner">
            <h3>PREVIOUS WORK </h3>
            <h6>DEVELOPMENT</h6>
            <Project 
                title="Pensionskollen"
                subtitle="SPP Sandbox Summer Internship"
                img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                Nisi est sit amet facilisis."
                link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
            />
                        <Project 
                title="Pensionskollen"
                subtitle="SPP Sandbox Summer Internship"
                img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                Nisi est sit amet facilisis."
                link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
            />
                        <Project 
                title="Pensionskollen"
                subtitle="SPP Sandbox Summer Internship"
                img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                Nisi est sit amet facilisis."
                link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
            />
                        <Project 
                title="Pensionskollen"
                subtitle="SPP Sandbox Summer Internship"
                img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                Nisi est sit amet facilisis."
                link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
            />

            <h6>GRAPHIC DESIGN</h6>
        </div>
        <img src={pattern} alt="pattern" id="backimg"/>
    </div>
)
}


export default Work