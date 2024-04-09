"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';


const FileInput = ({ onChange, whatToUpload, isLoading }: { onChange: (text: string) => void, whatToUpload: string, isLoading: boolean }) => {
  const imageInputRef1: any = useRef(null)
  const [image, setImage] = useState<any>()
  const openBrowseImage = async () => {
    await imageInputRef1.current.click();
  };

  return (
    <div className="w-80 overflow-hidden border border-black">
      <div className="bg-white">
        {/* Placeholder for image */}
        <div className="h-32 flex justify-center items-center">
          {
            image ?
            <Image
            src={image} alt='dasd' width={50} height={50}
          /> : <span className="text-black-400 text-4md">Upload</span>
          }
          
          {/* <span className="text-gray-400 text-4xl">Image</span> */}
        </div>
      </div>
      <div style={{
            background: 'black',
            fontSize: '13px',
            color: '#fffbe3',
            textAlign: 'center',
            // fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '120%',
            letterSpacing: '1.2px',
            backgroundColor: '#1c1c1c',
            width: '100%',
            padding: '5px 0'
      }}>
        <p className='text-center text-white'>Upload</p>
      </div>
      <div style={{
        padding: '12px'
      }}>
        <label className="block mb-2 text-gray-700 font-bold" style={{
            fontFamily: 'Poppins, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: 'calc(1rem * .06rem)',
            // color: rgb(var(--color-foreground));
            // lineHeight: calc(1 + .3 / max(1, var(--font-heading-scale)));
            wordBreak: 'break-word'
        }}>{whatToUpload}</label>
        <div className="flex">
          <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  let url: string = URL.createObjectURL(e.target.files?.[0]!);
                  setImage(url)
                  onChange(url);
                }}
                ref={imageInputRef1}
                type="file"
                accept="image/*" 
                hidden
                required
            />
            <div onClick={openBrowseImage} style={{"marginTop":"38px","border":"0","opacity":"1","padding":"14px","backgroundColor":"#ebfc68","width":"100%","textAlign":"center","fontSize":"12px","fontStyle":"normal","fontWeight":"800","lineHeight":"110%","textTransform":"uppercase","filter":"drop-shadow(0px 2px 2px rgba(0, 0, 0, .15))","letterSpacing":"1.92px !important"}}>
            Browse
            </div>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
