"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const blogs = [
  {
    id: 1,
    title: "Exploring the Sacred Ganga in Haridwar",
    content: "The Ganges river holds immense religious significance in Haridwar. In this blog, we delve into its sacredness and the many rituals performed at its ghats.",
    image: "https://images.unsplash.com/photo-1641107699881-faab3a70b6fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "The History of Har Ki Pauri",
    content: "Har Ki Pauri is one of the most famous ghats in Haridwar. This blog takes you through its history and the cultural importance it holds for pilgrims.",
    image: "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "A Journey to Chandi Devi Temple",
    content: "Located atop a hill, Chandi Devi Temple is an iconic pilgrimage site. Learn about the temple's history and the stunning views it offers.",
    image: "https://haridwarlive-storage.s3.ap-south-1.amazonaws.com/1740598569794-chandi-devi-temple-haridwar-tourism-entry-fee-timings-holidays-reviews-header.jpg"
  },
  {
    id: 4,
    title: "Exploring the Rich Culture of Haridwar",
    content: "Haridwar is not just about religion but also a hub of cultural diversity. Discover its vibrant culture, festivals, and local traditions.",
    image: "https://images.unsplash.com/photo-1724433789678-2ac769239bbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Haridwar's Famous Food: A Taste of Tradition",
    content: "From chaat to kachoris, Haridwar offers a range of delicious local dishes. Explore the food culture that makes the city a foodie’s paradise.",
    image: "https://images.unsplash.com/photo-1672477179695-7276b0602fa9?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Best Places to Stay in Haridwar",
    content: "Looking for the perfect place to stay in Haridwar? This blog highlights some of the best accommodations, from budget to luxury options.",
    image: "https://haridwarlive-storage.s3.ap-south-1.amazonaws.com/1740599524401-outside_goverdhan.jpg"
  },
  {
    "id": 7,
    "title": "A Spiritual Retreat in the Lush Greens of Haridwar",
    "content": "Haridwar isn’t just about temples and ghats. In this blog, we explore the serene and peaceful retreats in the lush greens surrounding Haridwar that are perfect for meditation and rejuvenation.",
    "image": "https://images.unsplash.com/photo-1563124155-dbc34ba9bedb?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 8,
    "title": "The Temples of Haridwar: A Pilgrim’s Guide",
    "content": "Haridwar is home to numerous sacred temples. This blog provides an overview of the most significant temples and shrines in the city and their spiritual significance.",
    "image": "https://haridwarlive-storage.s3.ap-south-1.amazonaws.com/1740599885354-1690791327600-Shri-Bilkeshwar-Mahadev-Temple-Haridwar-Uttarakhand.jpg"
  },
  {
    "id": 9,
    "title": "Night Aarti at Har Ki Pauri",
    "content": "One of the most mesmerizing experiences in Haridwar is the Ganga Aarti at Har Ki Pauri. This blog takes you through the evening rituals and the spiritual aura that fills the air.",
    "image": "https://images.unsplash.com/photo-1719948077337-40447e472c85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 10,
    "title": "Haridwar’s Local Markets: A Shopper’s Paradise",
    "content": "From handicrafts to spiritual paraphernalia, Haridwar's local markets offer an eclectic mix of products. Explore the best places to shop and what to buy when in Haridwar.",
    "image": "https://images.unsplash.com/photo-1666507856867-323a686eabd1?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 11,
    "title": "The Ganga River: More Than Just Water",
    "content": "The Ganga River holds deep cultural and spiritual meaning. This blog delves into its role in Indian culture, the significance of its water, and its impact on the people of Haridwar.",
    "image": "https://images.unsplash.com/photo-1725600090866-dc591ddf4957?q=80&w=2367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const BlogPage = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/blog/${id}`);  // Navigate to individual blog page
  };

  return (
    <div className="bg-gray-100 py-20 pt-36 min-h-screen">
      <div className="container mx-auto px-4 py-10 pt-4 max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-[#343333]">Haridwar Blogs</h1>
          <p className="text-lg text-gray-700 mt-4">
            Dive deep into the rich culture, history, and experiences of Haridwar through these blogs.
          </p>
        </div>

        {/* Adjust the grid to display 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"  
                width={200}
                height={100}
              />
              <div className="p-4"> {/* Reduced padding to make the cards smaller */}
                <h2 className="text-lg font-semibold text-[#343333]">{blog.title}</h2>
                <p className="text-gray-600 mt-2 text-sm">{blog.content.substring(0, 100)}...</p> {/* Shortened preview */}
                <button
                  onClick={() => handleClick(blog.id)}
                  className="mt-4 text-blue-500 hover:underline text-sm"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
