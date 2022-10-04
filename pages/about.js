export default function About() {
  return (
    <div className="about">
      <div className="aboutMe">
        <h2>My name is Maxwell Alvord!</h2>
        <h3>A little about me</h3>
        <p>loren ipsum</p>
      </div>
      <div className="aboutTitle">
        <h1>About Safe Travel Systems</h1>
      </div>
      <div className="goal">
        <div className="goalTitle">
          <h2>The goal of Safe Travel Systems is to create a one stop shop for all information needed while on vacation</h2>
        </div>
        <div className="goalText">
          <p>loren ipsum</p>
        </div>
        <div className="contact">
          <h2>Please contact me with any issues</h2>
        </div>
        <div className="contactInfo">
          <p>Email me at:</p>
          <a href = "mailto:maxwellalvord@gmail.com">maxwellalvord@gmail.com</a>
          <p>or visit my issues page on github<a href = "https://github.com/maxwellalvord/maxwellalvord/issues">maxwellalvord/issues</a></p>
        </div>
      </div> 
    </div>
  )
}