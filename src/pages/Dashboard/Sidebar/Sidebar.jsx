const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{
        width: "240px",
        height: "80vh",
    
      }}
    >
      {/* Logo */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4 fw-semibold">AdminPanel</span>
      </a>

      <hr />

      {/* Menu */}
      <ul className="nav nav-pills flex-column mb-auto">

        <li className="nav-item">
          <a href="#" className="nav-link active">
            🏠 Dashboard
          </a>
        </li>

        <li>
          <a href="#" className="nav-link text-white">
            👥 Users
          </a>
        </li>

        <li>
          <a href="#" className="nav-link text-white">
            📊 Reports
          </a>
        </li>

        <li>
          <a href="#" className="nav-link text-white">
            📁 Projects
          </a>
        </li>

        <li>
          <a href="#" className="nav-link text-white">
            ⚙ Settings
          </a>
        </li>

      </ul>

      <hr />

      {/* Profile */}
      <div className="text-white">
        👤 Admin
      </div>
    </div>
  );
};

export default Sidebar;
