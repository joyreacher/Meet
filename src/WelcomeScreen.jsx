import React from "react";
import Illustration from './Illustration'

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <Illustration className='Illustration' />
      <div className="WelcomeScreen__text">
        <div className="WelcomeScreen__text-container">
          <h1 className='WelcomeScreen__text-headline'>Welcome to the Meet app</h1>
          <h4 className='WelcomeScreen__text-copy'>
            Log in to see upcoming events around the world for full-stack developers
          </h4>
          <a
            href="https://joyreacher.github.io/meet/privacy-policy.html"
            rel="nofollow noopener"
          >
            Privacy policy
          </a>
        </div>
        {/* sign in with google */}
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                console.log(props)
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
      </div>
        
      
    </div>
  ) : '';
}
export default WelcomeScreen;
