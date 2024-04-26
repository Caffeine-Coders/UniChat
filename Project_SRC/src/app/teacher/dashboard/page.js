import dynamic from "next/dynamic"
// import Navdash from "./navbar.js"
const Navdash = dynamic(()=>import('./components/navbar.js'),{ssr: false})
// const Content = dynamic(()=>import('./content'))
import Content from "./components/content.js"
import "../components/dash.css"
export default function Dashboard() {
    return (
        <>
        <Navdash/>
        <Content/>
        </>
    )
  }