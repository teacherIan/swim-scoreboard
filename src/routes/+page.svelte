<script>
// @ts-nocheck


	/* grid grid-rows-2 grid-flow-col gap-2*/
	import Card from "$lib/Card.svelte";
	
	import sapphire from '$lib/sapphireDark.JPG'
	
	import ruby from '$lib/rubyDark.JPG'
	
	import amber from '$lib/amberDark.JPG'
	
	import pearl from  '$lib/pearlDark.JPG'

</script>


<div class="container h-full w-full mx-auto flex justify-center items-center overflow-hidden">
	<div class=" grid grid-rows-2 grid-flow-col gap-10 h-90">
		<Card message={ruby} house='ruby' index=0/>
		<Card message={amber} house='amber' index=1/>
		<Card message={pearl} house='pearl' index=2/>
		<Card message={sapphire} house='sapphire' index=3/>
		
	</div>
	
</div>


