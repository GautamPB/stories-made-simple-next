import Head from 'next/head'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import HomePost from '../components/HomePost'
import { sanityClient } from '../sanity'
import { HomePostType } from '../typings'

interface Props {
    posts: [HomePostType]
}

export default function Home({ posts }: Props) {
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
                    {posts.map((postObj) => (
                        <HomePost post={postObj} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `* [_type == 'post'] {
        _id,
        _type,
        _createdAt,
        title,
        slug,
        author -> {
        name,
        image
      },
      description,
      mainImage,
      slug,
      body
      }`

    const posts = await sanityClient.fetch(query)

    return {
        props: {
            posts,
        },
    }
}
