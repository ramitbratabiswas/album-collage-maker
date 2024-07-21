import { createAuthLink } from "../utils/createAuthLink";

export default function Frontpage() {

  const authLink = createAuthLink();

  console.log(authLink);
  console.log('https://myalbumcollage.netlify.app/callback');

  return (
    <div className="frontpage-container">
      <h1 className="frontpage-header">my album collage!</h1>
        <h1 className="subtagline-text">
          <a className="home-link" href={authLink}>
            <span className="log-in">log in</span> to get your own personalized banner
          </a>
        </h1>
    </div>
  );
}
