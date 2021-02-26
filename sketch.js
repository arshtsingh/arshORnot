console.log('ml5 version:', ml5.version)

modelPath = "./model.json"

const classifier = ml5.imageClassifier(modelPath)

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!')
}

// Make a prediction with a selected image
classifier.classify(document.getElementById('image'), (err, results) => {
  console.log(results)
})

