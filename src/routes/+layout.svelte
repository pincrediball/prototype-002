<script>
  import '../app.css';

  // We are really a Single Page Application, because we
  // are a game. So we disable SSR by default.
  export const ssr = false;
</script>

<div
  class="
  min-h-screen flex flex-col
  bg-gradient-to-br from-neutral-700 to-neutral-900 text-stone-50
"
>
  <slot />
</div>
