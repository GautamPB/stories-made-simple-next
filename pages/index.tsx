import Head from 'next/head'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import HomePost from '../components/HomePost'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Stories Made Simple</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <BottomNav />

            <div className="mx-auto mt-5 max-w-[95vw]">
                <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3">
                    <HomePost />
                    <HomePost />
                    <HomePost />
                    <HomePost />
                    <HomePost />
                    <HomePost />
                </div>
            </div>
        </div>
    )
}
