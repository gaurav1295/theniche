"use client";
import Image from "next/image"
import upperHeader from '../../../../public/img/brands/moxie/Frame_1000010016.webp'
import downHeader from '../../../../public/img/brands/moxie/Group_29857.webp'

export default function GetFreeBie() {
    return (
        <div className="container">
            <Image
                src={upperHeader}
                //  width={100}
                //  height={100}
                className="h-12 w-auto"
                alt="Picture of the author"
                style={{
                    width: '100%',
                    objectFit: 'contain',
                    height: 'auto'
                }}
            />
            {/* <div >100% clean, salon quality products </div> */}
            <div style={{
                fontSize: '24px',
                margin: '53px auto 0',
                maxWidth: '300px'
            }}>Thanks for reviewing our product <strong>We will ship your freebie in the next 3-7 days.</strong></div>
            <Image
                src={downHeader}
                //  width={100}
                //  height={100}
                className="h-12 w-auto"
                alt="Picture of the author"
                style={{
                    width: '100%',
                    objectFit: 'contain',
                    height: 'auto'
                }}
            />
        </div>
    )
}