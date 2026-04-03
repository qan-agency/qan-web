<script lang="ts">
	import { navigate } from "../../../utils";

    const { title, link, desc, className } : {
        title: string,
        link: string,
        desc: string,
        className?: string,
    } = $props();
</script>



<button class={"text-left bg-[#181818] p-6 cursor-pointer " + className} 
     onclick={() => navigate(link) }>
    <h1 class="text-[32px]">{title}</h1>
    <p class="text-[14px]">{desc}</p>
</button>