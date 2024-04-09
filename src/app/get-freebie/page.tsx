"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";
import upperHeader from '../../../public/img/brands/moxie/Frame_1000010016.webp'
import downHeader from '../../../public/img/brands/moxie/Group_29857.webp'
// import { useState } from "react";
import FileInput from "../_components/fileInput";
import React, { useRef, useState } from "react";
import convertor from "../lib/convertor";

export default function GetFreeBie() {
    const router = useRouter()
    const [processing, setProcessing] = useState<boolean>(false);
    const [texts, setTexts] = useState<Array<string>>([]);
    const [reviewTexts, setReviewTexts] = useState<Array<string>>([]);

    const convertOrderID = async (url: string) => {
        if (url.length) {
        setProcessing(true);
        await convertor(url).then((txt: string) => {
            let copyTexts: Array<string> = [];
            copyTexts.push(txt);
            setTexts(copyTexts);
        });
        setProcessing(false);
        }
    };

    const convertReview = async (url: string) => {
        if (url.length) {
        setProcessing(true);
        await convertor(url).then((txt: string) => {
            let copyTexts: Array<string> = [];
            copyTexts.push(txt);
            setReviewTexts(copyTexts);
        });
        setProcessing(false);
        }
    };

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
            }}>Review your purchase and get <strong>Product</strong> <strong>Freebie from your precious review.</strong></div>
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

            <div className="flex items-center" style={{
                margin: '53px 24px',
            }}>
                <FileInput onChange={convertOrderID} whatToUpload="Upload your order details" isLoading={processing}/>
                <span className="mx-2 text-gray-400 font-bold"></span>
                <FileInput onChange={convertReview} whatToUpload="Upload your product review" isLoading={processing}/>
            </div>
            <div onClick={() => {
                setProcessing(true)
                if (texts.length && reviewTexts.length && !processing) {
                    router.push('/get-freebie/thanks')
                }
            }} style={{"marginTop":"38px","border":"0","opacity":"1","padding":"14px","backgroundColor":"#ebfc68","width":"100%","textAlign":"center","fontSize":"12px","fontStyle":"normal","fontWeight":"800","lineHeight":"110%","textTransform":"uppercase","filter":"drop-shadow(0px 2px 2px rgba(0, 0, 0, .15))","letterSpacing":"1.92px !important"}}>
             { processing ? 'Processing...' : 'Get your free product'}
            </div>
        </div>
    )
}