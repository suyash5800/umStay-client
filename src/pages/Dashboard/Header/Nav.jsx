import "./Nav.css";

const Nav =()=>{
    return(
         <nav
      className="navbar navbar-custom navbar-expand-lg sticky-top"
    >
      <div className="container-fluid">

        <a
          className="navbar-brand logo-style"
          href="#"
          
        >
          AdminPanel
        </a>

   
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ backgroundColor: "#374151" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-lg-3">

           
            <li className="nav-item d-none d-lg-block">
              <input
                type="text"
                placeholder="Search..."
                className=" scearch-bar"
              />
            </li>

            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                style={{ color: "#9CA3AF"}}
              >
                🔔
              </span>
            </li>

            {/* Profile */}
            <li className="nav-item">
              <div
                className="d-flex justify-content-center align-items-center profile-style"
                
              >
                U
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    )
}
export default Nav;