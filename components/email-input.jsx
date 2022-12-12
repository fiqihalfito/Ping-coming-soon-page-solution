"use client"

const EmailInput = (props) => (
    <form className="grid grid-cols-1 md:grid-cols-3 gap-2" onSubmit={props.onSubmit}>
        <input type="text" placeholder="Your email address" className="text-sm border-2 border-custom-secondary-paleBlue focus:border-custom-primary-blue focus:outline-none py-3 px-8 rounded-full col-span-2" id="email" name="email" />

        <button className="text-sm font-semibold text-white bg-custom-primary-blue
        hover:bg-custom-secondary-paleBlue active:bg-custom-secondary-lightRed
         hover:text-custom-primary-blue active:text-white py-3 rounded-full
          transition ease-in-out duration-300 active:transition-none
        " type="submit">
            Notify Me
        </button>
    </form>
)

export default EmailInput