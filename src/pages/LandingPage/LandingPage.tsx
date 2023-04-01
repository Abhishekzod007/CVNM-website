import useApi from "../../contexts/ApiContext"
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Members from "./components/Members"

export default function LandingPage() {

    const api = useApi()

    const members = api.getMembers()

    return <>
        <Hero />
        <About />
        <Members />
        <Contact />
    </>
}