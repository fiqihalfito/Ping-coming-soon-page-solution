
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const icons = [<FaFacebookF />, <FaTwitter />, <FaInstagram />]

const SocialMedia = () => (
    <div className="text-custom-primary-blue flex gap-4 justify-center">
        {icons.map((icon, index) => (
            <div key={index} className="p-2 border border-custom-secondary-paleBlue rounded-full">
                {icon}
            </div>
        ))}
    </div>
)

export default SocialMedia