function GetHitpoint(viewer, options) {
    Autodesk.Viewing.Extension.call(this, viewer, options)

    this.activateTool = this.activateTool.bind(this)
    this.onMouseClick = this.onMouseClick.bind(this)
    this.normalizeCursorPosition = this.normalizeCursorPosition.bind(this)
}

GetHitpoint.prototype = Object.create(Autodesk.Viewing.Extension.prototype)
GetHitpoint.prototype.constructor = GetHitpoint

GetHitpoint.prototype.activateTool = function() {
    if (this.active === false) {
        this.active = true
        this.viewer.impl.disableHighlight(true)
        this.viewer.impl.disableSelection(true)
        this.viewer.container.addEventListener('click', this.onMouseClick)
    } else {
        this.active = false
        this.deactivateTool()
    }
}

GetHitpoint.prototype.deactivateTool = function() {
    this.viewer.impl.disableHighlight(false)
    this.viewer.impl.disableSelection(false)
    this.viewer.container.removeEventListener('click', this.onMouseClick)
}

GetHitpoint.prototype.onMouseClick = function(e) {
    let screenPoint = {
        x : e.clientX,
        y : e.clientY
    }

    let n = this.normalizeCursorPosition(screenPoint)
    let pt = this.viewer.utilities.getHitPoint(n)
    console.log(pt)

    this.deactivateTool()
}

GetHitpoint.prototype.normalizeCursorPosition = function(screenPoint) {
    let viewport = this.viewer.navigation.getScreenViewport()
    let n = {
        x : (screenPoint.x - viewport.left) / viewport.width,
        y : (screenPoint.y - viewport.top) / viewport.height
    }

    return n
}

GetHitpoint.prototype.load = function() {
    this.active = false
    this._btn = document.getElementById('GetHitpoint')
    this._btn.addEventListener('click', this.activateTool)

    return true
}

GetHitpoint.prototype.unload = function() {
    if (this._btn) {
        this._btn.removeEventListener('click', this.activateTool)
    }

    return true
}

Autodesk.Viewing.theExtensionManager.registerExtension('GetHitpoint', GetHitpoint)