export default class GamePage {
  constructor (callbacks) {
    this.callbacks = callbacks
  }

  init () {
    var width = 375
    var height = 667
    var renderer = new THREE.WebGLRenderer({ canvas })
    var scene = new THREE.Scene()
    var camera = new THREE.OrthographicCamera( -width / 2, width / 2, height / 2, -height / 2, -1000, 1000)
    renderer.setSize(width, height)

    var trangleShape = new THREE.Shape()
    trangleShape.moveTo(0, 100)
    trangleShape.lineTo(-100, -100)
    trangleShape.lineTo(100, -100)
    trangleShape.lineTo(0, 100)

    var geometry = new THREE.ShapeGeometry( trangleShape )
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide
    })
    var mesh = new THREE.Mesh( geometry, material )
    mesh.position.x = 0
    mesh.position.y = 0
    mesh.position.z = 1
    scene.add(mesh)

    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 0
    camera.lookAt(new THREE.Vector3(0, 0, 1))

    var currentAngle = 0
    var lastTimestamp = Date.now()

    var animate = function () {
      var now = Date.now()
      var duration = now - lastTimestamp
      lastTimestamp = now
      currentAngle = currentAngle + duration / 1000 * Math.PI
    }

    var render = function () {
      animate()
      mesh.rotation.set(0, currentAngle, 0)  // x, y, z
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }

    render()
  }
  
  restart () {
    console.log('>restart game-page')
  }
}
