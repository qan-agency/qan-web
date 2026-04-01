<script lang="ts">
    interface MenuProps {
        className?: string;
    }

    let { className } : MenuProps = $props();

    let menuElements = [
        { name: "articles", link: "/articles" },
        { name: "contact", link: "/contact" },
        { name: "about", link: "/about" },
    ];
</script>

<div class="flex gap-[20%] {className}">
    <div class="flex gap-[32px] text-[10px]">
        <button>🇺🇸 English</button>
        <button>🇺🇦 Українська</button>        
    </div>
    <div class="flex gap-[32px] text-[14px]">
        {#each menuElements as element (element.link)}
            <button class="border-t-[8px] min-w-[72px] h-[96px] border-[#FA4245]">{element.name}</button>
        {/each}
    </div>
</div>