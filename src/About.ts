export function About() {
  return `
<main class="container mx-auto px-6 py-8 max-w-6xl">
  <section id="About" class="rounded-lg p-5 flex flex-col md:flex-row items-start gap-8 ">
    <!-- ส่วนรูปภาพ (ด้านซ้าย) -->
    <div class="w-full md:w-1/4 flex justify-center">
      <img src="https://github.com/Boom-Tris/portfolio/blob/main/img/boomTris.png?raw=true" alt="boom tris" class="max-w-xs md:max-w-md"/>
    </div>

    <!-- ส่วนเนื้อหา (ด้านขวา) -->
    <div class="w-full md:w-3/4 py-5 px-16">  <!-- ลบ mt-16 และ py-16 ที่อาจทำให้มีช่องว่างมากเกินไป -->
      <h1 class="text-4xl font-bold text-fffff mb-6">
        <span class="font-bold">About Me</span>
      </h1> 

      <div class="prose prose-lg text-[#71717A]">
    
    <p class="mb-4">
        Hi! I'm a passionate developer with hands-on experience in a wide range of programming languages and technologies. While I'm currently still studying and growing in the field, I've already built a solid foundation working with Python, C++, C, HTML, CSS, JavaScript, and WordPress.
    </p>
  
    <p class="mb-4">
I enjoy crafting both frontend and backend solutions that are efficient, user-friendly, and scalable. Lately, I’ve been diving deeper into the world of Artificial Intelligence exploring ways to integrate smart features and automation into my projects whenever possible.
    </p>

    <p class="mb-4">
Whether it's a web application, a system tool, or an experimental side project, I love turning ideas into real, working code. I'm constantly learning, improving, and challenging myself to grow as a developer every day.
    </p>

    <p class="mb-4">
 You can check out some of the things I’ve built (and currently building) on my GitHub  where I share projects, experiments, and code I’m proud of. Feel free to drop by and say hi!
    </p>


    </div>


    </div>
   
  </section>
</main>
    `;
}
