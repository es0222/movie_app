import "./Footer.css";
export default () => (
  <footer className="footer">
    <div className="container">
      <p>© {new Date().getFullYear()} Movie App. All rights reserved.</p>
    </div>
  </footer>
);
