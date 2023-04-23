import Posts from "./Posts";

const Feed = () => {
   return (
    <article className='grid h-auto lg:w-[33.3%]'>
        <section className="overflow-y-auto h-[100vh]">
            <Posts/>
        </section>
    </article>
   )
}
 
export default Feed;