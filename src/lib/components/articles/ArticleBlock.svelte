<script lang="ts">
    const { title, desc, className } : {
        title: string,
        desc: string,
        className?: string,
    } = $props();
</script>



<div class="bg-[#181818] p-6">
    <h1 class="text-[32px]">{title}</h1>
    <p class="text-[14px]">{desc}</p>
</div>