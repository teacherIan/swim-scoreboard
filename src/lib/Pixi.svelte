<script lang="ts">
    import * as PIXI from 'pixi.js';
    import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

    import { newScore } from '$lib/stores';
    let sprite: PIXI.Sprite;
    let currentWinner: number = 0;


let app = new PIXI.Application(
    {
        
    width: window.innerWidth, 
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
    resolution: window.devicePixelRatio || 1,
    backgroundAlpha: 0,
    
    antialias: true,
    
    
    
});

document.body.appendChild(app.view as HTMLCanvasElement);


let container = new PIXI.Container();
app.stage.addChild(container);



getSprite().then(() => {

    app.ticker.add(() => {
    let max = Math.max(...$newScore)
    let maxIndex = $newScore.indexOf(max)
    

    if (maxIndex !== currentWinner) {
        if (maxIndex === 0) {
            gsap.to(sprite, {pixi: {tint: 0xc11c22}, duration: 5})
        // sprite.tint = 0xc11c22
    }

    if (maxIndex === 1) {
        gsap.to(sprite, {pixi: {tint: 0xe46725}, duration: 5})
        // sprite.tint = 0xe46725
    }

    if (maxIndex === 2) {
        gsap.to(sprite, {pixi: {tint: 0x000000}, duration: 5})
        // sprite.tint = 0x000000
    }

    if (maxIndex === 3) {
        gsap.to(sprite, {pixi: {tint: 0x1271b5}, duration: 5})
        // sprite.tint = 0x1271b5
    }

        currentWinner = maxIndex

    }

    

});
    
})

async function getSprite() {
    sprite = PIXI.Sprite.from(await PIXI.Assets.load('/Sabres_Image_BW copy.png'));
    sprite.tint = 0x1099bb;
// sprite.anchor.set(0.5);
sprite.x = -100
sprite.y = -100
sprite.width = window.innerWidth / 2 + 200;
sprite.height = window.innerHeight / 2 + 200;
container.addChild(sprite);
}



</script>