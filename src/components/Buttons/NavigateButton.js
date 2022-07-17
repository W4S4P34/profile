import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import PropTypes from "prop-types";

const NavigateButton = (props) => {
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
    if (!props.activeRef) {
      setIsHover(false);
    }
  };

  useEffect(() => {
    setIsHover(props.activeRef);
  }, [props.activeRef]);

  if (props.to.startsWith("/")) {
    if (props.isNavLink) {
      return (
        <div id={props.id} className={props.className}>
          <NavLink
            ref={props.innerRef}
            className="text-reset text-decoration-none user-select-none"
            target={props.target}
            to={props.to}
            aria-pressed="true">
            <animated.div onMouseEnter={hover} onMouseLeave={unhover} style={animation}>
              {props.children}
            </animated.div>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div id={props.id} className={props.className}>
          <Link
            className="text-reset text-decoration-none user-select-none"
            target={props.target}
            to={props.to}
            aria-pressed="true">
            <animated.div onMouseEnter={hover} onMouseLeave={unhover} style={animation}>
              {props.children}
            </animated.div>
          </Link>
        </div>
      );
    }
  } else if (props.to.startsWith("https://")) {
    return (
      <div id={props.id} className={props.className}>
        <a
          className="text-reset text-decoration-none user-select-none"
          target={props.target}
          href={props.to}
          aria-pressed="true">
          <animated.div onMouseEnter={hover} onMouseLeave={unhover} style={animation}>
            {props.children}
          </animated.div>
        </a>
      </div>
    );
  }
};

NavigateButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  isNavLink: PropTypes.bool,
  innerRef: PropTypes.any,
  activeRef: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default NavigateButton;
