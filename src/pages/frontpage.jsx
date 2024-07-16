import { Link } from "react-router-dom";
import { createAuthLink } from "../utils/createAuthLink";

export default function Frontpage() {

  const authLink = createAuthLink();

  return (
    <div className="frontpage-container">
      <div className="subtagline"><h1 className="subtagline-text"><a href={authLink}><span className="home-link link-1">log in to use your own music</span></a></h1></div>
    </div>
  );
}
