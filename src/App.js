
//import PostContainer from './Post'
//import Nav from './Nav'
//import PostList from './PostList'

import { DataStore } from "@aws-amplify/datastore"
import { Post } from "./models"

function App () {
  const createPost = async ()=> {
    const post= {
      title: window.prompt('Enter Title'),
      content: window.prompt('Enter content'),

    }
   const newPost =  await DataStore.save(
      new Post(post)
    );
    console.log(newPost);
  }
  return (
    <div>
    <button onClick={createPost}> Create Post</button>
      </div>
  )
}

export default App