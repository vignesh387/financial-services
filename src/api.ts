import axios, { AxiosError } from "axios";

export const Api = async (
  prompt: string
): Promise<{
  success: boolean;
  message: string;
  data?: { content: string };
}> => {
  try {
    const response = await axios({
      baseURL: "https://api.openai.com/v1/chat/completions",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      data: {
        model: "gpt-3.5-turbo-0125",
        messages: [{ role: "developer", content: prompt }],
      },
      timeout: 10000,
    });
    if (response.status === 200) {
      return Promise.resolve({
        success: true,
        message: "Request Successfull",
        data: {
          content: response.data?.choices[0]?.message.content,
        },
      });
    } else {
      return Promise.reject({
        success: false,
        message: response.data?.error.message ?? "Internal Server Error",
      });
    }
  } catch (error) {
    const API_ERROR = error as AxiosError;
    return Promise.reject({
      success: false,
      message:
        API_ERROR?.code === "ECONNABORTED"
          ? "Request Timeout"
          : API_ERROR?.message,
    });
  }
};
