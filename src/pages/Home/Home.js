import { useState, useRef, useEffect } from "react";
import './Home.css'

export default function Home({ home }){

    
    const [tools, setTools] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    const url = `https://dr-ardi.github.io/LabsContent/tools.json`;

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setTools(data.tools); 
        })
        .catch((error) => {
            console.error('Error fetching JSON:', error);
        });

        const featuresEl = featuresElRef.current;
        featuresEl.addEventListener("pointermove", handlePointerMove);
        return () => {
        featuresEl.removeEventListener("pointermove", handlePointerMove);
        };
    }, [])

    const getToolBar = () => {
        return (
            tools && <div className="showcase">
                <div className="scrolling">
                    {tools.map((tool) => {
                        return (
                            <a key={`tool-1-${tool.name}`} className="tool" href={tool.link} target="_blank">
                                <img className="icon" src={tool.image}></img>
                                <p>{tool.name}</p>
                            </a>
                        )
                    })}
                </div>
                <div className="scrolling">
                    {tools.map((tool) => {
                        return (
                            <a key={`tool-2-${tool.name}`} className="tool" href={tool.link} target="_blank">
                                <img className="icon" src={tool.image}></img>
                                <p>{tool.name}</p>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    } 

    const featuresElRef = useRef(null);
    const featureElsRef = useRef([]);

    const handlePointerMove = (ev) => {
        featureElsRef.current.forEach((featureEl) => {
            const rect = featureEl.getBoundingClientRect();
            featureEl.style.setProperty("--x", ev.clientX - rect.left);
            featureEl.style.setProperty("--y", ev.clientY - rect.top);
        });
    };

    return (
        <main ref={featuresElRef}>
            <div className="cards">
                <div className={`charCard window ${isFlipped ? "is-flipped" : ""}`} ref={(el) => (featureElsRef.current[0] = el)}>
                    <div className="card-front">
                        <p style={{textAlign: "center", fontSize: "1.1rem"}}><strong>{home.card.name}</strong></p>
                        <p>{home.card.titles}</p>
                        <p>{home.card.my_hobbies}</p>
                        <ul className="hobby-list">
                            {home.card.hobbies.map((hobby, index) => {
                                return (
                                    <li key={"hobby"+index} style={{fontSize: "0.9rem"}}>{hobby}</li>
                            )})}
                        </ul>
                        <p style={{fontSize: "0.8rem"}}>{home.card.arch}</p>
                        {/* <button style={{float: "right"}} onClick={() => setIsFlipped(true)}>{home.card.button}</button> */}
                    </div>
                    {/* <div className="card-back">
                        <p>{home.card.photo}</p>
                    </div> */}
                </div>
                <div className="details window" ref={(el) => (featureElsRef.current[1] = el)}>
                    {home.greeting.map((line, index) => {
                        return (<p key={"line"+index}>{line}</p>)
                    })}
                </div>
                <div className="tools window" ref={(el) => (featureElsRef.current[2] = el)}>
                    <p className="toolTag">{home.tools}</p>
                    {getToolBar()}
                    <button className="toolTag" style={{alignSelf: "end"}}>Show all</button>
                </div>
                <div className="work window" ref={(el) => (featureElsRef.current[3] = el)}>
                    {home.work.map((work, index) => {
                        return (<p key={"work"+index}>{work}</p>)
                    })}
                </div>
            </div>
        </main>
    );
}