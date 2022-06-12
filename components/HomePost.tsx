import { HomePostType } from '../typings'
import { urlFor } from '../sanity'
import { useRouter } from 'next/router'

interface Props {
    post: HomePostType
}

export default function HomePost({ post }: Props) {
    const router = useRouter()

    return (
        <div
            className="group my-2 mr-5 flex cursor-pointer flex-col items-start justify-center overflow-hidden rounded-lg bg-gray-100 p-2 transition hover:shadow-lg"
            onClick={() =>
                router.push({
                    pathname: '/postContent',
                    query: {
                        contentType: post._type,
                        slug: post.slug.current,
                    },
                })
            }
        >
            <div className="group w-full overflow-hidden rounded-lg border">
                <img
                    src={urlFor(post.mainImage).url()!}
                    className="group h-60 w-full transform object-cover transition duration-200 ease-in-out group-hover:scale-105"
                />
            </div>

            <div className="space-y-1 p-2">
                <h1 className="text-lg font-bold">{post.title}</h1>
                <h3>
                    <span className="text-[#0EBFE9] group-hover:font-bold">
                        {post.author.name}
                    </span>
                    &nbsp;published on
                    <span className="text-gray-500">
                        &nbsp;{new Date(post._createdAt)?.toDateString()}
                    </span>
                </h3>

                <p>{post.description}</p>
            </div>
        </div>
    )
}
