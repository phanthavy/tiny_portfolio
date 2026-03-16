import { useEffect, useState } from 'react'
import { linkNavbar } from '../utils/linkNavbar'
import { FileText, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [navbar, setNavbar] = useState([])
    const [scroll, setScroll] = useState(false)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setNavbar(linkNavbar)

        const handleScroll = () => setScroll(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`bg-white transition-shadow duration-300 ${scroll ? "shadow-lg" : "shadow-sm"}`}>
            <div className='px-4 py-4 flex justify-between items-center font-bold'>
                {/* logo */}
                <div>
                    <h1 className="text-orange-400 text-3xl tracking-widest cursor-pointer"><Link to='top' smooth={true}>PHANTHAVY</Link> </h1>
                </div>
                {/* navabr */}
                <ul className='hidden lg:flex gap-10 capitalize'>
                    {
                        navbar.map((item, index) => (

                            <li key={index} className='tracking-wide cursor-pointer hover:text-gray-500 transition duration-250'>
                                <Link to={item.href} smooth={true}>{item.label}</Link>
                            </li>

                        ))
                    }
                </ul>
                <div className='flex items-center gap-4'>
                    {/* Hamburger */}
                    <div className='lg:hidden cursor-pointer' onClick={() => setOpen(prev => !prev)}>
                        {open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </div>
                    {/* get a quote button */}
                    <button className='capitalize cursor-pointer text-white bg-amber-500 px-6 py-2 rounded-2xl flex items-center gap-1 tracking-widest'>
                        <FileText className='h-4 w-4' />
                        ສອບຖາມລາຄາ
                    </button>
                </div>
            </div>
            {open && (
                <ul className="xl:hidden flex flex-col gap-3 px-6 pb-4 border-t border-gray-400 capitalize">
                    {navbar.map((item, index) => (
                        <li
                            key={index}
                            className="tracking-wider cursor-pointer hover:text-gray-500 hover:bg-amber-50 transition duration-300"
                        >
                            <Link to={item.href} smooth={true} duration={700}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
export default Navbar