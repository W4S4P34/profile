import { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import PropTypes from "prop-types";

const NavigateButton = ({ id, className, to, children }) => {
  const [isHover, setIsHover] = useState(false);

  const animation = useSpring({
    transform: isHover ? "translate(-4px, -4px)" : "translate(0px, 0px)",
    textShadow: isHover ? "4px 4px 2px #2d3823" : "0px 0px 0px #2d3823"
  });

  const hover = () => setIsHover(true);
  const unhover = () => setIsHover(false);

  return (
    <div id={id} className={className}>
      <Link className="text-reset text-decoration-none user-select-none" to={to}>
        <animated.div onMouseEnter={hover} onMouseLeave={unhover} style={animation}>
          {children}
        </animated.div>
      </Link>
    </div>
  );
};

NavigateButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default NavigateButton;
