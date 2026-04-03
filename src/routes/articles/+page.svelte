<script lang="ts">
	import ArticleBlock from '$lib/components/articles/ArticleBlock.svelte';
	import Menu from '$lib/components/articles/Menu.svelte';

    const { data } = $props();

    // for description as for now
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et elementum erat. Vestibulum ut turpis eget orci fringilla sagittis in non felis. Sed elementum, sem ut rutrum gravida, nisi lectus convallis ante, nec mollis elit metus a felis. Pellentesque posuere lectus in aliquet congue. Phasellus venenatis arcu ac pharetra porta. Curabitur vel lectus tristique, interdum libero eget, cursus enim. Sed et metus efficitur dolor placerat sodales."
</script>

<main class="flex flex-row">
    <Menu />
    <div class="flex flex-col gap-4">
        {#each data.articleList as article (article)}
            <ArticleBlock title={article.title ?? ""} link={"qan-web/articles/" + article.slug}
             desc={loremIpsum} />
        {/each}
    </div>
</main>