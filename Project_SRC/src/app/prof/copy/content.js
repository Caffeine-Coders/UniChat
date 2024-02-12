export default function content() {
    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-1/4">
        <div class="p-6">
            <div class="block mb-2 text-2xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Copy Invitation Link
            </div>
            <div class="flex ">
            <div class="relative w-full mt-6">
                <input class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value="unichat.com/invite-students/?/project-name-1/xyz123"/>
                <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-discordpurple-100 rounded-e-lg border hover:bg-discordpurple-200 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg class="w-6 h-6 text-white transition duration-75 group-hover:text-discordpurple-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 8v3c0 .6-.4 1-1 1H5m11 4h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-7a1 1 0 0 0-1 1v1m4 3v10c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H13c.6 0 1 .4 1 1Z"/>
                    </svg>
                </button>
            </div>
        </div>
        </div>
        <div class="p-6 pt-0">
            <a class="inline-flex align-middle items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-discordpurple-100 rounded-lg hover:bg-discordpurple-200 focus:ring-4 focus:ring-blue-100" href="/prof/projectdetails">    
                Continue
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        </div>  
    </div>
    )
  }