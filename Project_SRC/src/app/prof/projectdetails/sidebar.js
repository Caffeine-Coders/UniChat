import Link from 'next/link'
export default function Siderbar(){
    return(
        <aside class="fixed top-0 left-0 w-60 h-screen z-40 bg-gray-50">
            <nav class="flex items-center justify-between flex-wrap p-6 pb-4 bg-white">
            <Link href="/">
                <button class="flex items-center flex-shrink-0 mr-6">
                    <span class="font-bold text-2xl tracking-wide">UniChat</span>
                </button>
            </Link>
        </nav>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="h-full px-3 py-4 overflow-y-auto">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a class="cursor-pointer flex items-center text-gray-900 p-2 hover:bg-gray-100 rounded-lg group">
                        <svg class="w-6 h-6 text-gray-800 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 5.6c-1.4-.7-2.8-1.1-4.2-1.3l-.5 1c-1.5-.2-3-.2-4.6 0l-.5-1c-1.4.2-2.8.6-4.1 1.3a17.4 17.4 0 0 0-3 11.6 18 18 0 0 0 5 2.5c.5-.5.8-1.1 1.1-1.7l-1.7-1c.2 0 .3-.2.4-.3a11.7 11.7 0 0 0 10.2 0l.4.3-1.7.9 1 1.7c1.9-.5 3.6-1.4 5.1-2.6.4-4-.6-8.2-3-11.5ZM8.6 14.8a2 2 0 0 1-1.8-2 2 2 0 0 1 1.8-2 2 2 0 0 1 1.8 2 2 2 0 0 1-1.8 2Zm6.6 0a2 2 0 0 1-1.8-2 2 2 0 0 1 1.8-2 2 2 0 0 1 1.8 2 2 2 0 0 1-1.8 2Z"/>
                        </svg>
                            <span class="ms-3">Group Chat</span>
                        </a>
                    </li>
                    <li>
                        <a class=" cursor-pointer flex items-center text-gray-900 p-2 hover:bg-gray-100 rounded-lg group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800 transition duration-75 group-hover:text-gray-900" data-name="Layer 1" viewBox="0 0 32 32" id="google-drive"><path fill="#4285f4" d="M29.5,21l-3.1708,5.5489A3.07,3.07,0,0,1,23.6459,28H8.3541a3.07,3.07,0,0,1-2.6833-1.4511L4.3687,24.27,9.7578,21Z"></path><path fill="#00ac47" d="M12.3822,4.13a3.2262,3.2262,0,0,0-1.7067,1.4276L2.9591,18.76a3.07,3.07,0,0,0-.1012,3.0489l1.53,2.4658L9.7579,21,16,10.32Z"></path><path fill="#0066da" d="M9.7578,21H2.568a2.6543,2.6543,0,0,0,.29.8089L4.38,24.2632l-.0115.007L5.6709,26.549A2.8267,2.8267,0,0,0,7.008,27.6974L9.7578,21l-.0081.0049Z"></path><path fill="#ffba00" d="M19.6068,4.13a3.2256,3.2256,0,0,1,1.7066,1.4276L29.03,18.76a3.07,3.07,0,0,1,.1013,3.0489l-1.5295,2.4658L22.2311,21,15.9889,10.32Z"></path><path fill="#ea4435" d="M22.2311,21h7.19a2.6541,2.6541,0,0,1-.29.8089l-1.5224,2.4544.0116.007L26.3181,26.549a2.8272,2.8272,0,0,1-1.3371,1.1484L22.2312,21l.0081.0049Z"></path><path fill="#188038" d="M19.6155,4.1342l.0023-.004a2.7726,2.7726,0,0,0-.3609-.0983L16,4l-3.2569.0319a2.7726,2.7726,0,0,0-.3609.0983,3.0224,3.0224,0,0,0-.367.1666L15.9889,10.32,19.977,4.2993A3.03,3.03,0,0,0,19.6155,4.1342Z"></path></svg>
                            <span class="ms-3">Google Drive</span>
                        </a>
                    </li>
                    <li class="absolute bottom-4">
                        <a class="cursor-pointer flex items-center text-gray-900 p-2 hover:text-discordpurple-200 rounded-lg group">
                        <svg class="w-6 h-6 text-gray-800 transition duration-75 group-hover:text-discordpurple-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 8v3c0 .6-.4 1-1 1H5m11 4h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-7a1 1 0 0 0-1 1v1m4 3v10c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H13c.6 0 1 .4 1 1Z"/>
  </svg>
                            <span class="ms-3">Copy Link</span>
                        </a>
                    </li>
                </ul>
             
            </div>
            
        </aside>
    )
}