import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/Navbar.component.jsx";

function BlogPost() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setBlogData(data))
      .catch(console.error);
  }, []);

  if (!blogData)
    return (
      <div className="flex items-center justify-center space-x-2 animate-pulse m-auto w-1/2 h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-16 h-16 border-4 border-black border-solid
        rounded-full animate-spin"
        ></div>
      </div>
    );

  return (
    <div>
      <NavBar />
      <main className="px-12">
        <section className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl text-center mt-8 tracking-wider">
            Blog Posts Page
          </h1>
          <h2 className="text-xl sm:text-2xl text-center mt-2 mb-8 tracking-wide">
            Welcome to my page of blog posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData &&
              blogData.map((post, index) => (
                <article>
                  <Link
                    to={"/blog/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-black border "
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-white-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlogPost;
