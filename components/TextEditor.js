import dynamic from 'next/dynamic'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js'
import { convertFromRaw, convertToRaw } from 'draft-js'

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
        ssr: false,
    }
)

const TextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    return (
        <div className="min-h-screen bg-[#f8f9fa] pb-16">
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbarClassName="flex !justify-center ml-auto"
                editorClassName="bg-white mx-auto mt-6 shadow-lg mb-12 border p-10 max-w-6xl"
            />
        </div>
    )
}

export default TextEditor
