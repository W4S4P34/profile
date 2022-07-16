import { useSpring, animated, easings } from "react-spring";

import PropTypes from "prop-types";

const BlinkText = ({ id, className, children }) => {
  const animation = useSpring({
    from: {
      opacity: 1
    },
    to: {
      opacity: 0.15
    },
    config: {
      duration: 1000,
      easing: easings.easeInBack
    },
    loop: true
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
