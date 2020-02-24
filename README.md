# Forge-Viewer
Some testing with the Forge Viewer from Autodesk

## Installation
### Dependencies
1. Node.js - https://nodejs.org/en/

### Setup
1. Download and install [Node.js](https://nodejs.org/en/).

2. Download this repo.

3. Execute `npm install` in the repo directory to install all required node modules.

## Use of sample
1. Execute `npm start` in repo directory to start the server.

2. Open browser and browse to http://localhost:3000 (default port is 3000)  
**NOTE:** You can change the port in the **app.js** file  
```app.listen(3000, () => console.log('Server Ready!'))```

3. In **index.html** is defined which model is going to be loaded. You can change this value to your own model. Place a new folder in the **svf** folder and add all model data in it. Create a svf file with the export option from 3ds Max, download via [extract.autodesk.io](https://extract.autodesk.io/) or convert it by yourself via Forge and download it then.  
```const viewer = createViewer('viewer', './svf/tunnel/0.svf')```
