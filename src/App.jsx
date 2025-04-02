import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function switch_darkmode(todarkmode = localStorage.getItem("darkmode") !== "active") {
    if(todarkmode) {
        document.body.setAttribute("class", "darkmode");
        localStorage.setItem("darkmode", "active");
    }
    else {
        document.body.removeAttribute("class");
        localStorage.setItem("darkmode", "inactive");
    }
}

function header() {
  let darkmode_btn_action = () => {
    switch_darkmode();
    let darkmodestatus = localStorage.getItem("darkmode");
    switch_darkmode(
        darkmodestatus === "active" || (
            darkmodestatus == undefined && matchMedia("(prefers-color-scheme: dark)").matches
        )
    );
  }
  let darkmode_btn = (
    <button id="darkmode_btn" onClick={darkmode_btn_action}>
      <span className="material-symbols-outlined"> dark_mode </span>
      <span className="material-symbols-outlined"> light_mode </span>
    </button>
  )

  return (
    <header>
      <h1> Sovit </h1>
      {darkmode_btn}
    </header>
  )
}

function hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="greetings">
          <p>
            Hi,<br/>
            This is Sovit.<br/>
            And welcome to my Portfolio.
          </p>
        </div>
        <div className="quick-buttons">
          <button><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About me</a></button>
          <button><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Projects</a></button>
        </div>
      </div>
      <div className="hero-right">
        <img src="https://drive.google.com/thumbnail?id=1RXKNvuYZ-OVjzTgh7L6j3igQNk0xPUtw&sz=w1000" alt="Sovit" />
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      {header()}
      {hero()}
    </>
  )
}

export default App
