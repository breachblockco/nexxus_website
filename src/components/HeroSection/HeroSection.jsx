/*
import React, { useEffect, useState } from "react";

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

const App = () => {
  return (
    <div style={{ fontSize: "22rem", fontFamily: "monospace",text:"Bold",color:"white" }}>
      <TypewriterEffect text="NEXUS" speed={200} />
    </div>
  );
};

export default App;
*/
/*
import React, { useEffect, useState } from "react";

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  const isTyping = index < text.length;

  return (
    <span style={{ color: isTyping ? "red" : "white" }}>
      {displayedText}
    </span>
  );
};

const App = () => {
  return (
    <div
      style={{
        fontSize: "22rem",
        fontFamily: "monospace",
        fontWeight: "bold",
        textAlign: "center",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       
      }}
    >
      <TypewriterEffect text="NEXUS" speed={200} />
      
    </div>
  );
};

export default App;

*/
import React, { useEffect, useState } from "react";

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  const isTyping = index < text.length;

  return (
    <span style={{ color: isTyping ? "red" : "white" }}>
      {displayedText}
    </span>
  );
};

const App = () => {
  return (
    <div
      style={{
        fontFamily: "monospace",
        fontWeight: "bold",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     
      <div
        style={{
          fontSize: "22rem",
        }}
      >
        <TypewriterEffect text="NEXUS" speed={200} />
      </div>

      
      <img
         src="/images/herosection/img1.jpg"
        alt="Placeholder"
        style={{ marginTop: "0px", width: "2000px", height: "300px" }}
      />
    </div>
  );
};

export default App;
