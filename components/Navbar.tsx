import Image from 'next/image'
import Avatar from '@mui/material/Avatar'
import InfoIcon from '@mui/icons-material/Info'
import AddIcon from '@mui/icons-material/Add'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, provider } from '../firebase'
import { signOut, signInWithPopup } from 'firebase/auth'

export default function Navbar() {
    const router = useRouter()

    const [user] = useAuthState(auth)

    return (
        <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-white py-2 px-4 shadow-lg">
            <Image
                onClick={() => router.push('/')}
                className="cursor-pointer rounded-full"
                src="/storiesmadesimple.png"
                width={55}
                height={55}
                objectFit="cover"
            />

            <div className="flex items-center space-x-4">
                <div
                    className="flex cursor-pointer items-center space-x-2"
                    onClick={() => router.push('/about')}
                >
                    <InfoIcon />
                    <p className="hidden md:inline-flex">About Me</p>
                </div>

                <div
                    className="flex cursor-pointer items-center space-x-2"
                    onClick={() => router.push('/upload')}
                >
                    <AddIcon />
                    <p className="hidden md:inline-flex">Upload New</p>
                </div>

                {!user ? (
                    <div
                        onClick={() => {
                            signInWithPopup(auth, provider)
                        }}
                    >
                        <button className="cursor-pointer rounded-lg font-semibold text-blue-500">
                            Log In
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={() => {
                            signOut(auth)
                        }}
                    >
                        <Avatar
                            className="cursor-pointer"
                            src={user?.photoURL}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
