import Navbar from '../components/Navbar'
import Head from 'next/head'
import TextEditor from '../components/TextEditor.js'

const Upload = () => {
    return (
        <div>
            <Head>
                <title>Stories Made Simple - Upload</title>
            </Head>

            <div>
                <Navbar />
                <TextEditor />
            </div>
        </div>
    )
}

export default Upload
