function ambientLight(){
	const light = new THREE.AmbientLight( 0xff0000,2 ); // soft white light
scene.add( light );
}
function pointLight(){
	const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 10, 4 );
light.castShadow = true; // default false
scene.add( light );

}
function spotLight(){
	const spotLight = new THREE.SpotLight( 0xffffff,60 );
spotLight.position.set( 10, 20, 100 );

spotLight.castShadow = true;



scene.add( spotLight );
}

function hemisphereLight(){
	const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );
}
