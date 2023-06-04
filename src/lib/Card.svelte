<script lang='ts'>
    // your script goes here
    export let message:string
    export let house:string
    export let index:number
    // let score: number = 0

    import { localStorageStore } from '@skeletonlabs/skeleton';
    	import type { Writable } from 'svelte/store';

    const newScore: Writable<[number,number,number,number]> = localStorageStore('newStore', [0,0,0,0])

        console.log($newScore)


</script>
<div class="container flex flex-col justify-center align-center rounded-3xl">
    <div class="container flex justify-center align-center rounded-3xl ">
        <button class=' hover:bg-green-400 flex items-center w-20 justify-center text-8xl bg-green-600 text-white rounded-3xl'on:click={()=> $newScore[index] += 1} >+</button>
        <a href="/" class="card !bg-transparent  rounded-3xl">
            
        <img src={message} alt="" srcset="" class= ' h-60 w-60 rounded-3xl opacity-90 object-fit' >
        </a>
        <button class=' hover:bg-red-700 flex items-center w-20  justify-center text-9xl bg-red-900 text-white rounded-3xl'  on:click={()=> $newScore[index] -= 1} >-</button>
    
    </div>
    <div class='w-100 bg-white h-20 flex items-center justify-center rounded-3xl text-5xl '  >{$newScore[index]}</div>
</div>


