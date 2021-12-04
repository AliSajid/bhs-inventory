import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";

const Footer: FunctionalComponent = () => {
    return (
        <footer className="text-xl p-2 bg-blue-400 text-center text-white">
This project was built by Ali Sajid Imami
        </footer>
    )
}

export default Footer;