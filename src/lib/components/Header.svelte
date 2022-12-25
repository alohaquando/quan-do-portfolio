<nav
  class="sticky top-0 flex items-center h-16">
  <!--  Links  -->
  <div class="z-20 order-1 flex flex-grow place-content-between items-center px-6">
    <a href="/"
       class="text-2xl font-medium">
      Quân's Portfolio
    </a>
    <div class="font-medium space-x-6">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/case-studies/grove/expandable-card-component">Card component</a>
    </div>
  </div>

  <!--  Background Blur  -->
  <div
    class="nav-bg absolute top-0 left-0 z-10 h-20 w-full backdrop-blur "></div>
  <div
    class="nav-bg absolute top-0 left-0 z-0 h-20 w-full bg-white dark:bg-black opacity-50"></div>

</nav>

<!--Full header blur, pretty but basic-->
<!--sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-black/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-black/75-->


<style>
    .nav-bg {
        mask-image: linear-gradient(#0E0E0E 50%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%);
    }

</style>