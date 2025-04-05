<script>
    import {get} from "svelte/store"
    import {supabase} from "$lib/supabaseStore.js";

    let isLogin = false;
    let correo = '';
    get(supabase).auth.getSession().then(({data, error})=>{
        if(data.session){
            isLogin = true;
            correo = data?.session?.user?.email ?? ''
            console.log(data)
        }
        console.log(error)
    })

    function logout(){
        get(supabase).auth.signOut().then(({error})=>{
            console.log(error)
            isLogin = false;
            correo = '';
        })
    }

</script>


<h1>Avisame Por Correo</h1>
{#if isLogin}
<p>Usuario: {correo}</p>
<button on:click={logout}>cerrar sesion</button>
{/if}

<slot></slot>