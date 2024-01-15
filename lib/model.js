import { GLTFLoader } from "three/examples/jsm/loaders/GLTFloader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const draco = new DRACOLoader()
draco.setDecoderConfig({ type: 'js' })
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader(draco)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'shibainu'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}

// Importing Loaders: It imports GLTFLoader and DRACOLoader from Three.js. These are used to load GLTF models and decode Draco-compressed models, respectively.

// Setting up DRACOLoader: It initializes a DRACOLoader instance for decoding Draco-compressed mesh data, setting its configuration and decoder path. Draco compression allows for smaller 3D model files.

// loadGLTFModel Function: This exported function loads a GLTF model into a given scene. It accepts the scene, the path to the GLB (GLTF binary format) file, and options for shadow casting and receiving.

// Loader Configuration: Inside the function, a new GLTFLoader instance is created and configured to use the previously set up DRACOLoader.

// Loading the Model: The loader loads the model from the given path. On successful loading, it processes the model (gltf.scene), sets its name, position, and shadow properties as per the options provided.

// Traversing the Model: The script traverses through all the children of the loaded model. If a child is a mesh, it applies the shadow options to it.

// Adding to Scene and Resolving Promise: The loaded model is added to the provided scene. The function is asynchronous and returns a promise that resolves with the loaded model or rejects if there's an error during loading.

// using a new Promise to resolve or reject is fundamental for asynchronous programming. It's used to handle operations that might take an unknown amount of time to complete, like loading files or making API calls. Here's why it's used:

// Asynchronous Control Flow: Promises provide a way to manage asynchronous operations, allowing code to run without blocking the execution of other scripts. This is crucial for tasks like loading 3D models, where you don't want to halt the whole application while waiting for the model to load.
// Success and Error Handling: The resolve and reject functions within a Promise handle successful completion and errors, respectively. When you call resolve(obj), it indicates that the operation was successful and passes the result (in this case, the loaded model) to the caller. If an error occurs, calling reject(error) passes the error information, allowing for proper error handling.
// Chainability and Composition: Promises can be chained with .then() and .catch() methods, providing a clean and manageable way to handle a series of asynchronous steps and errors.
