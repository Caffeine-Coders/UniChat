import Content from "./content"
export default function Confirmation() {
    return (
        <div class="container my-12 mx-auto lg:px-60 md:px-12">
            <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
                <li class="flex whitespace-nowrap md:w-full items-center text-discordpurple-200 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-8">
                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                        Create a Project
                    </span>
                </li>
                <li class="flex whitespace-nowrap md:w-full items-center text-discordpurple-200 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-8">
                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                        Project <span class="hidden sm:inline-flex sm:ms-2">Details</span>
                        </span>
                </li>
                <li class="flex items-center text-discordpurple-200">
                    <span class="me-2">3</span>
                    Confirmation
                </li>
            </ol>

            <Content/>
            <div class=" mt-20 ">
            <a class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-2 border-black rounded-lg hover:bg-slate-300 focus:ring-4 focus:ring-blue-100" href="/prof/details">    
                    <span> Back</span>
                </a>
                <a class="inline-flex float-right items-center justify-center px-5 py-3 text-base font-medium text-center text-discordgreen-100 border-2 border-black rounded-lg hover:bg-slate-200 focus:ring-4 focus:ring-blue-100 group" href="/prof/copy">    
                    Create Project 
                    <svg class="w-5 h-5 ms-2 group:text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="check"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" points="216 72.005 104 184 48 128.005" ></polyline></svg>
                </a>
            </div>
        </div>
    )
  }