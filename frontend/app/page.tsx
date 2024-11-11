export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi, I&apos;m Miles McLenon 👋
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center sm:text-left">
          Welcome to my corner of the internet! I&apos;m a software developer passionate about building great experiences on the web and blockchain.
        </p>

        <div className="flex gap-6 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            href="https://github.com/milesz8"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
            href="https://linkedin.com/in/miles-mclenon"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-black/[.05] dark:bg-white/[.06]">
              <h3 className="font-bold mb-2">Web Development</h3>
              <p className="text-sm">Building modern, responsive web applications with Next.js and other cutting-edge technologies.</p>
            </div>
            <div className="p-6 rounded-lg bg-black/[.05] dark:bg-white/[.06]">
              <h3 className="font-bold mb-2">Smart Contract Development</h3>
              <p className="text-sm">Building secure and efficient smart contracts on Ethereum and other blockchain platforms.</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <p>© 2024 Miles McLenon. All rights reserved.</p>
      </footer>
    </div>
  );
}
