import Contact from "../pages/Contact"
import Navbar from "../pages/Navbar"
import ProductService from "../pages/ProductService"
import Title from "../pages/Title"
import { useState, useEffect } from "react"
import Usage from "../pages/Usage"
import Form from "../pages/FormFooter"
import FormFooter from "../pages/FormFooter"
import Footer from "../pages/Footer"

const Layout = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-orange-50" id="top">
            <div className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-orange-50 rounded-4xl max-w-6xl mx-auto">
                <div className={`transition-all duration-300 overflow-hidden ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`}>
                    <Contact />
                </div>
                <Navbar />
            </div>
            {/* mt adjusts based on scroll — no contact bar = less margin */}
            <div className="pt-25">
                <Title />
            </div>
            {/* items or product service */}
            <div>
                <ProductService />
            </div>
            {/* usage */}
            <div className="bg-orange-100 max-w-6xl mx-auto">
                <Usage />
                <FormFooter />
                <Footer />
            </div>

            {/* use for test height, if finished, remove it*/}
            {/* <div className="h-screen" /> */}
        </div>
    )
}
export default Layout