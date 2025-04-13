import { HfInference } from '@huggingface/inference';

const API_KEY = process.env.HF_API_KEY;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    try {
      // Call the Hugging Face model (flan-t5-base) for inference
      const response = await hf.textGeneration({
        model: 'google/flan-t5-base', // Specify the model
        inputs: prompt,
      });

      // Send the result back as a JSON response
      res.status(200).json({ output: response.generated_text });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch response from Hugging Face API' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
