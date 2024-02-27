import { Provider } from "react-redux"
import Post from "./components/Post"
import PostForm from "./components/PostForm"
import store from "./store"


function App() {
  return (
    <>
    <Provider store={store}>
      <PostForm />
      <Post />
      </Provider>
    </>
  )
}

export default App
