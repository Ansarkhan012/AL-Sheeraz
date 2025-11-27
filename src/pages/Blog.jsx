import React from "react";
import { FaSearch, FaTag, FaUser, FaCalendar } from "react-icons/fa";
import blogBanner from "../assets/images/aboutUs.png";
import kid from "../assets/images/important.jpg";
import online from "../assets/images/online.jpg";
import tajweed from "../assets/images/tajweed.jpg";
import tajweedCover from "../assets/images/The-Tajweed.webp";


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Importance of Quran Learning for Kids",
      desc: "Teaching Quran from an early age builds strong Islamic foundations. Learn why early learning helps in developing character and discipline.",
      date: "November 15, 2024",
      author: "Admin",
      category: "Quran Education",
      image: kid,
    },
    {
      id: 2,
      title: "How Online Islamic Learning is Changing Lives",
      desc: "Online learning is now helping students worldwide to connect with qualified tutors and learn at their own pace.",
      date: "November 10, 2024",
      author: "Mufti Abdullah",
      category: "Online Learning",
      image: online,
    },
    {
      id: 3,
      title: "Tajweed Rules Every Muslim Should Know",
      desc: "A guide on essential Tajweed rules that improve your recitation fluency and accuracy with proper pronunciation.",
      date: "October 30, 2024",
      author: "Admin",
      category: "Tajweed",
      image: tajweed,
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={blogBanner}
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            Islamic Blog
          </h1>
          <p className="text-green-50 text-lg mt-4 drop-shadow-xl">
            Knowledge that inspires hearts and strengthens Imaan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Blog Posts (Left side) */}
        <div className="md:col-span-2 space-y-12">

          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden group transition hover:shadow-xl"
            >
              <img
                src={post.image}
                alt="Blog"
                className="w-full h-64 object-cover group-hover:scale-[1.03] transition"
              />

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-2">
                    <FaCalendar /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaUser /> {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaTag /> {post.category}
                  </span>
                </div>

                <h2 className="font-playfair text-2xl font-bold mb-3 text-secondary">
                  {post.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4">{post.desc}</p>

                <button className="text-primary font-semibold flex items-center gap-2 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Sidebar (Right side) */}
        <aside className="space-y-12">

          {/* Search */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="font-playfair text-xl font-bold mb-4">Search</h3>
            <div className="flex items-center bg-white shadow rounded-xl px-4">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search blog..."
                className="w-full py-3 px-2 outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="font-playfair text-xl font-bold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {["Quran Education", "Tajweed", "Online Learning", "Hadith", "Islamic Lifestyle"].map(
                (cat) => (
                  <span
                    key={cat}
                    className="px-4 py-2 bg-white shadow text-primary rounded-xl cursor-pointer hover:bg-primary hover:text-white transition"
                  >
                    {cat}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Featured Article */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="font-playfair text-xl font-bold mb-4">Featured Topic</h3>
            <div className="rounded-xl overflow-hidden shadow">
              <img src={tajweedCover} alt="" className="h-40 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-playfair text-lg font-bold">
                  Why Tajweed Is Important in Quran Recitation?
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Tajweed protects the beauty and purity of Quranic recitation.
                </p>
                <button className="text-primary font-semibold mt-3 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default Blog;
