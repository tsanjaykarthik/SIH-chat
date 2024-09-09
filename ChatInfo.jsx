import React from 'react';

const ContactInfo = () => {
  return (
    <aside className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col px-8 pt-4 pb-16 mx-auto w-full text-white rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-5 justify-between text-3xl">
          <h2 className="font-medium">Contact Info</h2>
          <button aria-label="More options" className="font-black">...</button>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35c8ba8be6c030d9382afcabf9db8c30749aaaaa653c9450f2ee05ce60bf6e7?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Contact profile picture" className="object-contain self-center mt-12 max-w-full rounded-full aspect-square w-[200px] max-md:mt-10" />
        <h3 className="self-center mt-9 text-5xl max-md:text-4xl">NINO</h3>
        <h4 className="self-start mt-9 text-4xl">About</h4>
        <p className="px-2.5 pt-4 pb-12 mt-4 text-xl font-medium rounded-xl border-white border-solid shadow-sm bg-slate-400 bg-opacity-30 border-[3px]">
          Lorem ipsum dolor... sit amet, consectetur adipiscing elit.
        </p>
        <h4 className="self-start mt-4 text-4xl">Media, Links etc</h4>
        <div className="flex shrink-0 mt-4 rounded-xl border-white border-solid shadow-sm bg-slate-400 bg-opacity-30 border-[3px] h-[190px]"></div>
      </div>
    </aside>
  );
};

export default ContactInfo;
