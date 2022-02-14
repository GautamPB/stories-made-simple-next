export interface HomePostType {
    _id: string
    _createdAt: string
    _type: string
    author: {
        name: string
        image: string
    }
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
