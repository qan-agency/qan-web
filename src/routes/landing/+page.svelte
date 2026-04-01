<script>
	import Image from "./Image.svelte";
	import Menu from "./Menu.svelte";

</script>
<main class="flex flex-col p-[10%] pb-0 uppercase font-extralight">
    <h1 class="text-[128px] tracking-[40%] font-chakra leading-[1] font-extralight">QAN</h1>
    <Menu className="ml-[12px]" />
    <div class="flex flex-col w-full mt-[96px] gap-[16px]">
        <h1 class="text-4xl tracking-[50%]">We gather data, you make the conclusions_</h1>
        <Image width="100%" redFilter />
    </div>
</main>