import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavigateButton from "../../components/Buttons/NavigateButton";
import Dialogue from "../../components/Texts/Dialogue";
import BlinkText from "../../components/Texts/BlinkText";

const scripts = require("./scripts.json").scripts;

const Intro = () => {
  const [isClick, setClick] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column min-vh-100 justify-content-between"
      onClick={() => setClick(true)}>
      <NavigateButton className="d-flex mt-4 align-self-end" to="/home">
        Skip &gt;
      </NavigateButton>
      <Dialogue
        className="d-flex align-self-center user-select-none"
        scripts={scripts}
        clickEvent={[isClick, setClick]}
        onComplete={() => {
          navigate("/home");
        }}
      />
      <BlinkText className="d-flex mb-4 align-self-end user-select-none">
        Click anywhere to continue
      </BlinkText>
    </div>
  );
};

export default Intro;
