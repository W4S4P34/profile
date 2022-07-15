import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";

const scripts = ["Welcome, buddy!", "Since you're here, let you come in and be my guest."];

const Intro = () => {
  let navigate = useNavigate();

  const typeSpeed = 70;

  const [script, setScript] = useState("");
  const [index, setIndex] = useState(0);

  function typeScript() {
    if (script.length < scripts[index].length) {
      setScript(script.concat(scripts[index].charAt(script.length)));
    }
  }

  function completeScript() {
    if (script.length < scripts[index].length) {
      setScript(scripts[index]);
    } else if (script.length === scripts[index].length && index < scripts.length - 1) {
      setScript("");
      setIndex(index + 1);
    } else if (index === scripts.length - 1) {
      navigate("/home");
    }
  }

  useEffect(() => {
    let timerType = setTimeout(() => typeScript(), typeSpeed);
    return () => clearTimeout(timerType);
  });

  return (
    <div
      id="dialogue-container"
      className="d-flex flex-column justify-content-between"
      onClick={() => completeScript()}>
      <Link
        className="d-flex w-100 px-4 pt-4 justify-content-end text-reset text-decoration-none user-select-none"
        to="/home">
        Skip &gt;
      </Link>
      <div className="d-flex w-100 px-4 justify-content-center user-select-none">{script}</div>
    </div>
  );
};

export default Intro;
