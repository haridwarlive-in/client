import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar } from "lucide-react";
import ShareButton from "@/components/ShareButton";

// Sample news data
const news = [
  ...Array(10).fill(0).map((_, index) => ({
    slug: `news-article-${index + 1}`,
    title: `News Article ${index + 1}`,
    date: new Date(2024, 2, 20 - index).toISOString(),
    category: ["Events", "Festival", "Tourism"][index % 3],
    content: `This is a detailed content for News Article ${
      index + 1
    }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a turpis est. 
    Maecenas et felis eget justo condimentum fermentum nec non erat. Proin vestibulum viverra dolor vel vehicula.`,
    image: `https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    tags: ["Breaking News", "Haridwar", "Tourism"],
  })),
];

// Type for the params object
type Params = {
  slug: string;
};

// Generate static params for all news articles
export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

// Main component
export default function NewsDetailPage({ params }: { params: Params }) {
  const { slug } = params;

  // Find the selected news article
  const selectedNews = news.find((item) => item.slug === slug);

  if (!selectedNews) {
    notFound(); // Trigger Next.js 404 page if slug is invalid
  }

  // Filter other news excluding the selected one
  const otherNews = news.filter((item) => item.slug !== slug);

  // URL for sharing
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/news/${slug}`;

  return (
    <div className="container mx-auto px-4 py-32 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="lg:w-2/3">
        <Image
          src={selectedNews.image}
          alt={selectedNews.title}
          className="w-full h-96 object-cover rounded-md"
          width={1200}
          height={600}
        />
        <div className="py-6">
          <h1 className="text-4xl font-bold mb-4">{selectedNews.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{new Date(selectedNews.date).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedNews.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-800 leading-relaxed mb-4">
            {selectedNews.content}
          </p>
          <p className="text-gray-800 leading-relaxed">
            Additional content about the news, including more details, context,
            and commentary on the topic. This allows the user to dive deeper
            into the story.
          </p>
          
          {/* Share buttons */}
          <ShareButton url={shareUrl} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Other News</h2>
        <ul className="space-y-4">
          {otherNews.map((item) => (
            <li key={item.slug}>
              <Link href={`/news/${item.slug}`} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <div className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
