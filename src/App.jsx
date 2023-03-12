// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AIOptions';
import { useState } from 'react';
function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  }) 
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({})
  const [result, setResult] = useState("")
  const [input, setInput] = useState("")

  console.log(arrayItems);
  const selectOption = (option) => {
    setOption(option);
  }
  const doStuff = async () => {
    let object = { ...option, prompt: "Q: " + input + "\nA:" }
    // console.log(object)
    const response = await openai.createCompletion(object)
    setResult(response.data.choices[0].text) 
  }
  // console.log(Object.values(option).length);
  return (
    <div className="App">
      {Object.values(option).length === 0 ? <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>: <Translation doStuff={doStuff} setInput={setInput} result={result} />}
    </div>
  )
}
export default App  
  
