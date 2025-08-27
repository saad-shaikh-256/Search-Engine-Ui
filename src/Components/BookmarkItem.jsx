import React from "react";

const BookmarkItem = ({ url, onEditClick }) => {
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`;

  return (
    <div className="py-2">
      <div className="group relative">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 sm:h-14 w-12 sm:w-14 bg-[#FAFAFA] rounded-2xl flex justify-center items-center border border-[#EEEEEE] p-2.5 sm:p-3 transition hover:border-neutral-400"
        >
          <img
            src={faviconUrl}
            alt="Favicon"
            className="w-full h-full object-contain"
          />
        </a>
        <button
          onClick={onEditClick}
          className="absolute top-0 right-0 h-6 w-6 bg-white rounded-full flex items-center justify-center border text-neutral-500 transform -translate-y-1/3 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <i className="hgi hgi-stroke hgi-edit-03 text-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default BookmarkItem;
