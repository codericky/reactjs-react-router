import { Routes, Route } from "react-router-dom"    
import Header from "./Header"
import Footer from "./Footer"

export default function Layout ({childern}) {
    return (
        <div>
            <Routes>
                <Route path='/header' element={<Header/>} />
                <main>{childern}</main>
                <Route path='/footer' element={<Footer />} />
            </Routes>
        </div>
    )
}