import "./style.css";

const Project = ({title, image}) => {
    return (
        <li className="project">
            <a href="project-page.html">
                <img className="project__img" src={image} alt={title} />
                <h3 className="project__title">{title}</h3>
            </a>
        </li>
    );
}
 
export default Project;