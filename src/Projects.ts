export function Projects() {
    return `
      <main class="bg-black text-white">
        <div id="Projects" class="container mx-auto px-6 py-8 max-w-6xl scroll-mt-24">
          <section class="mb-12">
            <h2 class="text-3xl font-bold mb-8 text-center">My Projects</h2>
          </section>

          <!-- PJ1 start -->
          <section class="rounded-lg p-5 flex flex-col md:flex-row gap-8 mb-16">
            <!-- Image -->
            <div class="w-full md:w-1/3 flex justify-center items-center">
              <img src="https://github.com/Boom-Tris/portfolio/blob/main/img/ai.png?raw=true" alt="AI Web App" class="w-full max-w-xs md:max-w-sm object-contain"/>
            </div>

            <!-- Content -->
            <div class="w-full md:w-2/3">
              <h1 class="text-4xl font-bold mb-6">
                <span class="font-bold text-purple-400">AI Web App</span>
              </h1>
              <div class="prose prose-lg text-gray-200 max-w-none">
                <p class="mb-4">
                  An innovative web application that leverages advanced artificial intelligence to deliver practical solutions across multiple domains. This platform is designed to bring real-world value through intelligent features that enhance both audio processing and financial data analysis.
                </p>
                <p>
                  Key features include high-precision separation of speech and music using advanced audio signal processing techniques, and stock price trend prediction powered by machine learning models. These tools are developed to support smarter decision-making and showcase the real potential of applied AI in everyday use.
                </p> <br>
                
              </div>
               <!-- GitHub -->
                  <a href="https://github.com/Boom-Tris/Intelligent-System.git" target="_blank" class="group w-12 h-12 rounded-full text-white border border-gray-900 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
  <svg class="w-6 h-6 text-white group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
</a>

            </div>

          </section>
          <!-- PJ1 end -->

          <!-- PJ2 start -->
          <section class="rounded-lg p-5 flex flex-col md:flex-row gap-8 items-start">
            <!-- Content -->
            <div class="w-full md:w-2/3">
              <h1 class="text-4xl font-bold mb-6">
                <span class="text-red-400 font-bold">Patient Notification System via LINE Official Account</span>
              </h1>
              <div class="prose prose-lg text-gray-200 max-w-none">
                <p class="mb-4">
                  Developed as part of an academic course project, this Patient Notification System utilizes Node.js for backend development and integrates the LINE Messaging API to provide patients with automated reminders for medical appointments and medication schedules, ensuring timely and direct communication through the LINE Official Account platform.
                </p>
              </div>
                        <a href="https://github.com/Boom-Tris/Boom-Tris-hospital.git" target="_blank" class="group w-12 h-12 rounded-full text-white border border-gray-900 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300">
  <svg class="w-6 h-6 text-white group-hover:text-red-400" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
</a>
            </div>

            <!-- Image -->
            <div class="w-full md:w-1/3 flex justify-center items-center">
              <img src="https://github.com/Boom-Tris/portfolio/blob/main/img/line%20oa.png?raw=true" alt="LINE OA Project" class="w-full max-w-xs md:max-w-sm object-contain"/>
            </div>
          </section>
          <!-- PJ2 end -->

        </div>
      </main>
    `;
}
