<script lang="ts">
  import { navigating } from '$app/stores';
  import type fbT from '@formbricks/js';
  import { onMount } from 'svelte';

  let formbricks: typeof fbT;

  onMount(() => {
    import('@formbricks/js').then((fb) => {
      formbricks = fb.default;
      formbricks.init({
        environmentId: 'clg6riezp0005lq0hzjimosc7',
        apiHost: 'https://app.formbricks.com',
        debug: true,
      });

      (window as any).formbricks = formbricks;
    });
  });

  $: if ($navigating) formbricks.registerRouteChange();
</script>
