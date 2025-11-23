import { Post } from "@/app/data/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  // Parse HTML to extract blockquote content and convert to JSX
  const getBlockquoteComponent = (html: string) => {
    // Extract the lang attribute
    const langMatch = html.match(/lang="([^"]+)"/);
    const lang = langMatch ? langMatch[1] : "ja";

    return (
      <blockquote className="twitter-tweet" data-lang={lang}>
        <a href={`https://twitter.com/${post.handle.slice(1)}/status/${post.tweetId}`}>
          View on Twitter
        </a>
      </blockquote>
    );
  };

  return (
    <div className="w-full flex justify-center">
      {getBlockquoteComponent(post.html)}
    </div>
  );
}
