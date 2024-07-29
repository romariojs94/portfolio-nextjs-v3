import Link from 'next/link';

// app/blog/[slug]/page.js
export default function PostPage({ params }) {
  const { slug } = params;

  // Simulação de dados de posts
  const posts = {
    'hello-world': {
      title: 'Hello World',
      content:
        '<p>Salve, mundi!</p>',
    },
    'second-post': {
      title: 'Second Post',
      content: 'This is the content of the second post.',
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Post Não encontrado</h1>
      </div>
    );
  }
  return (
    <>
      <div className="max-w-[800px] mx-auto my-24 p-12 border-2 border-t-gray-300 h-[calc(100vh-90px)]">
        <Link href="/#blog" className="font-normal text-lg">
          ← Voltar
        </Link>
        <h1 className="text-3xl py-3 font-bold">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
}
