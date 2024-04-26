import dynamic from "next/dynamic"
// import Navdash from "./navbar.js"
const Navdash = dynamic(()=>import('./navbar'),{ssr: false})
// const Content = dynamic(()=>import('./content'))
import Content from "./content.js"
import "../components/dash.css"
export default function Dashboard() {
    return (
        <div className=""> 
        <Navdash/>
        <Content/>
        
        </div>
    )
  }