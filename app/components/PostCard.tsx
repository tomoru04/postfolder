"use client";

interface PostCardProps {
  html: string;
}

export default function PostCard({ html }: PostCardProps) {
  return (
    <div
      className="w-full flex justify-center"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
