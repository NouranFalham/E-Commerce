import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function SignupForm() {
    return (
        <>
        <div className="form px-6 py-12 space-y-7 rounded-xl shadow-xl">
            <div className="title text-center">
                <h2 className="text-3xl font-semibold">Create your account</h2>
                <p className="mt-1">Start your journey with us today</p>
            </div>

            <div className="flex gap-2 *:flex *:items-center *:justify-center *:w-full *:gap-2 *:hover:bg-gray-100">
                <button className="btn bg-transparent border border-gray-400/40 ">
                    <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                    <span>Google</span>
                </button>
                <button className="btn bg-transparent border border-gray-400/40 ">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-500"/>
                    <span>Facebook</span>
                </button>
            </div>

            <div className="relative w-full h-0.5 bg-gray-300/30">
                <span className="absolute bg-white px-4 left-1/2 top-1/2 -translate-1/2">or</span>
            </div>

            <form className="space-y-5">
                <div className="name flex flex-col gap-1">
                    <label htmlFor="name">Name*</label>
                    <input className="form-control" type="text" id="name" placeholder="Nouran" />
                </div>
                <div className="email flex flex-col gap-1">
                    <label htmlFor="email">Email*</label>
                    <input className="form-control" type="email" id="email" placeholder="nouran@gamil.com" />
                </div>
                <div className="phone flex flex-col gap-1">
                    <label htmlFor="phone">Phone*</label>
                    <input className="form-control" type="tel" id="phone" placeholder="+2 012 3456 7890" />
                </div> 
                <div className="password flex flex-col gap-1">
                    <label htmlFor="password">Password*</label>
                    <input className="form-control" type="password" id="password" placeholder="Create a strong password" />

                    <div className="password-strength flex gap-2 items-center">
                        <div className="bar rounded-xl overflow-hidden w-full h-1 bg-gray-200">
                            <div className="progressbar w-1/4 bg-red-500 h-full"></div>
                        </div>
                        <span>weak</span>
                    </div>
                </div>
                <div className="repassword flex flex-col gap-1">
                    <label htmlFor="repassword">Re-enter Password*</label>
                    <input className="form-control" type="password" id="repassword" placeholder="Confirm your password" />
                </div>

                <div className="terms flex gap-2 items-center">
                    <input type="checkbox" name="terms" id="terms" className="accent-green-600 size-4" />
                    <label htmlFor="terms">I agree to the <Link href='/terms' className="text-green-600 underline">Terms Of Service</Link> and <Link href='/privacy-policy' className="text-green-600 underline">Privacy Policy</Link></label>
                </div>

                <button type="submit" className="submit-btn btn bg-green-600 text-white flex gap-2 justify-center items-center w-full hover:bg-green-700" >
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Create My Account</span>
                </button>
            </form> 
            <p className="text-center pt-8 border-t border-gray-300/50">Already have an account? <Link href='/login' className="text-green-600 underline">Sign in</Link></p>
        </div> 
        
        </>
    )
}
