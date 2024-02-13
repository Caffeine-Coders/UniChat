import Link from 'next/link'
export default function Nav() {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6">
            <Link href="/">
                <button class="flex items-center flex-shrink-0 mr-6">
                    <span class="font-bold text-2xl tracking-wide font-headx">UniChat</span>
                </button>
            </Link>
            <div class="flex items-center flex-shrink-0 mr-6">
                <div>
                    <a href="/login" class="inline-block px-4 py-2 leading-none border-2 border-transparent rounded hover:border hover:border-slate-500 hover:border-2">Login/Signup</a>
                </div>
            </div>
        </nav>
    )
  }