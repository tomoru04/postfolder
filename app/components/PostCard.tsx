"use client";

import { useEffect, useRef, useState } from "react";
import PostCardSkeleton from "./PostCardSkeleton";

interface PostCardProps {
  url: string;
  index: number;
}

export default function PostCard({ url, index }: PostCardProps) {
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

  if (!isVisible) {
    return <PostCardSkeleton />;
  }

  // Convert x.com URLs to twitter.com for embed compatibility
  const twitterUrl = url.replace('x.com', 'twitter.com');

  return (
    <div className="w-full flex justify-center" ref={containerRef}>
      <blockquote className="twitter-tweet">
        <a href={twitterUrl} />
      </blockquote>
    </div>
  );
}
