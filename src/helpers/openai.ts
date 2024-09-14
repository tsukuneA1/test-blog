export async function summarizeContent(content: string): Promise<string> {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_OPENAI_API_KEY`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "Summarize this content" }, { role: "user", content: content }],
        max_tokens: 100,
        temperature: 0.5
      })
    });
  
    const data = await response.json();
    return data.choices[0].message.content.trim();
  }
  