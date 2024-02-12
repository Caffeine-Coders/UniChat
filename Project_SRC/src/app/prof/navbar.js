import Link from "next/link"
export default function Navdash() {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6 bg-white">
            <Link href="/">
                <button class="flex items-center flex-shrink-0 mr-6">
                    <span class="font-bold text-2xl tracking-wide">UniChat</span>
                </button>
            </Link>
            <button class="flex items-center gap-4">
                <img class="w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
                <div class="text-sm">
                    <div>Professor Name</div>
                </div>
            </button>
        </nav>
    )
  }