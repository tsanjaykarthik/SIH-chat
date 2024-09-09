import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import ContactInfo from './ContactInfo';

const ChatApp = () => {
  return (
    <main className="flex overflow-hidden flex-col px-8 py-6 bg-gray-700 max-md:px-5">
      <Header />
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <ChatWindow />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
};

export default ChatApp;
