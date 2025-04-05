<main>
    <p>Continuemos con el proceso, introduce los datos de la declaracion de renta que quieres monitorear.</p>
    <br>
    <p>Year to monitor</p>
    <input bind:value={year} type="number" step="1" min="2020" max="2025" />
    <p>Your DUI or NIT</p>
    <input bind:value={duinit} type="text"/>
    <button on:click={enviarDatos}>Submit</button>
</main>

<script lang="ts">
    import {goto} from "$app/navigation";
    import {get} from "svelte/store";
    import {supabase} from "$lib/supabaseStore";
// todo read plan and dynamic show other fields
    let year = 2024;
    let duinit = '';

    async function enviarDatos(){
        let token = '';
        const {data, error} = await get(supabase).auth.getSession();

        token = data?.session?.access_token ?? ''
        if(token === ''){
            console.log('not logged in')
            goto('/') // todo implement a login page?
        }

        const response = await fetch("http://localhost:3000/monitors/create",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                year: year,
                duinit: duinit,
                // the user session or user not sure what to send
                token: token,
            })
        })
        if(response.status === 201){
            goto('/cuenta')
        }
        else {
            console.log('error!')
            console.log(response.body);
        }


    }
</script>