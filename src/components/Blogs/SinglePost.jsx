import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import NavBar from "../NavBar/Navbar.component.jsx";
import Footer from "../Footer/Footer.component.jsx";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
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
      <main>
        <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg">
          <header className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              {/* title and author block */}
              <div className="bg-white bg-opacity-75 rounded flex flex-col m-auto items-center text-center z-50 p-4 sm:p-5 md:p-6 lg:p-8">
                <h1 className="text-3xl sm:text-4xl text-center mt-8 tracking-wider">
                  {singlePost.title}
                </h1>
                {/* image and author div */}
                <div className="flex items-start justify-center text-gray-800 mt-1">
                  <img
                    src={urlFor(singlePost.authorImage).url()}
                    alt={singlePost.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-lg sm:text-xl text-center mt-2 mb-8 ml-2 tracking-wide">
                    {singlePost.name}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="w-full object-cover rounded-t"
              style={{ height: "400px" }}
            />
          </header>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-black">
            <BlockContent
              blocks={singlePost.body}
              projectId="xpjb16mq"
              dataset="production"
            />
          </div>
        </article>
      </main>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}

export default SinglePost;
