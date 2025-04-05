<main>
    <h2>Tu cuenta</h2>
    <p>Juan Perez</p>
    <p>micorreo@correo.com</p>

    <p>Monitoreando (tabla o cards)</p>
    <p>2024 12345678-9 estado_paso7 ultima_revisado_timestamp plan basico BOTON DETALLES</p>
</main>


<script lang="ts">
    import {get} from "svelte/store";
    import {supabase} from "$lib/supabaseStore";

    get(supabase).auth.getSession().then(
        ({data, error}) => {
            console.log(data)
            console.log(error)
        }
    )
</script>