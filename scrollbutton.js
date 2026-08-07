function createScrollButtons() {
  const goTopBtn = document.createElement("button");
  goTopBtn.id = "goTopBtn";
  goTopBtn.className =
    "bg-slate-950 text-red-500 border-b-2 border-red-500 p-2 rounded-full shadow-lg shadow-black hover:bg-gray-900 transition duration-300 transform hover:scale-110 focus:outline-none hidden";
  goTopBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
</svg>`;
  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const goBottomBtn = document.createElement("button");
  goBottomBtn.id = "goBottomBtn";
  goBottomBtn.className =
    "border-t-2 border-red-600 bg-slate-950 text-red-500 p-2 rounded-full shadow-lg shadow-black hover:bg-gray-900/50 transition duration-300 transform hover:scale-110 focus:outline-none";
  goBottomBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
</svg>`;
  goBottomBtn.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
  const scrollContainer = document.createElement("div");
  scrollContainer.id = "scrollContainer";
  scrollContainer.className ="fixed bottom-16 right-4 flex flex-col space-y-3 z-30";
  scrollContainer.appendChild(goTopBtn);
  scrollContainer.appendChild(goBottomBtn);
  document.body.appendChild(scrollContainer);
  const toggleButtons = () => {
    if (window.scrollY > 200) {
      goTopBtn.classList.remove("hidden");
    } else {
      goTopBtn.classList.add("hidden");
    }
    const isNearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (isNearBottom) {
      goBottomBtn.classList.add("hidden");
    } else {
      goBottomBtn.classList.remove("hidden");
    }
  };
  window.addEventListener("scroll", toggleButtons);
  window.addEventListener("load", toggleButtons);
}
createScrollButtons();
