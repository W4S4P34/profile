import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavigateButton from "../../components/NavigateButton";

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
      className="d-flex flex-column min-vh-100 justify-content-between"
      onClick={() => completeScript()}>
      <NavigateButton className="d-flex me-4 mt-4 align-self-end" to="/home">
        Skip &gt;
      </NavigateButton>
      <div className="d-flex mx-4 align-self-center user-select-none">{script}</div>
      <div className="d-flex me-4 mb-4 align-self-end user-select-none">
        Click anywhere to continue
      </div>
    </div>
  );
};

export default Intro;
