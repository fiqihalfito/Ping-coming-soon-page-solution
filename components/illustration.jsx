import Image from "next/image";
import illustration from "../public/images/illustration-dashboard.png"

const Illustration = () => (
    <div className="my-auto">
        <Image src={illustration} alt="illustration" />
    </div>
)

export default Illustration