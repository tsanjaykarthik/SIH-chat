import React from 'react';
import ChatItem from './ChatItem';

const chatData = [
  { id: 1, name: "Nino", message: "Lorem ipsum dolor... sit amet, consectetur adipiscing elit.", time: "3m", unread: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d665e880febaf99d4915cd77860c214488ff796b6637ffd65e5a980a0ec00812?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
  { id: 2, name: "Nino", message: "Lorem ipsum dolor... sit amet, consectetur adipiscing elit.", time: "10m", unread: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1736152de29225d83663ce984778eec1c6ce1fb5eb1a0e31dc0976803c09e5fd?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
  { id: 3, name: "Nino", message: "Lorem ipsum dolor... sit amet, consectetur adipiscing elit.", time: "1hr", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/da88898f773bdc17ee1e0622544d5925fa74c093826d0ff664689efd141f3a80?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
  { id: 4, name: "Nino", message: "Lorem ipsum dolor... sit amet, consectetur adipiscing elit.", time: "3hr", unread: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5739c039a2efb35590fea28d3edf92c122780b0bbbfa30ec7aadec259c935aa9?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
  { id: 5, name: "Nino", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", time: "6hr", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e8007261d9545bf7786ac9c64ba0f9d185292a5f09e53d67e3abce3395fcc3d?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
  { id: 6, name: "Nino", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", time: "1d", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a8614fd6c64dd5c6fb067806fa4077bf7344bf86b4f891e1d0ca98461d3351b?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
  { id: 7, name: "Nino", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", time: "2d", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a78489b68c102e10e33081b93a6ccd3c70b9914a894c1e92426a36433bb46dfb?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
  { id: 8, name: "Nino", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", time: "3d", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81d3b6edd9de953afe5730132b75904c63d26c3d7c0f4ba568e41c018dfe9af7?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full font-medium text-white max-md:mt-10">
        <div className="flex overflow-hidden gap-6 px-3.5 py-4 text-2xl tracking-wide leading-none text-gray-200 whitespace-nowrap rounded-md border-white border-solid shadow-sm bg-white bg-opacity-30 border-[3px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e213ac98aa616870c21b029f7fd32389c7bd3b0602f06967ae023b52c2b6533?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-contain shrink-0 aspect-square w-[25px]" />
          <div className="grow shrink w-[191px]">search</div>
        </div>
        {chatData.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
