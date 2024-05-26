"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  imageUrl: string;
}

const NewsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getNews"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false); // Once the request is completed (either success or failure), set loading to false
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    // Show shimmer UI while loading
    return (
      <div className="container mx-auto py-8 px-8">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded p-4 animate-pulse"
            >
              <div className="h-4 bg-gray-300 mb-2 rounded"></div>
              <div className="h-4 bg-gray-300 mb-2 rounded"></div>
              <div className="h-4 bg-gray-300 mb-2 rounded"></div>
              <div className="h-4 bg-gray-300 mb-2 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-8 border-2 border-black">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded p-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            <a
              href={item.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;