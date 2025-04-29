import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dana Hafez | Software Engineer</title>
      </Head>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-blue-500 text-white">
          <h1 className="text-5xl font-bold">Dana Hafez</h1>
        </section>

        {/* About Me */}
        <section className="p-10">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p>Software Engineer based in Riyadh, KSA...</p>
        </section>

        {/* Add other sections similarly */}
      </main>
    </div>
  );
}
