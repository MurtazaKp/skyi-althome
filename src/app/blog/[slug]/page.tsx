import { Metadata } from 'next';
import BlogDetailClient from '../../components/BlogDetailClient';
import { getBlogPost } from '../../lib/blog';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: "Post Not Found - AltHome Journal",
    };
  }

  return {
    title: `${post.title} - AltHome Journal`,
    description: post.description,
  };
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
