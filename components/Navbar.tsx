import Image from 'next/image'
import Avatar from '@mui/material/Avatar'
import InfoIcon from '@mui/icons-material/Info'
import CallIcon from '@mui/icons-material/Call'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()

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
                    onClick={() => router.push('/contact')}
                >
                    <CallIcon />
                    <p className="hidden md:inline-flex">Contact Me</p>
                </div>

                <Avatar className="cursor-pointer" />
            </div>
        </div>
    )
}
