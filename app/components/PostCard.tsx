"use client";

import { Post } from "@/app/data/posts";
import { useEffect, useRef, useState } from "react";
import PostCardSkeleton from "./PostCardSkeleton";

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Stagger the appearance of each card
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (isVisible && containerRef.current && (window as any).twttr) {
      // Load the Twitter widget for this specific tweet
      (window as any).twttr.widgets.load(containerRef.current);
    }
  }, [isVisible]);

  // Parse HTML to extract blockquote content and convert to JSX
  const getBlockquoteComponent = (html: string) => {
    // Extract the lang attribute
    const langMatch = html.match(/lang="([^"]+)"/);
    const lang = langMatch ? langMatch[1] : "ja";

    return (
      <blockquote className="twitter-tweet" data-lang={lang}>
        <a href={`https://twitter.com/${post.handle.slice(1)}/status/${post.tweetId}`} />
      </blockquote>
    );
  };

  if (!isVisible) {
    return <PostCardSkeleton />;
  }

  return (
    <div className="w-full flex justify-center" ref={containerRef}>
      {getBlockquoteComponent(post.html)}
    </div>
  );
}
