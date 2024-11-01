<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Welcome to the Dinosaur app</h1>
    <p class="mb-4">Click on a dinosaur below to learn more.</p>
    
    <ul class="space-y-2">
        {#each data.dinosaurs as dinosaur}
            <li>
                <a 
                    href="/{dinosaur.name.toLowerCase()}" 
                    class="text-blue-600 hover:underline"
                >
                    {dinosaur.name}
                </a>
            </li>
        {/each}
    </ul>
</main>

<style>
    main {
        background-color: #f8f9fa;
        min-height: 100vh;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
        color: #2d3748;
        border-bottom: 3px solid #4299e1;
        padding-bottom: 0.5rem;
        display: inline-block;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        background-color: white;
        padding: 1rem;
        border-radius: 6px;
        transition: transform 0.2s ease-in-out;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    li:hover {
        transform: translateX(10px);
    }

    a {
        text-decoration: none;
        color: #4299e1;
        font-weight: 500;
        display: block;
    }

    a:hover {
        color: #2b6cb0;
    }
</style>