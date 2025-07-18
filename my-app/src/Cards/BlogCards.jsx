"use client"

import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
import Title from "./Title"

export default function BlogCards() {
  const blogPosts = [
    {
      id: 1,
      date: "17",
      month: "Feb",
      author: "BY ADMIN",
      comments: "COMMENTS (05)",
      title: "Strategic Solutions for Sustainable Success",
      image: "/blog_1.png"
    },
    {
      id: 2,
      date: "17",
      month: "Feb",
      author: "BY ADMIN",
      comments: "COMMENTS (05)",
      title: "Empowering Businesses Fueling Growth",
      image: "/blog_2.png"
    },
    {
      id: 3,
      date: "17",
      month: "Feb",
      author: "BY ADMIN",
      comments: "COMMENTS (05)",
      title: "Strategic guidance for your business success",
      image: "/blog_3.png"
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
            <Title title="Blog" content={`Strategic Solutions For A <br /> Thriving Future`} />
        
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Date Badge */}
              <div className="absolute top-0 left-4 bg-theam rounded-lg shadow-sm z-10 w-20 h-20 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-white">{post.date}</span>
                <span className="text-xs font-medium text-white uppercase">{post.month}</span>
              </div>

              {/* Blog Image with Hover Effect */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 text-center">
                {/* Meta Info */}
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-4 text-center">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{post.comments}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h3>

                {/* Read More Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-black font-medium hover:text-red-600 transition-colors duration-300"
                >
                  READ MORE <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}