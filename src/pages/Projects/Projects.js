import './Projects.css'

export default function Projects(cont){

    const t = cont.t

    return (
        <article>
            
            <p ref={cont.projects} className="header">
                {t('projects.headers.welcome')}
            </p>
            <p className='paragraph'>
                {t('projects.paragraphs.welcome')}
            </p>
            <ol className='projectList'>
                <li className="paragraph">
                    {t('projects.list.rdlab')}
                </li>
                <li className="paragraph">
                    {t('projects.list.gpgp')}
                </li>
                <li className="paragraph">
                    {t('projects.list.arthur')}
                </li>
                <li className="paragraph">
                    {t('projects.list.thessviv')}
                </li>
                <li className="paragraph">
                    {t('projects.list.waffle')}
                </li>
            </ol>

            <p className="header">
                {t('projects.headers.rdlab')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.rdlab')}
            </p>

            <p className="header">
                {t('projects.headers.gpgp')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.gpgp')}
            </p>

            <p className="header">
                {t('projects.headers.arthur')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.arthur')}
            </p>

            <p className="header">
                {t('projects.headers.thessviv')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.thessviv')}
            </p>

            <p className="header">
                {t('projects.headers.waffle')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.waffle')}
            </p>

            <p className="header">
                {t('projects.headers.soon')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.soon1')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.soon2')}
            </p>
            <p className="paragraph">
                {t('projects.paragraphs.end')}
            </p>

        </article>
    );
}