import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "./../img/projects/Car repair.jpg";

const Project = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="project__details">
                    <h1 className="title-1 title-2">Car repair</h1>
                    <img className="project__details-img" src={img} alt="img" />
                    <div className="project__details-desc">
                        <p>Desktop</p>
                    </div>
                    <BtnGitHub link="https://laun4eroja.github.io/car-repair"/>
                </div>
            </div>
        </main>
    );
}
 
export default Project;