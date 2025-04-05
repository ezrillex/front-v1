<script lang="ts">
    import {supabase} from "$lib/supabaseStore"
    import {get} from "svelte/store";
    import {goto} from "$app/navigation";
    import { onMount } from "svelte";
    let plan = '';
    let email = '';

    onMount(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        plan = urlParams.get("plan") ?? '';

        urlParams.delete("plan");  // Remove the 'plan' query parameter

        // Update the browser URL without reloading the page
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
        if(!(plan === "basic" || plan === "standard" || plan === "premium")) {
            goto('/')
        }
        console.log(plan)
    })


    async function enviarDatos(){
        console.log("Enviando...");

        console.log('plan es ', plan)
        const { data, error } = await get(supabase).auth.signInWithOtp({
            email: 'ezrillex@gmail.com',
            options: {
                emailRedirectTo: 'http://localhost:5173/signup/setup?plan=' + plan,
            }
        })
        console.log(data)
// todo handle errors
        console.log("Enviado!")
        goto('/signup/email')
    }
</script>

<main>
    <p>Email donde deseas la notificacion</p>
    <input bind:value={email} type="email"/>
    <button on:click={enviarDatos}>Submit</button>
</main>

