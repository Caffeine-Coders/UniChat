import Link from 'next/link'
export default function Nav() {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6">
            <Link href="/teacher/login">
                <button class="flex items-center flex-shrink-0 mr-6">
                    <span class="font-bold text-2xl tracking-wide font-headx">UniChat</span>
                </button>
            </Link>
        </nav>
    )
  }