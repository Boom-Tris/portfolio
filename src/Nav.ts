// src/Nav.ts
import "font-awesome/css/font-awesome.min.css";

export function Nav() {
  return `
    <nav class="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <!-- ส่วนโลโก้และชื่อ -->
        <div class="flex items-center space-x-4">
          <span class="text-xl font-bold text-gray-700 ">Boom.Tris</span>
        </div>

        <div class="hidden md:flex space-x-6" items-center>
          <a href="#About" class="text-gray-600 hover:text-black hover:font-bold transition-colors">About Me</a>
          <a href="#skills" class="text-gray-600 hover:text-black hover:font-bold transition-colors">Skills</a>
          <a href="#Projects" class="text-gray-600 hover:text-black hover:font-bold transition-colors">Project</a>
          <a href="#ContactMe" class="text-gray-600  hover:text-black hover:font-bold transition-colors">Contact Me</a>
          <a href="/cv" class="bg-black text-white px-5 rounded-md hover:bg-white hover:text-black hover:font-bold border border-black transition-colors inline-flex items-center  group">
            CV 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 ml-3 group-hover:fill-black fill-white transition-colors">
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
            </svg>
          </a>
        </div>

        <!-- ปุ่ม Hamburger (แสดงบนมือถือเท่านั้น) -->
        <button id="menu-toggle" class="md:hidden text-gray-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- เมนู Mobile (แสดงเมื่อคลิกปุ่ม Hamburger) -->
      <div id="mobile-menu" class="md:hidden hidden bg-white px-6 py-3 border-t">
        <a href="#About" class="block py-2 text-gray-600 hover:text-black">About Me</a>
        <a href="#skills" class="block py-2 text-gray-600 hover:text-black">Skills</a>
        <a href="#Projects" class="block py-2 text-gray-600 hover:text-black">Project</a>
        <a href="/contact" class="block py-2 text-gray-600 hover:text-black">Contact Me</a>
        <a href="/cv" class="block py-2 text-gray-600 hover:text-black">CV</a>
      </div>
    </nav>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const scrollLinks = document.querySelectorAll('a[href^="#"]'); // เลือกลิงก์ที่มี href เริ่มต้นด้วย #
        
        scrollLinks.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // เอา # ออก
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      });

      // เพิ่ม event listener สำหรับปุ่ม Hamburger
      document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
      });
    </script>
  `;
}
