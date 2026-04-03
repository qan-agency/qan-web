<script lang="ts">
    const routes = [
        { title: 'Home', url: '' },
        { title: 'Articles', url: 'articles' }
    ];
</script>

<div class="flex flex-col gap-12 bg-black w-60 h-screen border-r 
            border-[#252525] p-12">
    <h1 class="text-[32px] tracking-[20%]">QAN___</h1>
    <div class="flex flex-col">
    {#each routes as route (route.title)}
        <button onclick={() => window.location.href = route.url } 
                class="text-left h-12">{ route.title }</button>
    {/each}
    </div>
</div>