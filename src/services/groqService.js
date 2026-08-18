/**
 * Service to handle Groq Vision and Groq AI API calls
 */

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); 
    reader.onerror = (error) => reject(error);
  });
};

export async function analyzeRoomWithGroq(imageFile, userPrompt) {
  // Ensure your real Groq API key is pasted here
  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
  
  try {
    const base64Image = await fileToBase64(imageFile);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Updated to the latest active Groq multimodal vision model
        model: "meta-llama/llama-4-scout-17b-16e-instruct", 
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `You are an expert AI Interior Designer. Analyze this room image carefully. 
                       Identify its architectural elements, current furniture layout, and limitations. 
                       Then, provide a professional, highly inspirational interior redesign plan based on the user's specific request: "${userPrompt}". 
                       Structure your response clearly with a Color Palette suggestion, Furniture Recommendations, and Layout Changes.`
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`
                }
              }
            ]
          }
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to communicate with Groq Vision.");
    }

    const result = await response.json();
    return result.choices[0].message.content;
  } catch (error) {
    console.error("Groq Vision API Error:", error);
    throw error;
  }
}