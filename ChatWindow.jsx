import React from 'react';

const ChatWindow = () => {
  return (
    <section className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow pb-5 w-full rounded-xl border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px] pt-[500px] max-md:pt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-end px-12 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-3 self-start">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e59612160659a7cb84183c43afe82d111939527509da1ce9b598f6e9a00099b4?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="User avatar" className="object-contain shrink-0 w-16 rounded-full aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3224f6b580815ff712bb60a62ceb72ae6b2744ac8057bba8335404bfc9c7d319?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Chat message" className="object-contain grow shrink-0 self-start rounded-md aspect-[6.76] basis-0 shadow-[0px_1px_4px_rgba(0,0,0,0.75)] w-fit" />
          </div>
          <div className="flex gap-3 mt-6">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51c85c193418c3fcef9623833fc6a7c8f9aa6f3bb577fd6b7020392c44bc21c8?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Chat message" className="object-contain grow shrink-0 self-start rounded-md aspect-[6.45] basis-0 shadow-[0px_1px_4px_rgba(0,0,0,0.75)] w-fit" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f81074fdad1f9086283c94b1a6b45be3a46607218bdd1fe09fabed7b4b1b2a3b?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="User avatar" className="object-contain shrink-0 w-16 aspect-square" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9df39f5f9dcae5aabd389b1375c484ebb6237e1eb119a7e965223011feb76178?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Chat message" className="object-contain mt-6 mr-16 max-w-full rounded-md aspect-[6.41] shadow-[0px_1px_4px_rgba(0,0,0,0.75)] w-[404px] max-md:mr-2.5" />
        </div>
        <div className="flex flex-col px-12 mt-6 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-3 self-start">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/de9d9927df9494777063d31fa75bbbaa4aea0048477af8b599861c0d0f54abd2?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="User avatar" className="object-contain shrink-0 w-16 aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaa208bb3f76afd8059d001ad44b99341b8d0725878d1917015cf35d8b4f3a8c?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Chat message" className="object-contain grow shrink-0 self-start rounded-md aspect-[5.92] basis-0 shadow-[0px_1px_4px_rgba(0,0,0,0.75)] w-fit" />
          </div>
          <form className="flex flex-wrap gap-4 items-center mt-9 ml-3.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a83d8b264783038f073682be352169091ec2afa7275d5eb74b37c0b37fae350e?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
            <input type="text" className="flex shrink-0 self-stretch max-w-full bg-white rounded-md h-[52px] w-[640px]" aria-label="Type a message" />
            <button type="submit" aria-label="Send message">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96189468d80e6c5038c7239ca65c9eca919d1ef77008127b794639a96838e210?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
            </button>
            <button type="button" aria-label="Attach file">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cfebacc086e7e9b5d448ff1463b606dce344d83406acadd72bc5d3992e9b3c7?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChatWindow;
