function Navbar() {
  return (
    <div className="navbar">
      {/* LOGO / NAME */}
      <div className="logo">soumyadeep.nitk</div>

      {/* NAV LINKS */}
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        {/* <a href="#experience">Experience</a> */}
        <a href="#activities">Activities</a>
        <a href="#contact">Contact</a>
      </div>

      {/* RESUME BUTTON */}
      <a href="SoumyadeepPaul_252CS032_MTech.pdf" target="_blank">
        <button>Resume</button>
      </a>
    </div>
  )
}

export default Navbar;