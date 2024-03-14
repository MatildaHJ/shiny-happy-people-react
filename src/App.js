import "./App.css";
import Main from "./Main";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Main />
        <footer>
          <div className="footer-content">
            <div style={{ marginRight: "8px" }}>Shiny happy people</div>

            <div>
              <span className="footerDot">•</span>
              <a
                href="https://www.google.com/maps/place/Shiny+Happy+People+Concept+Agency+AB/@59.3419723,18.0584231,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d666429621f:0x5244df6d547eb115!8m2!3d59.3419696!4d18.060998!16s%2Fg%2F1hc4fpnkf?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                kungstensgatan 23a, 113 57 Stockholm
              </a>
              <span className="footerDot">•</span>
              <a href="mailto:info@shinyhappypeople.se">
                info@shinyhappypeople.se
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
