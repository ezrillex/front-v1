<script lang="ts">
    import {push} from 'svelte-spa-router'

    let year = 2024;
    let duinit = '';
    let email = '';

    async function enviarDatos(){
        console.log("Enviando...");
        await fetch("http://localhost:3000/monitors/create",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                year: year,
                duinit: duinit,
                email: email
            })
        })
        console.log("Enviado!")
        push('/cuenta');
    }
</script>

<main>
    <p>Year to monitor</p>
    <input bind:value={year} type="number" step="1" min="2020" max="2025" />
    <p>Your DUI or NIT</p>
    <input bind:value={duinit} type="text"/>
    <p>Email to notify</p>
    <input bind:value={email} type="email"/>
    <button on:click={enviarDatos}>Submit</button>
</main>

