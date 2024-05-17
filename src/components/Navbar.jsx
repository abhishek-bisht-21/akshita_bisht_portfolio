import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<motion.span
					variants={container(0.5)}
					initial="hidden"
					animate="visible"
					className="bg-gradient-to-r from-gray-100 via-slate-500 to-gray-200 bg-clip-text text-3xl tracking-tight text-transparent"
				>
					AB
				</motion.span>
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a href="https://www.linkedin.com/in/akshita-bisht-5459b71b3/"><FaLinkedin /></a>
				{/* <a href="https://github.com/abhishek-bisht-21"><FaGithub /></a>

				<FaInstagram />
				<a href="https://twitter.com/Abhishe09058552"><FaSquareXTwitter /></a> */}

			</div>
		</nav>
	);
};

export default Navbar;