import { Contact } from "./Contact";
const formAction = import.meta.env.PUBLIC_FORMSPREE_URL;

export function ContactMe() {
    return `
        <main class="bg-white text-fffffff">
            <div id="ContactMe" class="container mx-auto px-6 py-12 max-w-6xl">
                <section class="mb-12">
                    <h2 class="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                    
                    <form 
                        id="contactForm"  <!-- ใช้ id แทนการใส่ action -->
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
                                    name="website" 
                                    placeholder="Your website (if exists)" 
                                    class="w-full bg-white border-2 border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                            </div>
                            <div class="flex-grow">
                                <textarea 
                                    name="message" 
                                    placeholder="How can I help?*" 
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
                                <h3 class="text-2xl font-semibold">Let's talk for<br></h3>
                                <p class="text-gray-600 mt-4">
                                    I create intuitive and engaging interactive experiences by blending creative freedom with thoughtful design—making every interaction feel personal and unforgettable.
                                </p> 
                                <p class="text-gray-700 font-medium">Teerapat.jontama@gmail.com</p>
                                ${Contact()}
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
        <script>
            // เมื่อฟอร์มถูกส่ง
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault();  // ป้องกันการส่งฟอร์มแบบปกติ

                const formData = new FormData(this);  // เก็บข้อมูลจากฟอร์ม

                fetch('${formAction}', {  // ส่งข้อมูลไปยัง Formspree
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())  // เช็คผลลัพธ์
                .then(data => {
                    alert('Your message has been sent!');
                })
                .catch(error => {
                    alert('There was an error submitting your form.');
                });
            });
        </script>
    `;
}
