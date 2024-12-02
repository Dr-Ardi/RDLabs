import { useState } from 'react';
import './Projects.css'

export default function Projects({pro}){

    const [selection, updateSelection] = useState({"title": "no"})

    return (
        <article>

            {pro && <p><strong>{pro.title}</strong></p>}

            {pro && <p>{pro.intro}</p>}
            
            <div>
                {pro && <div className="projects">
                    {pro.projects.map((project, index) => {
                        return( 
                            <div key={"pro" + index} className="project" onClick={() => updateSelection(project)}>
                                <p>{project.title}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>

            {selection.title !== "no" && 
                <section>
                    <div className="header">
                        <p><a href={selection.link} target='_blank'>{selection.title}</a> {"("}{selection.abstract}{")"}</p>
                        <button onClick={() => updateSelection({"title": "no"})}>X</button>
                    </div>
                    {selection.description.map((desc, index) => {
                        return (
                            <p key={"desc"+index} style={{textAlign: "justify"}}>{desc}</p>
                        )
                    })}
                </section>}
        </article>
    );
}