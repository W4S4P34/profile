import { useState, useEffect } from "react";

import PropTypes from "prop-types";

const Dialogue = (props) => {
  const typeSpeed = 70;

  const [script, setScript] = useState("");
  const [index, setIndex] = useState(0);

  function typeScript() {
    if (script.length < props.scripts[index].length) {
      setScript(script.concat(props.scripts[index].charAt(script.length)));
    }
  }

  function handleClickEvent() {
    if (script.length < props.scripts[index].length) {
      setScript(props.scripts[index]);
    } else if (script.length === props.scripts[index].length && index < props.scripts.length - 1) {
      setScript("");
      setIndex(index + 1);
    } else if (index === props.scripts.length - 1) {
      if (props.onComplete) {
        props.onComplete();
      }
    }
  }

  useEffect(() => {
    if (!props.clickEvent || props.clickEvent[0] === false) {
      return;
    }
    handleClickEvent();
    props.clickEvent[1](false);
  });

  useEffect(() => {
    let timerType = setTimeout(() => typeScript(), typeSpeed);
    return () => clearTimeout(timerType);
  }, [script, index]);

  return (
    <div
      id={props.id}
      className={props.className}
      onClick={!props.clickEvent ? handleClickEvent : null}>
      {script}
    </div>
  );
};

Dialogue.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickEvent: PropTypes.array,
  onClick: PropTypes.func,
  onComplete: PropTypes.func
};

export default Dialogue;
