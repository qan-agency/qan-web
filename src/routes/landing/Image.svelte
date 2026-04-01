<script lang="ts">
    const { className, width, redFilter } : {
        className?: string;
        width?: string;
        redFilter?: boolean;
    } = $props();

    const url = "https://preview.redd.it/im-in-love-with-my-konik-pony-v0-7t2eklu84hxc1.jpg?width=640&crop=smart&auto=webp&s=4c20fbd441530766ba1a070dc6c8a0fabc4bc586";
</script>

<div class={className} style={`width: ${width}; position: relative;`}>
    <img src={url} class="object-contain w-full h-full grayscale invert" />
    {#if redFilter}
        <div class="absolute mix-blend-darken top-0 left-0 bg-[#701e20]/96 w-full h-full" />
    {/if}
</div>