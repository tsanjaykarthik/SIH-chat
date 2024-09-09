import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1621px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        <h1 className="grow self-stretch my-auto text-5xl text-white max-md:text-4xl">
          FREIGHT X
        </h1>
        <div className="flex overflow-hidden gap-10 self-stretch px-8 py-4 my-auto text-2xl tracking-wide leading-none text-gray-200 whitespace-nowrap rounded-xl border-white border-solid shadow-sm bg-slate-200 bg-opacity-30 border-[3px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-9">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd0d29375b790e661122b14cf2f89b7019a283d05133e2db7437b6ba0944e2e?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 aspect-square w-[25px]" />
            <div>search</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78a26a66649adc2dd69df0cb178e744a4c92cef6de38f8e4b7a796568a46dbd?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 aspect-[0.72] w-[18px]" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e685d7f86b177bad94bccea7afae680d3640b2a9e55c09f0d0f9ecbf963dcdf1?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain self-stretch aspect-[3.13] w-[304px]" />
      </div>
      <div className="flex gap-8 items-center my-auto text-4xl text-white whitespace-nowrap">
        <div className="overflow-hidden self-stretch px-5 leading-tight rounded-full border-white border-solid shadow-sm bg-slate-400 border-[3px] h-[60px] w-[60px]">
          J
        </div>
        <div className="self-stretch my-auto basis-auto">James</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d45e6e7a0a689fff47564dcdae3f9203fc7f8059c1ee1618d9a6726c20f2c29?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[41px]" />
      </div>
    </header>
  );
};

export default Header;
