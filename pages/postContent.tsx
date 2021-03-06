import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { sanityClient } from '../sanity'
import { HomePostType } from '../typings'
import PortableText from 'react-portable-text'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import Comment from '../components/Comment'
interface Props {
    post: HomePostType
}

export default function Post({ post }: Props) {
    const router = useRouter()

    const [user] = useAuthState(auth)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const [submitted, setSubmitted] = useState(false)

    const { contentType, slug } = router.query

    const handleCommentSubmit = (e: any) => {
        e.preventDefault()

        const commentData = {
            _id: post._id,
            name,
            email,
            comment,
            userPhoto: user?.photoURL,
        }
        fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(commentData),
        })
            .then(() => {
                setSubmitted(true)
                setName('')
                setEmail('')
                setComment('')
            })
            .catch((error) => {
                console.log('comment could not be submitted', error)
            })
    }

    return (
        <div>
            <Head>
                <title>Stories Made Simple - {slug}</title>
            </Head>

            <Navbar />

            <div className="p-2">
                <div className="m-6 mx-auto max-w-5xl space-y-2 p-4">
                    <h1 className="text-2xl font-bold">{post?.title}</h1>
                    <div className="text-gray-400">{post?.description}</div>
                    <p>
                        A post by{' '}
                        <span className="font-semibold text-blue-500">
                            {post?.author.name}
                        </span>{' '}
                        published on{' '}
                        <span className="text-gray-400">
                            {new Date(post._createdAt).toDateString()}
                        </span>
                    </p>

                    <hr className="w-full border border-blue-500" />

                    <PortableText
                        className=""
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.body}
                        serializers={{
                            h1: (props: any) => (
                                <h1
                                    className="my-5 text-2xl font-bold"
                                    {...props}
                                />
                            ),

                            h2: (props: any) => (
                                <h1
                                    className="my-5 text-xl font-bold"
                                    {...props}
                                />
                            ),

                            h3: (props: any) => (
                                <h1
                                    className="my-5 text-lg font-bold"
                                    {...props}
                                />
                            ),

                            li: ({ children }: any) => (
                                <li className="ml-4 list-disc">{children}</li>
                            ),

                            link: ({ href, children }: any) => (
                                <a
                                    href={href}
                                    className="text-blue-500 hover:underline"
                                >
                                    {children}
                                </a>
                            ),
                        }}
                    />

                    <hr className="w-full border border-blue-500" />

                    <div className="flex w-full flex-col space-y-4">
                        <h1 className="text-base font-bold">
                            Liked the post? <br />
                            <span className="text-3xl font-bold text-blue-500">
                                {user
                                    ? !submitted && 'Leave a comment!'
                                    : 'Login to leave a comment!'}
                            </span>
                        </h1>

                        {user && !submitted && (
                            <form className="flex w-full flex-col space-y-3">
                                <div className="w-full space-y-2">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 p-2 shadow-lg outline-none focus:border-2 focus:border-blue-500"
                                        placeholder="Example: John Appleseed"
                                    />
                                </div>

                                <div className="w-full space-y-2">
                                    <label>Your Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 p-2 shadow-lg outline-none focus:border-2 focus:border-blue-500"
                                        placeholder="Example: johnappleseed@gmail.com"
                                    />
                                </div>

                                <div className="w-full space-y-2">
                                    <label>Your Comment</label>
                                    <textarea
                                        value={comment}
                                        onChange={(e) =>
                                            setComment(e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 p-2 shadow-lg outline-none focus:border-2 focus:border-blue-500"
                                        placeholder="Example: Loved the post!"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-blue-500 py-2 font-bold text-white shadow-lg"
                                    onClick={handleCommentSubmit}
                                >
                                    COMMENT
                                </button>
                            </form>
                        )}
                        {submitted && (
                            <h1 className="text-3xl font-bold text-blue-500">
                                Thank you for your comment <br />
                                <span className="text-lg text-black">
                                    Your comment will be displayed once it's
                                    approved
                                </span>
                            </h1>
                        )}
                    </div>

                    <div className="space-y-4">
                        {post.comments.map((comment) => (
                            <Comment comment={comment} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context: { query: any }) => {
    const { contentType, slug } = context.query

    const query = `
    * [_type == '${contentType}'  && slug.current == '${slug}'] {
    _id,
    _type,
    _createdAt,
    title,
    slug,
    author -> {
    name,
    image
  },
  "comments": *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true
  ]
,
  description,
  mainImage,
  slug,
  body
  }
    `
    const post = await sanityClient.fetch(query, {
        contentType,
        slug,
    })

    return {
        props: {
            contentType,
            slug,
            post: post[0],
        },
    }
}
