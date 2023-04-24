import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Chat from './pages/Chat';
import Profile from './components/Profile';
import Settings from './pages/Settings';
import PageNotFound from './components/PageNotFound';
import PostsContextProvider from './context/PostsContext';

function App() {

  return (
    <section className='h-[100vh] lg:overflow-hidden'>
      <PostsContextProvider>
        <NavBar />
      </PostsContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts/new' element={<NewPost/>} />
        <Route path='/chats/all' element={<Chat/>} />
        <Route path='/profile/mine' element={<Profile/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </section>
  )
}

export default App
