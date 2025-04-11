
import {Contact} from './Contact'
export function Profile() {
  return `
    <main class="container mx-auto px-6 py-8 max-w-6xl ">
      <section id="Profile"  class="rounded-lg p-5 flex flex-col md:flex-row items-start gap-8 scroll-mt-24">  <!-- เปลี่ยน items-center เป็น items-start -->
        <!-- ส่วนเนื้อหา (ด้านซ้าย) -->
        <div class="w-full md:w-3/4 mt-16 py-16">  <!-- เพิ่ม mt-12 (หรือขนาดที่ต้องการ) -->
         <h1 class="text-4xl font-bold text-fffff mb-6">
  <span class="font-normal">Hello I'm </span> <span class="text-fffff font-bold">TEERPAT JONTAMAT</span>
</h1>


          <div class="prose prose-lg text-[#71717A]">

            <p class="mb-4">
              I'm a passionate developer with hands-on experience in a wide range of programming languages and technologies.
            </p>
            
            <p class="mb-4">
              I'm confident working with <span class="font-semibold text-blue-600">Python</span>, <span class="font-semibold text-blue-600">C++</span>, 
              <span class="font-semibold text-blue-600">C</span>, <span class="font-semibold text-blue-600">HTML</span>, 
              <span class="font-semibold text-blue-600">CSS</span>, <span class="font-semibold text-blue-600">JavaScript</span>, 
              and <span class="font-semibold text-blue-600">WordPress</span>.
            </p>
            
            <p class="mb-4">
              I enjoy building both frontend and backend solutions that are <span class="font-semibold">efficient</span>, 
              <span class="font-semibold">user-friendly</span>, and <span class="font-semibold">scalable</span>.
            </p>
            
            <p class="mb-4">
              I'm also exploring the world of <span class="font-semibold text-purple-600">Artificial Intelligence (AI)</span> — 
              integrating smart features and automation into our projects whenever possible.
            </p>
            
            <p>
              Whether it's a web application, a system tool, or something experimental, 
              I love turning ideas into working code.
            </p>
          </div>
            ${Contact()}
        </div>

        <!-- ส่วนรูปภาพ (ด้านขวา) -->
        <div class="w-full md:w-1/4 flex justify-center">
          <img src="https://github.com/Boom-Tris/portfolio/blob/main/img/M.png?raw=true" alt="boom tris" class="max-w-xs md:max-w-md"/>
        </div>
      </section>
   
      
    </main>
  `;
}