import { useState } from "react";
import { useSpring, animated } from "react-spring";

import PropTypes from "prop-types";

const ActionButton = (props) => {
  const [isHover, setIsHover] = useState(false);

  const animation = useSpring({
    to: {
      transform: isHover ? "translate(-4px, -4px)" : "translate(0px, 0px)",
      textShadow: isHover ? "4px 4px 2px #2d3823" : "0px 0px 0px #2d3823"
    }
  });

  const hover = () => {
    setIsHover(true);
  };

  const unhover = () => {
    setIsHover(false);
  };

  return (
    <div id={props.id} className={props.className}>
      <animated.div
        className="text-reset text-decoration-none user-select-none"
        onMouseEnter={hover}
        onMouseLeave={unhover}
        onClick={props.onClick}
        style={animation}
        aria-pressed="true">
        {props.children}
      </animated.div>
    </div>
  );
};

ActionButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default ActionButton;
