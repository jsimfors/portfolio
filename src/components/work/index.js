import React from 'react'
import "./styles.css"
import Project from './projects.js'
import Collapsible from 'react-collapsible';
import imgsr from '../../imgs/smartypantz2.png';
import { Row, Col} from 'react-bootstrap';

function Work() {

return (
    <div className="work-container" id="section1">
        <Row>
            <Col  sm={{ span: 10, offset: 1 }} >
            <div className="work-container-inner">
            <h3>PREVIOUS WORK </h3> {/*open = true*/}
            <hr size="10"></hr>
            <Collapsible trigger="DEVELOPMENT"> 
                <Project 
                    skills="Website build with React, Typescript and Less.  "
                    title="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
                <Project 
                    skills="Quiz game built with React, Spotify's API and Firebase real-time database. "
                    title="Smarty Pantz - Spotify API webgame"
                    img={imgsr}
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://smartypantz-c6131.firebaseapp.com/"
                />
                <Project 
                    skills="Pensionskollen"
                    title="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
                <Project 
                    skills="Pensionskollen"
                    title="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
            </Collapsible>
            <Collapsible trigger="MATH">
            <Project 
                    skills="Pensionskollen"
                    title="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
            </Collapsible>

            <Collapsible trigger="GRAPHIC DESIGN">
            <Project 
                    skills="Pensionskollen"
                    title="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
            </Collapsible>
            <br/>
            <h3>SKILLS </h3> {/* collapsable? */}
            <hr size="10"></hr>
            {/* <Collapsible trigger="SKILLS"> 
                <Project 
                    skills="Pensionskollen"
                    title="SPP Sandbox Summer Internship"
                    img="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                    info="Front-end development in React, Typescript and Less. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. 
                    Nisi est sit amet facilisis."
                    link="https://i.insider.com/5d375f4ba13c950575539e04?width=1100&format=jpeg&auto=webp"
                />
            </Collapsible> */}

        </div>
        </Col>
    </Row>
    </div>
)
}


export default Work