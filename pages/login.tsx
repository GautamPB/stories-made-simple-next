// import {auth, app, provider } from '../firebase'
import Image from 'next/image'
import GoogleLogo from '../icons/GoogleLogo'

const Login = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-around">
            <div className="relative h-60 w-60">
                <Image
                    src="/storiesmadesimple.png"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                />
            </div>

            <button className="flex w-3/4 items-center justify-center space-x-3 rounded-full border-2 border-gray-200 py-3 transition duration-300 hover:bg-blue-700 hover:text-white lg:w-1/2">
                <GoogleLogo />
                <span>Login with Google</span>
            </button>
        </div>
    )
}

export default Login
