import Image from 'next/image'
import Avatar from '@mui/material/Avatar'

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-white py-2 px-4 shadow-lg">
            <Image
                className="cursor-pointer rounded-full"
                src="/storiesmadesimple.png"
                width={55}
                height={55}
                objectFit="cover"
            />

            <Avatar className="cursor-pointer" />
        </div>
    )
}
