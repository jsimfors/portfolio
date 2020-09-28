import React from 'react'
import "./styles.css"
import pattern_closeup from "../../imgs/pattern_closeup.png"
import { Row, Col} from 'react-bootstrap';
import Project from './projects.js'
import Collapsible from 'react-collapsible';



function Work() {

return (
    <div className="work-container" id="section1">
        <div className="work-container-inner">
            <h3>PREVIOUS WORK </h3>
            <Collapsible trigger="DEVELOPMENT" open="true">
                
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
            </Collapsible>
            <Collapsible trigger="MATH" open="true">
            <Project 
                    title="Pensionskollen"
                    subtitle="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
            </Collapsible>

            <Collapsible trigger="GRAPHIC DESIGN" open="true">
            <Project 
                    title="Pensionskollen"
                    subtitle="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
            </Collapsible>

        </div>
    </div>
)
}


export default Work