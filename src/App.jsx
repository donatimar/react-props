import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { posts } from "./data/posts";

function App() {
  const publishedPosts = posts.filter((post) => post.published);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 bg-light py-5">
        <div className="container">
          <div className="row">
            {publishedPosts.map((post) => (
              <div className="col-4" key={post.id}>
                <Card
                  title={post.title}
                  image={post.image || "https://placehold.co/600x400"}
                  content={post.content}
                  tags={post.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
