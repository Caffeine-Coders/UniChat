import Content from "./content"
export default function Create() {
    return (
        <div class="container my-12 mx-auto lg:px-60 md:px-12">
            <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
                <li class="flex whitespace-nowrap md:w-full items-center text-discordpurple-200 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-8">
                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
                        <span class="me-2">1</span>
                        Create a Project
                    </span>
                </li>
                <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span class="me-2">2</span>
                        Project <span class="hidden sm:inline-flex sm:ms-2">Details</span>
                </li>
                <li class="flex items-center">
                    <span class="me-2">3</span>
                    Confirmation
                </li>
            </ol>
            
            <Content/>
            <div class=" mt-20 ">
            <a class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-red-700 border border-2 border-black rounded-lg bg-white hover:bg-slate-300 focus:ring-4 focus:ring-blue-100" href="/te@cher/prof">    
                    <p class="font-bold mr-3">X </p> <span> Cancel</span>
                </a>
                <a class="inline-flex float-right items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-discordpurple-100 rounded-lg hover:bg-discordpurple-200 focus:ring-4 focus:ring-blue-100" href="/te@cher/prof/details">    
                    Continue
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    )
  }