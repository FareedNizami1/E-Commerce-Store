import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-90 text-primary-content py-8 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Company Info */}
        <aside className="mb-4 lg:mb-0 items-center justify-center text-center">
          <p className="font-bold text-lg text-white ">
            E-Commerce Website
            <br />
           Build by Syed Fareed Alam Nizami
          </p>
          <p className="text-gray-400">Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </div>
    </footer>
  );
}
