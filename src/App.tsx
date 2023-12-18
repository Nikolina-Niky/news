import "./App.css";
import PostPage from "./components/PostPage/PostPage";
import { PostsProvider } from "./hooks/usePostsContext";

function App() {
  return (
    <div className="App">
      <PostsProvider>
        <PostPage />
      </PostsProvider>
    </div>
  );
}

export default App;
