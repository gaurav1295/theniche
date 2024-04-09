// import { Image } from 'next'
"use client"
import Image from 'next/image'
import logo from "../../../public/img/brands/moxie/moxie.svg";

const Navbar = () => {
    return (
        <header className="flex justify-center py-4">
            <Image
                src={logo}
                width={100}
                height={100}
                className="h-12 w-auto"
                alt="Picture of the author"
                // style={{
                //     width: '100%',
                //     objectFit: 'contain',
                //     height: 'auto'
                // }}
            />
            {/* <Image /> */}
            {/* <Image src="" alt="Logo" className="h-12 w-auto" /> */}
            {/* You can add your navigation links here */}
      </header>
    )
}

export default Navbar