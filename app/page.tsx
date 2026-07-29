
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020617] pt-24 text-white">
        <section className="flex h-[80vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold">
              Welcome 👋
            </h1>

            <p className="mt-6 text-xl text-gray-400">
              My Professional Portfolio
            </p>
          </div>
        </section>
      </main>
    </>
  );
}