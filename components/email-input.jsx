const EmailInput = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input type="text" placeholder="Your email address" className="text-sm border-2 border-custom-secondary-paleBlue focus:border-custom-primary-blue focus:outline-none py-3 px-8 rounded-full col-span-2" />
        <button className="text-sm font-semibold text-white bg-custom-primary-blue py-3 rounded-full">Notify Me</button>
    </div>
)

export default EmailInput