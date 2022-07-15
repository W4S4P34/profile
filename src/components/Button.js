import PropTypes from "prop-types";

import { motion } from "framer-motion";

const buttonVariants = {
	initial: {
		x: 0,
		y: 0,
		textShadow: "0 0 0 rgba(0, 0, 0, 1)"
	},
	hover: {
		x: -3,
		y: -3,
		textShadow: "3 3 0 rgba(0, 0, 0, 1)"
	}
};

const Button = ({ id, className, children }) => {
	return (
		<motion.div
			id={id}
			className={className}
			variants={buttonVariants}
			whileHover="hover">
			{children}
		</motion.div>
	);
};

Button.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.element
};

export default Button;
