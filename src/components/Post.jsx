import { BsChat, BsShare, BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import {AiFillLike} from 'react-icons/ai';
import { useState } from 'react';

const Post = ({poster, contents}) => {
    const [liked, setLiked] = useState(false);
    let {name, username, profileImageUrl} = poster;
    console.log()
    const like = () => {
        if(liked == true) setLiked(false);
        else setLiked(false);
        console.log(`This post is liked: ${liked}`)
    }

    return ( 
        <section className='lg:mt-6 lg:mb-6 lg:p-5 w-full'>
            <section className="shadow-3xl grid my-3 w-full">
            <article className='p-4 flex gap-2 justify-center align-center items-center'>
                <img src={profileImageUrl} alt={`${username}'s profile picture`} className='w-[3rem] h-[3rem] rounded-full'/>

                <article className=''>
                    <h2 className='text-2xl font-bold text-ncs'>{ name }</h2>
                    <p className='text-md font-bold'>@{ username }</p>
                </article>
            </article>
            <article className='px-2 py-2 text-center'>
                <p>{contents}</p>
            </article>
            <section className="self-center justify-self-center bg-ncs w-[100%] p-2">
                    <ul className='flex gap-10 items-center justify-center'>
                        <li>
                            {liked ? <AiFillLike size={25} onClick={like} /> : <BiLike size={25} onClick={like} /> }
                        </li>
                        <li>
                            <Link>
                                <BsChat size={25}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <BsShare size={25}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <BsBookmark size={25}/>
                            </Link>
                        </li>
                    </ul>
            </section>
        </section>
        </section>
     );
}
 
export default Post;