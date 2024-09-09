import React from 'react';

const ChatItem = ({ name, message, time, unread, image }) => {
  return (
    <div className="flex overflow-hidden gap-5 justify-between px-2.5 py-3.5 mt-7 rounded-md border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px]">
      <div className="flex gap-2.5">
        <img loading="lazy" src={image} alt={`${name}'s profile`} className="object-contain shrink-0 aspect-square w-[55px]" />
        <div className="flex flex-col my-auto">
          <div className="self-start text-2xl">{name}</div>
          <div className="mt-1 text-xs">{message}</div>
        </div>
      </div>
      <div className="flex flex-col self-start mt-2.5 text-base whitespace-nowrap">
        <div className="self-end">{time}</div>
        <div className="flex gap-4 mt-1 max-md:mr-0.5">
          {unread && (
            <div className="px-2 rounded-full bg-slate-400 h-[23px] w-[23px]">
              {unread}
            </div>
          )}
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9da956bd039e4440c07905cf1d8f0e9e5f4402edacb0a8ffcdd259b0bb31e8c8?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 self-start w-5 aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
