// import '../styles/mainPage.css'
import React from "react"

export default function MainPage() {

  return (
    <React.Fragment>
      <div className="mainPage">
        <h1>Welcome to Safe Travel Systems!</h1>
        <h3>This Site is currently in development.</h3>
        <div className="websiteInfo">
          <p>Safe Travel Systems has a goal of providing its user some of the most up to date and reliable data, so that our user are able to vacation to the fullest.</p>
        </div>
        <div className="expectations">
          <h1>What to expect through development.</h1>
          <ul className="expectList">
            <li>Allow users to sign in</li>
            <li>Allow users to users to save destination/ have them connected to their account</li>
            <li>Allow program to take city and date input and use it to make Api calls</li>
          </ul>
        </div>
      </div>  
      </React.Fragment>
  )
}