import {Link} from 'react-router-dom';
import {FiEdit2} from 'react-icons/fi';

const Profile = () => {
    const user = {
        name: "Karma Marikomo",
        username: "karley",
        bio: "Hello, My name is Karma. I am a chemical Engineering student who has a passion for learning new things and experimenting",
        following: 1,
        followers: '80M',
        profileImageUrl: "../src/assets/karma.jpg",
        backgroundImage: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
    const {name, username, profileImageUrl, followers, following, bio,backgroundImage } = user;

    return ( 
        <article className='flex flex-col lg:w-[33.3%]'>
            <section
            className='w-full p-4 text-center gap-4 grid'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            >
                <img src={profileImageUrl} className='justify-self-center rounded-full h-[20rem] w-[20rem] lg:w-[15rem] lg:h-[15rem]'/>
                <p className="text-white font-bold text-3xl overflow-hidden">{name}</p>
                <p className="text-white font-bold text-lg">@{username}</p>
                <section className="flex justify-between text-white font-bold">
                    <p className='underline lg:hover:text-blue-500 lg:hover:cursor-pointer'>{followers} followers</p>
                    <p className='underline lg:hover:text-blue-500 lg:hover:cursor-pointer'>following {following}</p>
                </section>
            </section>
            <section>
                <p className='text-lg text-center p-2 lg:text-md'>{bio}</p>
                <section className='flex justify-between px-4 pt-0 pb-4'>
                <a href="" className='text-blue-900 underline'>Share profile</a>
                <Link className='text-blue-900 underline flex gap-1'>Edit profile <FiEdit2/></Link>
                </section>
            </section>
        </article>
     );
}
 
export default Profile;