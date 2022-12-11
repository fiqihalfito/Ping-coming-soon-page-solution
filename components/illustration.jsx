import Image from "next/image";
import illustration from "../public/images/illustration-dashboard.png"

const Illustration = () => (
    <div className="my-auto md:my-20 md:mx-auto">
        <Image src={illustration} alt="illustration" />
    </div>
)

export default Illustration