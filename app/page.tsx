import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">

      {/* Content wrapper */}
      <div className="flex-1">
        
        {/* Hero */}
        <section className="text-center py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hey! I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                your FriendlyAppDev
              </span>
            </h1>

            <p className="text-lg text-gray-600">
              I build gamified apps that I would actually love to use. Simple, engaging, and designed to make everyday things feel fun.
            </p>
          </div>
        </section>

        {/* App Section */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            
            <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-all">
              
              {/* Icon */}
              <div className="w-[150px] h-[150px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shrink-0">
                🎯
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-3">
                  Daily 3 Wins
                </h2>

                <p className="text-gray-600 mb-6">
                  Too many tasks can feel overwhelming. Daily 3 Wins helps you cut through the noise by focusing on the three most important wins for your day, turning productivity into a simple, rewarding habit.
                </p>

                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow"
                >
                  View on Google Play
                </a>
              </div>

            </div>

          </div>
        </section>

      </div>

      <footer className="text-center py-8 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          
          <span>
            © {new Date().getFullYear()} FriendlyAppDev. All rights reserved.
          </span>

          <span className="hidden md:inline">•</span>

        <Link href="/privacy-policy">Privacy Policy</Link>

        </div>
      </footer>

    </main>
  );
}