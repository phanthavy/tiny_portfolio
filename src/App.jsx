import Layout from "./layouts/Layout"
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "Inconsolata, Noto Serif Lao" }} className="min-h-screen ">
        <Layout />
      </div>
    </BrowserRouter>
  )
}
export default App