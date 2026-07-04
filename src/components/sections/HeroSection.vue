<template>
  <section class="relative overflow-hidden pt-20">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_30%)]"></div>

    <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Full-Stack .NET Developer
        </p>

        <h1 class="text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I’m Lorna.
          <span class="block text-slate-400">I build useful software.</span>
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          I create modern web and mobile applications using C#, Blazor, .NET MAUI,
          Azure, SQL Server, Vue, Tailwind, and clean API integrations.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            class="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            class="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div class="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
        <div class="mb-4 flex gap-2">
          <span class="h-3 w-3 rounded-full bg-red-400"></span>
          <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span class="h-3 w-3 rounded-full bg-green-400"></span>
        </div>

        <pre class="overflow-x-auto rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-300"><code><span class="text-purple-400">public class</span> <span class="text-cyan-300">Developer</span>
{
    <span class="text-purple-400">public string</span> Name => <span class="text-emerald-300">"Lorna Fatmi"</span>;

    <span class="text-purple-400">public string[]</span> Stack =>
    [
        <span class="text-emerald-300">"C#"</span>,
        <span class="text-emerald-300">"Blazor"</span>,
        <span class="text-emerald-300">".NET MAUI"</span>,
        <span class="text-emerald-300">"Vue"</span>,
        <span class="text-emerald-300">"Azure"</span>
    ];

    <span class="text-purple-400">public void</span> Build() =>
        Ship(<span class="text-emerald-300">"clean, scalable software"</span>);
}</code></pre>
      </div>
    </div>
  </section>
</template>