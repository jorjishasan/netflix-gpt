import { useState } from "react";
import nimClient from "../config/nimConfig";

const useNimApi = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResponse = async (query) => {
    setIsLoading(true);
    setResult("");
    setError(null);

    try {
      const response = await nimClient.post("/nim", {
        model: "meta/llama-3.1-405b-instruct",
        messages: [{ role: "user", content: query }],
        temperature: 0.2,
        top_p: 0.7,
        max_tokens: 1024,
      });

      setResult(response.choices[0].message.content);
    } catch (err) {
      console.error("Error calling NVIDIA NIM API:", err);
      setError("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return { result, isLoading, error, fetchResponse };
};

export default useNimApi;
