import { useEffect, useState } from "react"
import useApi from "../contexts/ApiContext"

const navLinks = [
    {
        title: "Home",
        to: "/#hero"
    }, {
        title: "About",
        to: "/#about"
    }
]

export default function Navbar() {

    const [navFixed, setNavFixed] = useState(false)

    const api = useApi()

    const departments = api.getMembers()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setNavFixed(window.scrollY > window.innerHeight * (20 / 100))
        })
        setNavFixed(window.scrollY > window.innerHeight * (20 / 100))
    })

    return <nav className={`flex fixed w-full z-50 items-center justify-between shadow-lg p-page py-4 bg-primary duration-500 
    ${navFixed ? '-translate-y-0' : '-translate-y-full'}`}>
        <div className="">
            <h1 className="text-2xl font-bold italic font-raleway">
                CV&M
            </h1>
        </div>
        <div className="flex items-center gap-x-10 text-lg">
            {navLinks.map(link => <a href={link.to} className="duration-500 hover:text-back" >{link.title}</a>)}
            <div className="group relative cursor-default">
                Members
                <div className="opacity-0 absolute flex flex-col bottom-0 translate-y-full bg-background rounded-lg shadow-lg left-1/2 
                -translate-x-1/2 group-hover:opacity-100">
                    {
                        departments.map(dept => <a className="whitespace-nowrap border-b pt-3 pb-1 px-2 duration-300 hover:bg-front 
                        hover:bg-opacity-10" href={`/#members-${dept.id}`}>{dept.title}</a>)
                    }
                </div>
            </div>
            <a href="/#contact" className="duration-500 hover:text-back">Contact</a>
        </div>
    </nav>
}
