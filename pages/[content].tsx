import { sanityClient } from '../sanity'
import { HomePostType } from '../typings'
import HomePost from '../components/HomePost'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Props {
    posts: [HomePostType]
}

const Stories = ({ posts }: Props) => {
    const router = useRouter()
    const contentType = router.query

    return (
        <div className="p-4">
            <Head>
                <title>{`Stories Made Simple - ${
                    contentType.content === 'post'
                        ? 'Stories'
                        : contentType.content
                }`}</title>
            </Head>

            <h1 className="text-4xl font-bold">
                {contentType.content === 'post'
                    ? 'Top Stories'
                    : `Top ${contentType.content}`}
            </h1>

            <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                {posts.map((postObj) => (
                    <HomePost post={postObj} />
                ))}
            </div>
        </div>
    )
}

export default Stories

export const getServerSideProps = async (context) => {
    const contentType = context.query.content

    const query = `
    * [_type == '${contentType}'] {
    _id,
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
  }
    `

    const posts = await sanityClient.fetch(query)

    console.log(posts)

    return {
        props: {
            posts,
        },
    }
}
