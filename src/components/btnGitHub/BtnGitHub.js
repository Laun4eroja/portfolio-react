import "./style.css";
import gitHubIcon from "./../../img/icons/gitHub-black.svg";

const BtnGitHub = ({link}) => {
    return (
        <a className="btn-outline" href={link} target="_blank">
            <img src={gitHubIcon} alt="github" />
            GitHub repo
        </a>
    );
}
 
export default BtnGitHub;