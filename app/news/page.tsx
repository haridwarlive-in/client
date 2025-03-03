import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import Pagination from "@/components/Pagination";
import BreakingNewsClient from "@/components/BreakingNewsClient";
import { News } from "@/types";
import NewsByCategoryClient from "@/components/NewsByCategoryClient";
import { Suspense } from "react";
import LocaleDate from "@/components/LocaleDate";
import ButtonClient from "@/components/ButtonClient";

export const revalidate = 10
export const dynamic = "force-dynamic";

async function fetchNews(page: number, limit: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news?page=${page}&limit=${limit}`, 
      { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch news");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching news:", error);
    return null;
  }
}

async function fetchTrendingNews() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/trending-news`, 
      { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch news");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching news:", error);
    return null;
  } 
}

interface Props {
  searchParams: Promise<{page?: string}>;
};

async function NewsPage(props: Props) {
  
  const {searchParams} = props;
  const currentPage = Number((await searchParams)?.page) || 1;
  const itemsPerPage = 12;

  const {news, totalPages} = await fetchNews(currentPage, itemsPerPage);
  const trendingNews = await fetchTrendingNews();
  
  if (!news) {
    return <p className="text-center text-gray-700">No latest news available.</p>;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-32 max-md:pt-20 pb-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl max-md:text-xl border-l-yellow-300 py-2 md:py-6 md:px-8 px-4 border-l-4 mb-4 md:mb-8">
          Latest News from <span className="font-bold">Haridwar</span>
        </h1>
        <BreakingNews/>

        {/* Fallback Content */}
        {news.length === 0 ? (
          <p className="text-center text-gray-700">No latest news available.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 w-full lg:grid-cols-5 lg:gap-4 gap-2 md:mb-4">
              {/* Main Article (Left side, bigger) */}
              <div className="lg:col-span-3 flex flex-col items-flex-end gap-2 md:gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <Image
                    src={news[0].image as string}
                    alt={`Image for ${news[0].title}`}
                    className="w-full h-96 object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                    priority
                    width={200}
                    height={100}
                  />
                  <CardHeader className="max-md:p-2 p-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <LocaleDate date={news[0].date} />
                    </div>
                    <CardTitle>
                      {news[0].title}
                    </CardTitle>
                    <span className="inline-block w-fit bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      {news[0].category}
                    </span>
                  </CardHeader>
                  <CardContent className="px-2 py-0">
                    <ButtonClient id={news[0]._id} title={news[0].urlTitle} />
                  </CardContent>
                </Card>
                {/* Right-side Articles (3 articles) placed below the main article */}
              <div className="grid col-span-2 lg:grid-cols-1 gap-2 md:gap-2">
                {news.slice(1, 4).map((item: News, index: number) => (
                  <Card
                    key={item._id}
                    className="overflow-hidden hover:shadow transition-shadow"
                  >
                    <CardHeader className="max-md:p-2 p-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <LocaleDate date={item.date} />
                      </div>
                      <CardTitle className="text-md">
                        {item.title}
                      </CardTitle>
                      <span className="inline-block w-fit bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </CardHeader>
                    <CardFooter className="px-2 py-0">
                      <ButtonClient id={item._id} title={item.urlTitle}/>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              </div>
              {/* Trending News */}
              <div className="col-span-2 rounded-md">
                <h1 className="text-md font-semibold mb-2">Trending News</h1>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 lg:col-span-2">
                {trendingNews.map((item: News, index: number) => (
                  <Card
                    key={item._id}
                    className="overflow-hidden hover:shadow transition-shadow"
                  >
                    <div className="md:text-xl text-yellow-900 p-1 px-2 font-bold w-full bg-yellow-300">
                      {index+1}
                    </div>
                    <CardHeader className="p-2">
                      
                      <div className="flex items-center text-sm text-gray-500 mb-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <LocaleDate date={item.date} />
                      </div>
                      <CardTitle className="text-md">
                        {item.title}
                      </CardTitle>
                      <span className="inline-block w-fit bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </CardHeader>
                    <CardContent className="px-2 py-0">
                      <ButtonClient id={item._id} title={item.urlTitle}/>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            </div>

            {news.length>4 && <h1 className="text-md md:text-xl font-semibold mt-8">Latest Top News</h1>}
            {/* More Articles (Grid below) */}
            <Suspense fallback={<p>Loading articles...</p>}>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-3">
                {news.slice(4).map((news: News) => (
                  <Card
                  key={news.title}
                  className="overflow-hidden hover:shadow transition-shadow"
                >
                  <Image
                    src={news.image as string}
                    alt={`Image for ${news.title}`}
                    className="w-full h-48 object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                    width={200}
                    height={100}
                  />
                  <CardHeader className="p-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <LocaleDate date={news.date} />
                    </div>
                    <CardTitle className="text-md">
                      {news.title}
                    </CardTitle>
                    <span className="w-fit inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      {news.category}
                    </span>
                  </CardHeader>
                  <CardContent className="px-2 py-0">
                    <ButtonClient id={news._id} title={news.urlTitle}/>
                  </CardContent>
                </Card>
                ))}
              </div>
            </Suspense>

            {/* Pagination Controls */}
            <Pagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        )}

        {
          Categories.map((category) => (
            <Suspense key={category} fallback={<p>Loading articles...</p>}>
              <NewsByCategory category={category} />
            </Suspense>
          ))
        }
      </div>
      
    </div>
  );
}

async function fetchNewsByCategory(category: string): Promise<News[]> {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/news/category/${category}`);
    return res.data;
  } catch (error) {
    console.log("Error fetching category news:", error);
    return [];
  }
}

async function NewsByCategory({ category }: { category: string }) {

  const news = await fetchNewsByCategory(category);
  if (news.length === 0) return null;

  return (
    <NewsByCategoryClient news={news} category={category} />
  );
}

async function fetchBreakingNews(): Promise<News[]> {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/news/breaking-news`, {
      headers: { "Cache-Control": "no-store" }, // Ensure fresh data (SSR)
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching breaking news:", error);
    return [];
  }
}

const BreakingNews = async () => {
  const breakingNews = await fetchBreakingNews();

  if(breakingNews.length === 0) return null;

  return (
    <BreakingNewsClient breakingNews={breakingNews} />
  );
}

const Categories: string[] = [
  "Local News",
  "Events",
  "Business & Economy",
  "Health & Wellness",
  "Education",
  "Sports",
  "Entertainment",
  "Weather",
  "Lifestyle",
  "Technology",
  "Transportation",
  "Real Estate",
  "Tourism",
  "Crime & Safety",
  "Environment",
  "Politics",
  "Human Interest",
  "Opinion",
  "Business Directory",
  "Community",
];

export default NewsPage;