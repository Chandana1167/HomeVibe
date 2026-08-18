import { GoogleGenerativeAI } from "@google/generative-ai";

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Strips out the 'data:image/...;base64,' prefix
      const base64Data = reader.result.split(",")[1];
      resolve(base64Data);
    };
    reader.onerror = (error) => reject(error);
  });
};

export async function analyzeRoomWithGroq(imageFile, userPrompt) {
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    throw new Error("Missing Gemini API Key. Please configure VITE_GEMINI_API_KEY in your environment variables.");
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const base64Data = await fileToBase64(imageFile);

    const imagePart = {
      inlineData: {
        data: base64Data,
        mimeType: imageFile.type || "image/jpeg",
      },
    };

    const promptText = `You are an expert AI Interior Designer. Analyze this room image carefully. 
Identify its architectural elements, current furniture layout, and limitations. 
Then, provide a professional, highly inspirational interior redesign plan based on the user's specific request: "${userPrompt}". 
Structure your response clearly with a Color Palette suggestion, Furniture Recommendations, and Layout Changes.`;

    const result = await model.generateContent([promptText, imagePart]);
    const response = await result.response;
    
    return response.text();
  } catch (error) {
    console.error("Gemini Vision API Error:", error);
    throw new Error(error.message || "Failed to process image with Gemini.");
  }
}