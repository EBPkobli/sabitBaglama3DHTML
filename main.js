$( document ).ready(function() 
{
	var scene = new THREE.Scene();


	var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer( {antialias: true} );
	scene.background = new THREE.Color( 0x454545 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var controls = new THREE.OrbitControls( camera );

	var length = 25, width = 35;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( 0, width );
	shape.lineTo( 6, width );
	shape.lineTo( length, width-25 );
	shape.lineTo( length, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 100,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x9a9a9a } );
	var mesh = new THREE.Mesh( geometry, material ) ;
	mesh.position.x = -150;
	mesh.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );

	var wireframe = new THREE.LineSegments( geo, mat );

	mesh.add(wireframe);

	scene.add( mesh );

	var length = 85, width = 10;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( 0, width );
	shape.lineTo( length, width );
	shape.lineTo( length, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 100,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x9a9a9a } );
	var mesh2 = new THREE.Mesh( geometry, material ) ;
	mesh2.position.x = -122;
	mesh2.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );

	var wireframe2 = new THREE.LineSegments( geo, mat );

	mesh2.add(wireframe2);

	scene.add(mesh2)

	var length = 15, width = 15;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( 0, width - 5 );
	shape.lineTo( length-10, width );
	shape.lineTo( length, width );

	shape.lineTo( length, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 100,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x9a9a9a } );
	var mesh3 = new THREE.Mesh( geometry, material ) ;
	mesh3.position.x = -34;
	mesh3.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );

	var wireframe3 = new THREE.LineSegments( geo, mat );

	mesh3.add(wireframe3);

	scene.add(mesh3)

	var length = 2, width = 17;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( 0, width );
	shape.lineTo( length, width );
	shape.lineTo( length, width );

	shape.lineTo( length, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 100,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x9a9a9a } );
	var mesh4 = new THREE.Mesh( geometry, material ) ;
	mesh4.position.x = -17;
	mesh4.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );

	var wireframe4 = new THREE.LineSegments( geo, mat );

	mesh4.add(wireframe4);

	scene.add(mesh4)







	var length = 20, width = 45;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( 0, width );
	shape.lineTo( length, width );
	shape.lineTo( length, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x00AAFF } );
	var sumesh1 = new THREE.Mesh( geometry, material ) ;
	sumesh1.position.x = -173;
	sumesh1.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x000ff, linewidth: 5 } );

	var suframe1 = new THREE.LineSegments( geo, mat );

	sumesh1.add(suframe1);

	scene.add(sumesh1)


	var length = 60, width = 25;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( -25, width );
	shape.lineTo( length, width );
	shape.lineTo( length-25, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 100,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x00AAFF } );
	var trapez = new THREE.Mesh( geometry, material ) ;
	trapez.position.x = 60;
	trapez.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x000ff, linewidth: 1 } );

	var wireframe4 = new THREE.LineSegments( geo, mat );

	trapez.add(wireframe4);

	scene.add(trapez)


	var length = 10, width = 35;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( -10, width );
	shape.lineTo( length+14, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 100,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x926829 } );
	var trapez = new THREE.Mesh( geometry, material ) ;
	trapez.position.x = 34;
	trapez.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x00000, linewidth: 25 } );

	var wireframe4 = new THREE.LineSegments( geo, mat );

	trapez.add(wireframe4);

	scene.add(trapez)

	var length = 10, width = 35;

	var shape = new THREE.Shape();
	shape.moveTo( 0,0 );
	shape.lineTo( length+20, width-3 );
	shape.lineTo( length+14, 0 );
	shape.lineTo( 0, 0 );

	var extrudeSettings = {
		steps: 1,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 100,
		bevelSize: 1,
		bevelSegments: 0
	};

	var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
	var material = new THREE.MeshBasicMaterial( { color: 0x926829 } );
	var trapez = new THREE.Mesh( geometry, material ) ;
	trapez.position.x = 98;
	trapez.position.y = 0;

	var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

	var mat = new THREE.LineBasicMaterial( { color: 0x00000, linewidth: 25 } );

	var wireframe4 = new THREE.LineSegments( geo, mat );

	trapez.add(wireframe4);

	scene.add(trapez)



	camera.position.z = 200;
	controls.update();
	var animate = function () {
		requestAnimationFrame( animate );
		controls.update();

		renderer.render( scene, camera );
	};

	animate();	
});