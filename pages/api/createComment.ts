import { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'
import { urlFor } from '../../sanity'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2021-10-21',
    token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { _id, name, email, comment, userPhoto } = JSON.parse(req.body)
    try {
        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id,
            },
            name,
            email,
            comment,
            userPhoto,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ messages: 'Could not submit comment', err })
    }
    console.log('Comment submitted')
    res.status(200).json({ messages: 'Comment Submitted' })
}
