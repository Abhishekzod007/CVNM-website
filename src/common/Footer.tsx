import React from 'react'

const navLinks = [[
    {
        title: "Home",
        to: "/"
    },
    {
        title: "About",
        to: "/about"
    },
    {
        title: "Projects",
        to: "/projects"
    },

    {
        title: "Professors",
        to: "/professors"
    },
    {
        title: "Students",
        to: "/students"
    },
], [
    {
        title: "LinkedIn",
        to: "https://www.linkedin.com/school/abv-indian-institute-of-information-technology-and-management/"
    },
    {
        title: "Facebook",
        to: "https://www.facebook.com/iiitm/"
    },
    {
        title: "IIITM Site",
        to: "http://www.iiitm.ac.in/index.php/en/"
    },

], [
    {
        title: "About Computer Vision",
        to: "https://en.wikipedia.org/wiki/Media_Vision"
    },
    {
        title: "About Machine Learning",
        to: "https://en.wikipedia.org/wiki/Machine_learning"
    },

    {
        title: "About IIITM",
        to: "http://www.iiitm.ac.in/index.php/en/about-iiitm/history"
    },
],
]

export default function Footer() {
    return (
        <>
            <footer className='mt-20 flex p-page py-10 justify-between bg-foreground text-back min-h-[40vh]'>
                <div className="self-center">
                    <h1 className='text-6xl italic'>CV&M</h1>
                    <p className='text-sm my-2'>Computer Vision and Multimedia</p>
                </div>
                <nav className="flex items-center  p-page py-4 ">

                    <div className="flex flex-col items-center gap-y-8">
                        <h1 className='flex text-3xl font-semibold font-raleway'>Useful Links</h1>
                        <div className="flex  gap-x-32 text-lg">
                            {navLinks.map(sect => <div className='flex flex-col gap-y-3'>
                                {sect.map(link => <a href={link.to} className="duration-500 text-[15px] hover:text-front" >{link.title}</a>)}
                            </div>)}
                        </div>
                    </div>
                </nav>

            </footer>


        </>
    )
}

