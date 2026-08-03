import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-black text-cyan-400">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-5 max-w-xl text-gray-400 leading-8">
          Sorry, the page you are looking for doesn't exist
          or has been moved.
        </p>

        <Link
          href="/"
          className="
            inline-flex
            mt-10
            rounded-xl
            bg-cyan-500
            px-8
            py-4
            font-semibold
            transition
            hover:bg-cyan-400
          "
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}