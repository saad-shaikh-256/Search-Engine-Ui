import React, { useState, useEffect, useRef } from "react";

const AddBookmarkModal = ({ isOpen, onClose, onAdd }) => {
  const [url, setUrl] = useState("");
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    onAdd(url);
    setUrl("");
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="w-fit max-w-[90%] h-fit absolute transform translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] rounded-xl bg-white border border-[#EEEEEE] font-poppins"
    >
      <div className="flex flex-col gap-8 p-6">
        <div className="w-full h-fit flex justify-between items-center">
          <div className="text-xl font-semibold text-neutral-800">
            Add Bookmark
          </div>
          <button
            type="button"
            onClick={onClose}
            className="hgi hgi-stroke hgi-multiplication-sign text-xl text-neutral-400 cursor-pointer"
          ></button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-fit flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-fit w-[320px] px-5 py-3 rounded-2xl bg-[#FAFAFA] border border-[#EEEEEE] placeholder:text-[#9E9E9E] outline-none text-neutral-600 focus:border-neutral-500"
            autoFocus
          />
          <button
            type="submit"
            className="h-fit w-full py-2.5 rounded-2xl bg-indigo-500 text-white cursor-pointer font-medium"
          >
            Add Bookmark
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddBookmarkModal;
