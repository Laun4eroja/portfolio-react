import Project from "../components/project/Project";
import {projects} from "./../helpers/projectsList";

const Projects = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="title-1 title-2">Projects</h1>
                <ul className="projects">
                    {projects.map((item, index) => {
                        return <Project key={index} title={item.tit} image={item.img} />
                    })}
                </ul>
            </div>
        </main>
    );
}
 
export default Projects;