import React from "react";
import Navbar from "./Navbar";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <Navbar />
      <div className="main-landing">
        <div className="frameOne">
          <p>
            Kreativ konceptbyrå* utan filter. Vi säljer luftslott som ger
            effekt. Så oavsett om det ska synas, höras, kännas, smaka eller
            lukta så ser vi till att det blir gjort.
          </p>
        </div>
        <p className="frameTwo">
          *Vår konceptbyrå är typ som en reklambyrå. och som ett
          produktionsbolag. och som en terapeut. Vi skapar kreativ kommunikation
          och annat hittepå så att ditt företag kan glassa i rampljuset. ÄLSKA
          OSS.
        </p>
      </div>
    </div>
  );
}
