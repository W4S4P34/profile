import { useSpring, animated, config } from "react-spring";

import PropTypes from "prop-types";

const BlinkText = ({ id, className, children }) => {
  const animation = useSpring({
    from: {
      opacity: 0.15
    },
    to: {
      opacity: 1
    },
    config: config.default,
    loop: {
      reverse: true
    }
  });

  return (
    <animated.div id={id} className={className} style={animation}>
      {children}
    </animated.div>
  );
};

BlinkText.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};

export default BlinkText;
