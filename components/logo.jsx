import Image from "next/image"
import logo from "../public/images/logo.svg"

const Logo = () => (
    <div className="p-10 mx-auto">
        <Image src={logo} alt="logo" className="w-[60px]" />
    </div>
)

export default Logo