import Link from 'next/link';

// app/blog/[slug]/page.js
export default function PostPage({ params }) {
  const { slug } = params;

  // Simulação de dados de posts
  const posts = {
    'hello-world': {
      title: 'First Post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris vel diam pellentesque pulvinar. Integer pulvinar sem sed lacinia malesuada. Donec ultricies placerat lacinia. Mauris volutpat massa semper arcu dapibus, vitae pulvinar tellus tristique. Proin maximus vehicula massa sed facilisis. Aenean pharetra ante vel libero sodales, quis sollicitudin velit viverra. Phasellus dui ex, porttitor non quam ut, lobortis feugiat nunc. Quisque tincidunt id nulla a maximus. Etiam maximus leo sed lacus egestas laoreet. Pellentesque aliquam tempus mauris, sit amet eleifend nibh finibus quis. Integer quis tellus leo. Pellentesque eu posuere est. Duis mollis elit et porttitor accumsan. Donec euismod efficitur facilisis. Morbi non porta quam. Mauris at imperdiet urna. Phasellus pharetra viverra erat, lacinia convallis augue commodo sed. Ut consectetur orci eget metus malesuada pellentesque. Donec rhoncus eu magna quis finibus. Morbi eget molestie nunc. Mauris pharetra ipsum nec semper feugiat. Aenean ex nisl, blandit at justo at, gravida lacinia dui. Proin dignissim aliquet facilisis. Etiam accumsan rutrum quam vel tincidunt. Curabitur in risus ullamcorper, fermentum risus fermentum, pharetra mauris.',
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
      <div className="max-w-[800px] mx-auto my-24 p-12 border-2 border-t-gray-300">
        <Link href="/#blog" className="font-normal text-lg">
          ← Voltar
        </Link>
        <h1 className="text-3xl py-3 font-bold">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
}
