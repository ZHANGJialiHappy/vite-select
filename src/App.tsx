import { Select } from "./Select"

const options=[
  {label:"First", value: "1"},
  {label:"Second", value: "2"},
  {label:"Third", value: "3"},
  {label:"Fourth", value: "4"},
  {label:"Fifth", value: "5"},
  {label:"Sixth", value: "6"},
  {label:"Seventh", value: "7"},
  {label:"Eighth", value: ""},
  {label:"First", value: "1"},
  {label:"Second", value: "2"},
  {label:"Third", value: "3"},
  {label:"Fourth", value: "4"},
  {label:"Fifth", value: "5"},
  {label:"Sixth", value: "6"},
  {label:"Seventh", value: "7"},
  {label:"Eighth", value: ""},
  {label:"First", value: "1"},
  {label:"Second", value: "2"},
  {label:"Third", value: "3"},
  {label:"Fourth", value: "4"},
  {label:"Fifth", value: "5"},
  {label:"Sixth", value: "6"},
  {label:"Seventh", value: "7"},
  {label:"Eighth", value: ""},

]

function App() {

  return (
    <div className="App">
      <Select options={options}/>
    </div>
  )
}

export default App
