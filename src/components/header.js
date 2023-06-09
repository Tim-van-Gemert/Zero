import Link from "next/link"
import { useRouter } from 'next/router'

const Header = () => {
    const page = useRouter()
    const menuItems = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About us',
            href: '/about',
        },
        {
            name: 'Our process',
            href: '/process',
        },
        {
            name: 'Menu',
            href: '/menu',
        },
    ]

    return (

        <div className={`  z-30 w-full hidden md:flex justify-center ${page.asPath == '/' ? 'absolute mb-8 mt-8' : 'relative mb-8 mt-8 '} items-center p-4 `}>

            <div className={`grid grid-cols-3 w-[1200px] ${page.asPath == '/' ? 'text-white' : 'text-black'}  text-[20px] font-secondary justify-start items-center  `}>

                <div className="flex flex-row gap-12 col-span-2  justify-start items-center">
                    <div className="flex justify-start">
                        <img src={`${page.asPath == '/' ? '/logo-white.svg ' : '/logo.svg '}`} className=""></img>
                    </div>
                    {
                        menuItems.map((i) => {
                            return (
                                <div key={i.name} className="flex font-thin flex-col group w-fit">
                                    <Link href={i.href}>{i.name}</Link>
                                    <div className={`${page.asPath === i.href ? 'w-full' : 'w-0'} group-hover:w-full transition-all h-[2px] bg-[#62B662]`}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-end relative self-end">
                    <button className="  p-2">Contact</button>
                </div>
            </div>
        </div>
    )
}


export default Header 