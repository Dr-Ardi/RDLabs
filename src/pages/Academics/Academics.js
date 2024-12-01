import './Academics.css'

export default function Academics({aca}){

    return (
        <article>
            { aca && <section className="university">
                {aca.uni.map((line, index) => {
                    return (
                        <p key={"uni"+index} style={{textAlign: "justify"}}>
                            {index == 0 ? 
                                <strong>{line}</strong>
                                : 
                                line
                            }
                            {index == 9 && <a href='https://www.ihu.gr/' style={{fontStyle: "italic"}}>IHU</a>}
                        </p> 
                    )
                })}
            </section>}
        </article>
    );
}