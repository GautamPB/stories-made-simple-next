import { HomePostType } from '../typings'
import { urlFor } from '../sanity'

interface Props {
    post: HomePostType
}

export default function HomePost({ post }: Props) {
    return (
        <div className="group my-2 mr-5 flex cursor-pointer flex-col items-start justify-center overflow-hidden rounded-lg transition hover:bg-[#e7e7e7]">
            <div className="group w-full overflow-hidden rounded-lg border">
                <img
                    // src="https://www.wallpapers13.com/wp-content/uploads/2015/11/Tower-for-surveillance-of-forest-fire-night-nature-landscape-Wallpaper-HD-1920x1080.jpg"
                    src={urlFor(post.mainImage).url()!}
                    className="group h-60 w-full transform object-cover transition duration-200 ease-in-out group-hover:scale-105"
                />
            </div>

            <div className="p-2">
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
            </div>
        </div>
    )
}
