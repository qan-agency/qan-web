<script lang="ts">
	import Menu from '$lib/components/articles/Menu.svelte';

    let { data } = $props();

    const TextContent = data.articleContent;
</script>

<main class="flex flex-row">
    <Menu />
    <div class="article-contents p-12">
        <TextContent />
    </div>
</main>

<style>
    .article-contents :global(h1) {
        font-size: 3rem;
    }

    .article-contents :global(h2) {
        font-size: 1.5rem;
    }
</style>