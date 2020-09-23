<script lang="ts">
  export let color: string = 'var(--main-color)';
</script>

<style>
  div {
    padding: 10px;
    border: 1px solid;
  }
</style>

<div style="border-color: {color}">
  <slot />
</div>
