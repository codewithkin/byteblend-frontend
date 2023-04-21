import { useState } from "react";
import { BsSend } from 'react-icons/bs';
import {TiTick} from 'react-icons/ti';
import {MdClose} from "react-icons/md";

const NewPost = () => {
    const [contents, setContents] = useState('');
    const [message, setMessage] = useState('');
    const handlePostCreation = async (e) => {
        e.preventDefault();
        
        if(contents.length > 0 && contents.length < 200 && contents.length > 5){
            const postData = {
                poster: {
                    name: "Karma Marikomo",
                    username: "karley",
                    profileImageUrl: "../assets/karma.jpg"
                },
                contents: contents,
                liked: true
            }
    
            const response = await fetch("http://localhost:4000/api/byteblend/new/post", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            })
            if(response.ok == true) {
                setMessage(<p className="p-4 flex gap-1 font-bold text-green-700 justify-center items-center border border-green-700 mt-4"><TiTick fill="green" size="30" onClick={() => setMessage('')}/> Post was succesfully created</p>);
                setContents(" ");
            } else {
                setMessage(<p className="text-red-800 gap-1 font-bold justify-center items-center"><MdClose fill="red" /> Could not create post....Please try again</p>);
            }
        }
        else if(contents.length < 5 ) {
            setMessage(<p className="text-red-600 flex gap-1 font-bold justify-center items-center p-4 border border-red-600 mt-4"><MdClose fill="red" size="30" onClick={() => setMessage("")}/> Post must be between 1 and 200 characters long</p>);
        }
    }

    return (
        <article className="p-2">
            <form onSubmit={handlePostCreation} className="flex p-4 flex-col justify-center items-center border border-gray-400">
                <h2 className="text-xl p-2 font-bold">Create a new <span className="text-ncs font-arial">post</span></h2>
                <textarea name="contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                className="p-2  border-b border-gray-400 w-5/6 outline-none text-center focus:border-ncs focus:border-b-2 focus:placeholder:text-ncs line-wrap "
                ></textarea>

                <button className="bg-ncs text-white rounded-full px-6 py-2 mt-2 flex gap-4 justify-center items-center">
                    Submit
                    <BsSend/>
                </button>
            </form>

            {message}
        </article>
     );
}
 
export default NewPost;