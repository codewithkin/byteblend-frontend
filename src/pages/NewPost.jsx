import { useState } from "react";

const NewPost = () => {
    const [contents, setContents] = useState('');
    const handlePostCreation = () => {

    }

    return (
        <article>
            <form onSubmit={handlePostCreation} className="flex flex-col justify0center items-center">
                <h2 className="text-xl p-2">Create a new post</h2>
                <input name="contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                className="p-2  border-b border-gray-400 w-5/6 outline-none"
                />

                <input type="submit" 
                placeholder="Create something awesome..."
                className="bg-ncs text-white rounded-full px-8 py-2 mt-2"
                />
            </form>
        </article>
     );
}
 
export default NewPost;