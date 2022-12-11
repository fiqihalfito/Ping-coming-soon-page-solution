const EmailInput = () => (
    <div className="space-y-2">
        <input type="text" placeholder="Your email address" className="text-sm w-full border-2 border-custom-secondary-paleBlue focus:border-custom-primary-blue focus:outline-none py-3 px-8 rounded-full" />
        <button className="text-sm font-semibold w-full text-white bg-custom-primary-blue py-3 rounded-full">Notify Me</button>
    </div>
)

export default EmailInput