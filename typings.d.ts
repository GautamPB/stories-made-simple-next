export interface CommentType {
    _id: string
    approved: boolean
    email: string
    comment: string
    name: string
    userPhoto: string
}

export interface HomePostType {
    _id: string
    _createdAt: string
    _type: string
    author: {
        name: string
        image: string
    }
    comments: [CommentType]
    description: string
    mainImage: {
        asset: {
            url: string
        }
    }
    slug: {
        current: string
    }
    title: string
    body: [object]
}
