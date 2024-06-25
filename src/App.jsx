import { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { CreatePost } from "./Components/CreatePost/CreatePost";
import { PostList } from "./Components/PostList/PostList";
import PostListProvider from "./store/Post_List_Store";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container d-flex">
        <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab} />
        <div className="app-content">
          <Header />
          {SelectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
