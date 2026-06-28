import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      borderBottom: "1px solid #ddd"
    }}>
      <h3>IEEE Events</h3>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </div>
    </div>
  );
}