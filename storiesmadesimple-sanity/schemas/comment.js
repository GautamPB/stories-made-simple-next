export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',

    fields: [
        {
            name: 'name',
            type: 'string',
        },

        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: 'Unapproved comments will not be displayed',
        },

        {
            name: 'email',
            type: 'string',
        },

        {
            name: 'comment',
            type: 'string',
        },

        {
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }],
        },

        {
            name: 'userPhoto',
            title: 'User Photo',
            type: 'string',
        },
    ],
}
