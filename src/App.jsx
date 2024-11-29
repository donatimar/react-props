import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { posts } from "./data/posts";

function App() {
  const publishedPosts = posts.filter((post) => post.published);
  const allTags = publishedPosts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(allTags)];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 bg-light py-5">
        <div className="container">
          <div className="mb-5">
            <h3>Tag utilizzati:</h3>
            <div className="d-flex flex-wrap">
              {uniqueTags.map((tag) => (
                <span
                  key={tag}
                  className={`badge text-white bg-${
                    tag === "html"
                      ? "success"
                      : tag === "css"
                      ? "primary"
                      : tag === "js"
                      ? "warning"
                      : tag === "php"
                      ? "info"
                      : "secondary"
                  } me-2 mb-2`}
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

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
