import { Contact } from "./Contact";

export function ContactMe() {
    return `
        <main class="bg-white text-fffffff">
            <div id="ContactMe" class="container mx-auto px-6 py-12 max-w-6xl">
                <section class="mb-12">
                    <h2 class="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                    
                    <form 
                        action="https://formspree.io/f/mjkylbrb" 
                        method="POST"
                        class="grid md:grid-cols-2 gap-12"
                    >
                        <!-- Left side - Form -->
                        <div class="space-y-4 h-full flex flex-col">
                            <div>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your name" 
                                    class="w-full bg-white border-2 border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                                    required
                                >
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    class="w-full bg-white border-2 border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                                    required
                                >
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="Subject" 
                                    placeholder="Subject" 
                                    class="w-full bg-white border-2 border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                            <div class="flex-grow">
                                <textarea 
                                    name="message" 
                                    placeholder="message" 
                                    class="w-full bg-white border-2 border-black rounded px-4 py-3 h-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
                                    required
                                ></textarea>
                            </div>
                            <div class="flex items-center gap-4 pt-4">
                                <button 
                                    type="submit" 
                                    class="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded transition duration-200 border-2 border-black"
                                >
                                    Send
                                </button>
                                
                            </div>
                        </div>

                        <!-- Right side - Text content -->
                        <div class="space-y-6 h-full flex flex-col justify-between">
                            <div>
                                <h3 class="text-4xl font-semibold text-purple-600"  >Let’s have a conversation.<br></h3>
                                <p class="text-gray-600 mt-4">
                                    I create intuitive and engaging interactive experiences by blending creative freedom with thoughtful design—making every interaction feel personal and unforgettable.
                                </p> 
                                <p class="text-gray-700 font-medium pt-2">Teerapat.jontama@gmail.com</p>
                                ${Contact()}
                            </div>
                          
                        </div>
                    </form>
                </section>
            </div>
        </main>
    `;
}