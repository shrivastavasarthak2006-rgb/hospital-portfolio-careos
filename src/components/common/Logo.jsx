import { Link } from "react-router-dom";
import logo from "../../assets/careos-logo.png"; 


export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="Project Logo" className="h-24 w-auto" />
      
    </Link>
  );
}