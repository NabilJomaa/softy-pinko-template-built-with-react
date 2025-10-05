import Image from "next/image";
import logo from "../assets/images/logo.png"

function Logo() {
    return (<div className="logo">
        <a href="">
            <Image
                src={logo}
                alt="logo"
                width={180}
                priority
            />
        </a>
    </div>)
}
export default Logo;