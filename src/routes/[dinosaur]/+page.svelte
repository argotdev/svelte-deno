<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <h1>{data.dinosaur.name}</h1>
    <p>{data.dinosaur.description}</p>
    <a href="/">Back to all dinosaurs</a>
</main>

<style>
    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        background-color: #f8f9fa;
        min-height: 100vh;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 1.875rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #2d3748;
        border-bottom: 3px solid #4299e1;
        padding-bottom: 0.5rem;
        display: inline-block;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.6;
        color: #4a5568;
        font-size: 1.1rem;
    }

    a {
        color: #4299e1;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    a:hover {
        color: #2b6cb0;
        text-decoration: underline;
    }
</style>
