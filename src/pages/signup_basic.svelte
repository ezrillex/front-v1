<script>
    import {push} from 'svelte-spa-router'
    function enviarDatos(){
        console.log("Enviando...");
        push('/cuenta');
    }
</script>

<main>
    <p>Year to monitor</p>
    <input value="2024" type="number" step="1" min="2020" max="2025" />
    <p>Your DUI or NIT</p>
    <input type="text"/>
    <p>Email to notify</p>
    <input type="email"/>
    <button on:click={enviarDatos}>Submit</button>
</main>

