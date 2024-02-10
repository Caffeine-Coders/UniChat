export default function Nav() {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 mr-6">
                <span class="font-bold text-4xl tracking-wide">UniChat</span>
            </div>
            <div class="lg:flex lg:items-center">
                <div>
                    <a href="/login" class="inline-block text-xl px-4 py-2 leading-none rounded hover:border hover:border-slate-500 hover:border-4 ">Login</a>
                </div>
            </div>
        </nav>
    )
  }