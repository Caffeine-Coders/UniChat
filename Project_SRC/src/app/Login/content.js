export default function content() {
    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-1/4 h-60">
        <div class="p-6">
            <div class="block mb-2 text-4xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Sign In
            </div>
        </div>
        <div class="p-6 pt-0 mt-5">
            <a class="inline-flex align-middle items-center w-10/12 justify-center px-5 py-3 text-base text-xl text-center text-black bg-slate-200 rounded-lg hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100" href="/prof">    
                Sign in with 
                <img class="w-6 h-6 ml-3" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
               
            </a>
        </div>
        <div class="text-sm -mt-5">
            Don't have an account? 
            <a class="ml-1 text-blue" href="/prof/signup">Sign up</a>
        </div>
        </div>  
    </div>
    )
  }