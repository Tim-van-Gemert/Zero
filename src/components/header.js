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
        
    <div className={`  z-30 w-full  hidden md:flex justify-center ${ page.asPath == '/' ? 'absolute' : 'relative mb-8 mt-8 '} items-center  `}>

        <div className={`flex flex-row w-[1200px] ${ page.asPath == '/' ? 'text-white' :  'text-black'} py-4 justify-center items-center  text-[28px] font-primary  p-3 gap-12 `}>
            {
                menuItems.map((i)=>{
                    return (
                    <div key={i.name} className="flex flex-col group w-fit">
                        <Link href={i.href}>{i.name}</Link>
                        <div className={`${ page.asPath === i.href ? 'w-full' : 'w-0' } group-hover:w-full transition-all h-[2px] bg-[#62B662]`}></div>
                    </div>
                    )
                })
            }
        </div>
    </div>
    )
}


export default Header 