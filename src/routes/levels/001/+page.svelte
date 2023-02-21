<script lang="ts">
  import { onMount } from 'svelte';
  import { createPhaserConfig } from '../createPhaserConfig';
  import { Machine } from '../Machine';

  let game: Phaser.Game;
  let machine: Machine;

  onMount(() => {
    machine = new Machine();
    const config = createPhaserConfig({ scene: [machine] });
    game = new Phaser.Game(config);
  });

  function plunge() {
    machine.plunge();
  }
</script>

<div class="p-4 flex flex-col">
  <div>
    <div class="bg-white border-4 border-black shadow-firm inline-block">
      <div id="game" class="w-[400px] h-[600px]" />
    </div>
  </div>
  <div class="w-[400px] flex justify-end">
    <button
      class="px-4 py-2 bg-amber-300 text-neutral-900 font-bold hover:bg-amber-500"
      on:click={plunge}
    >
      Plunge!
    </button>
  </div>
</div>
