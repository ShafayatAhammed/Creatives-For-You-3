/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "pmr-color": "#F44335",
        "pmr-hover-color": "#fa3538",
        "dark-green-color": "#072125",
        "light-pmr-color": "#FC5A5A",
        "dark-blue-color": "#2D3142",
        "light-purple-color": "#757095",
        "footer-text-color": "#20484F",
        "step-green-color": "#00FF84",
      },
      screens: {
        llg: "1200px",
        lmd: "832px",
        xs: "500px",
        lxs: "450px",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5

{
  /* <div class="flex flex-col gap-3 items-center p-3 text-center">
<div>
  <img src="./Images/image 3.png" alt="team-member">
</div>
<h4 class="font-bold text-2xl">Ekta Mahajan</h4>
<p class="text-sm">Founder & C.E.O</p>
<div class="flex gap-2 items-center">
  <img src="./Images/Path.png" alt="phone" class="w-4 h-4 cursor-pointer">
  <img src="./Images/Icon-1.svg" alt="email" class="w-8 h-8 cursor-pointer">
  <img src="./Images/Vector (1).png" alt="linkedin" class="w-4 h-4 cursor-pointer">
</div>
</div>
<div class="flex flex-col gap-3 items-center p-3 text-center">
<div>
  <img src="./Images/image 4.png" alt="team-member">
</div>
<h4 class="font-bold text-2xl">Toby Potter-Drake</h4>
<p class="text-sm">Product Manager Associate</p>
<div class="flex gap-2 items-center">
  <img src="./Images/Path.png" alt="phone" class="w-4 h-4 cursor-pointer">
  <img src="./Images/Icon-1.svg" alt="email" class="w-8 h-8 cursor-pointer">
  <img src="./Images/Vector (1).png" alt="linkedin" class="w-4 h-4 cursor-pointer">
</div>
</div>
<div class="flex flex-col gap-3 items-center p-3 border text-center">
<div>
  <img src="./Images/image 2.png" alt="team-member">
</div>
<h4 class="font-bold text-2xl">Ross Davies</h4>
<p class="text-sm">Corporate Growth Associate</p>
<div class="flex gap-2 items-center">
  <img src="./Images/Path.png" alt="phone" class="w-4 h-4 cursor-pointer">
  <img src="./Images/Icon-1.svg" alt="email" class="w-8 h-8 cursor-pointer">
  <img src="./Images/Vector (1).png" alt="linkedin" class="w-4 h-4 cursor-pointer">
</div>
</div>
<div class="flex flex-col gap-3 items-center p-3 text-center">
<div>
  <img src="./Images/image 1.png" alt="team-member">
</div>
<h4 class="font-bold text-2xl">Leo crozier</h4>
<p class="text-sm">Software Developer</p>
<div class="flex gap-2 items-center">
  <img src="./Images/Path.png" alt="phone" class="w-4 h-4 cursor-pointer">
  <img src="./Images/Icon-1.svg" alt="email" class="w-8 h-8 cursor-pointer">
  <img src="./Images/Vector (1).png" alt="linkedin" class="w-4 h-4 cursor-pointer">
</div>
</div> */
}
