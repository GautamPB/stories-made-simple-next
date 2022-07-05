import { CommentType } from '../typings'

interface Props {
    comment: CommentType
}

const Comment = ({ comment }: Props) => {
    return (
        <div className="flex items-center space-y-2 space-x-5 border-b border-blue-500 py-4">
            <div className="h-10 w-10">
                <img
                    src={comment.userPhoto}
                    alt=""
                    className="h-full w-full rounded-full"
                />
            </div>
            <div>
                <h1 className="text-xl font-bold">{comment.name}</h1>
                <p>{comment.comment}</p>
            </div>
        </div>
    )
}

export default Comment
