import Posts from "./Posts";

const Feed = () => {
   return (
    <article className='grid h-auto lg:w-[40%]'>
        <section className="overflow-y-auto h-[100vh]">
        <h1 className='text-sky-600 text-3xl font-bold font-arial text-center p-4 mt-20'>Byteblend</h1>
            <Posts/>
        </section>
    </article>
   )
}
 
export default Feed;