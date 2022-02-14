import { useRouter } from 'next/router'

export default function Post() {
    const router = useRouter()

    const { contentType, slug } = router.query

    return (
        <div>
            <h1>{contentType}</h1>
            <h1>{slug}</h1>
        </div>
    )
}

export const getServerSideProps = async (context: { query: any }) => {
    const { contentType, slug } = context.query

    console.log(contentType, slug)

    return {
        props: {
            contentType,
            slug,
        },
    }
}
