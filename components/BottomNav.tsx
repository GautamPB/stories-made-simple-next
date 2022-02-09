import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import HourglassFullIcon from '@mui/icons-material/HourglassFull'
import BannerImage from '../public/banner.png'
import { useRouter } from 'next/router'

const BottomNav = () => {
    const router = useRouter()

    return (
        <div className="mx-auto flex max-w-6xl flex-col items-center">
            <div className="mt-4 flex w-full items-center justify-around space-x-6 px-4">
                <div
                    className="bottomNavStyles"
                    onClick={() => router.push('/post')}
                >
                    <AutoStoriesIcon />
                    <p>Stories</p>
                </div>

                <div
                    className="bottomNavStyles"
                    onClick={() => router.push('/poems')}
                >
                    <MusicNoteIcon />
                    <p>Poems</p>
                </div>

                <div
                    className="bottomNavStyles"
                    onClick={() => router.push('/history')}
                >
                    <HourglassFullIcon />
                    <p>History</p>
                </div>
            </div>

            <div className="mt-3 flex w-full items-center justify-between space-x-3 bg-[#1E7FA8] px-4">
                <img
                    src="/logo.png"
                    className="h-25 w-25 lg:h-[20rem] lg:w-[25rem]"
                />

                <div className="flex flex-col items-center space-y-3 text-white">
                    <h1 className="text-4xl font-bold">STORIES MADE SIMPLE</h1>
                    <h3 className="text-xl">TALES . MYTHS . LEGENDS</h3>
                </div>
            </div>
        </div>
    )
}

export default BottomNav
