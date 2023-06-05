<script>
	// @ts-ignore
	import Pixi from '$lib/Pixi.svelte';
	import Card from "$lib/Card.svelte";


</script>


<div class="container h-full w-full mx-auto flex justify-center items-center overflow-hidden">
	<Pixi />
	<div class=" grid grid-rows-2 grid-flow-col gap-10 h-90 ">
		<Card  house='ruby' index=0/>
		<Card  house='amber' index=1/>
		<Card  house='pearl' index=2/>
		<Card  house='sapphire' index=3/>
		
	</div>
	
</div>


