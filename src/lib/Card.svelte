<script lang='ts'>
    //ts-ignore
    // your script goes here
    
    export let house:string
    export let index:number
    import { newScore } from '$lib/stores'
    // let score: number = 0







</script>
<div class="container flex flex-col justify-center align-center rounded-3xl p-3">
    <div class="container flex justify-center align-center rounded-3xl ">
        <button class=' hover:bg-green-400 flex items-center w-40 justify-center text-8xl bg-green-600 text-white rounded-3xl opacity-70 p-3 'on:click={()=> $newScore[index] += 1} >+</button>
        <a href="/" class="card   rounded-3xl">
            {#if house === 'ruby'}
            <img src='/rubyDark.jpg'  alt="" srcset="" class= ' h-60 w-60 rounded-3xl opacity-70 object-fit p-3 ' >
            {/if}
            {#if house === 'sapphire'}
            <img src='/sapphireDark.jpg' alt="" srcset="" class= ' h-60 w-60 rounded-3xl opacity-70 object-fit p-3 ' >
            {/if}
            {#if house === 'amber'}
            <img src='/amberDark.jpg' alt="" srcset="" class= ' h-60 w-60 rounded-3xl opacity-70 object-fit p-3 ' >
            {/if}
            {#if house === 'pearl'}
            <img src='/pearlDark.jpg' alt="" srcset="" class= ' h-60 w-60 rounded-3xl opacity-70 object-fit p-3 ' >
            {/if}

        
        </a>
        <button class=' hover:bg-red-700 flex items-center w-40  justify-center text-9xl bg-red-900 text-white rounded-3xl opacity-70 p-3'  on:click={()=> $newScore[index] -= 1} >-</button>
    
    </div>
    <div class='w-100 bg-white h-20 flex items-center justify-center rounded-3xl text-5xl '  >{$newScore[index]}</div>
</div>


