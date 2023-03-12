import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv('VITE_Open_AI_Key')

print("api key is: ", openai.api_key)

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="What is the average life expectancy in the US?",
  temperature=0,
  max_tokens=100,
  top_p=1,
  frequency_penalty=0.0,
  presence_penalty=0.0,
  stop=["\n"]
)


print(response)

# print("___and now___")
# print(response.data.choices[0].text)