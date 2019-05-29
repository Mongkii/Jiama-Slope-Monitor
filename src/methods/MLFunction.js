import {tensor2d} from '@tensorflow/tfjs';

async function getPrediction(arr, model) {
  const tensor = tensor2d([arr]);
  const prediction = model.predict(tensor);
  const result = await prediction.array();
  return result[0][0];
}

export {getPrediction};
