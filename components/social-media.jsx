
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const socialmedia = [
    {
        icon: <FaGithub />,
        url: "https://www.github.com/fiqihalfito"
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/fiqihalfito"
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/fiqih-alfito"
    }
]

const SocialMedia = () => (
    <div className="flex gap-4 justify-center mb-8">
        {socialmedia.map((item, index) => (
            <Link href={item.url} key={index}>
                <div className="p-2 border border-custom-secondary-paleBlue rounded-full
                text-custom-primary-blue hover:text-white hover:bg-custom-primary-blue
                hover:scale-150 active:scale-75
                transition-all ease-in-out duration-300 active:duration-100">
                    {item.icon}
                </div>
            </Link>
        ))}
    </div>
)

export default SocialMedia