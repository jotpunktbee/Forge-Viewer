function createViewer(div, svf) {
    let divElement = document.getElementById('viewer')
    let config3d = {
        extensions : ['GetHitpoint']
    }
    let options = {
        'env' : 'Local',
        'document' : svf
    }

    let viewer = new Autodesk.Viewing.GuiViewer3D(divElement, config3d)
    Autodesk.Viewing.Initializer(options, () => {
        let started = viewer.start(options.document, options)

        if (started > 0) {
            console.error('Viewer konnte nicht gestartet werden!')
            return
        }
    })

    return viewer
}

/* function addListener(viewer) {
    viewer.container.addEventListener('mousemove', onMouseMove)
}

function normalizeCursorPosition(screenPoint) {
    let viewport = viewer.navigation.getScreenViewport()
    let n = {
        x : (screenPoint.x - viewport.left) / viewport.width,
        y : (screenPoint.y - viewport.top) / viewport.height
    }

    return n
}

function onMouseMove(e) {
    let screenPoint = {
        x : e.clientX,
        y : e.clientY
    }
    
    let n = normalizeCursorPosition(screenPoint)

    console.log(n)
}

function onMouseClick(e) {
    let screenPoint = {
        x : e.clientX,
        y : e.clientY
    }

    let n = normalizeCursorPosition(screenPoint)
    let pt = viewer.utilities.getHitPoint(n)
} */

function createCube(x, y, z) {
    let color = 0xE70066
    let material = new THREE.MeshPhongMaterial({
        specular: new THREE.Color(color),
        side: THREE.DoubleSide,
        color,
        transparent: true,
        opacity: 0.5
    })

    // Material zur Materialliste hinzufuegen
    // const materials = viewer.impl.getMaterials()
    // materials.addMaterial("Mein Material", material, true)

    let geometry = new THREE.BoxGeometry(50, 50, 50)
    let cube = new THREE.Mesh(geometry, material)

    if (!viewer.impl.overlayScenes.hasOwnProperty('myOverlay')) {
        viewer.impl.createOverlayScene('myOverlay')
    }
    
    // viewer.impl.addOverlay('myOverlay', material)
    viewer.impl.addOverlay('myOverlay', cube)

    cube.position.set(x, y, z)

    viewer.impl.sceneUpdated(true)
}