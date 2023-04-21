import { useState } from "react";
import { BsSend } from 'react-icons/bs';

const NewPost = () => {
    const [contents, setContents] = useState('');
    const handlePostCreation = () => {

    }

    return (
        <article className="p-2">
            <form onSubmit={handlePostCreation} className="flex p-4 flex-col justify-center items-center border border-gray-400">
                <h2 className="text-xl p-2 font-bold">Create a new <span className="text-ncs font-arial">post</span></h2>
                <input name="contents"
                placeholder="Create something great..."
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                className="p-2  border-b border-gray-400 w-5/6 outline-none text-center focus:border-ncs focus:border-b-2 focus:placeholder:text-ncs line-wrap "
                />

                <button className="bg-ncs text-white rounded-full px-6 py-2 mt-2 flex gap-4 justify-center items-center">
                    Submit
                    <BsSend/>
                </button>
            </form>
        </article>
     );
}
 
export default NewPost;