import React, { useState, useEffect, useRef } from "react";
const EditBookmarkModal = ({ bookmark, onClose, onUpdate, onDelete }) => {
  const [url, setUrl] = useState(bookmark.url);
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, [bookmark]);

  useEffect(() => {
    setUrl(bookmark.url);
  }, [bookmark.url]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!url) return;
    onUpdate(bookmark.index, url);
  };

  const handleDelete = () => {
    onDelete(bookmark.index);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="w-fit max-w-[90%] h-fit absolute transform translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] rounded-xl bg-white border border-[#EEEEEE] font-poppins"
    >
      <div className="flex flex-col gap-8 p-6 ">
        <div className="w-full h-fit flex justify-between items-center">
          <div className="text-xl font-semibold text-neutral-800">
            Edit Bookmark
          </div>
          <button
            type="button"
            onClick={onClose}
            className="hgi hgi-stroke hgi-multiplication-sign text-xl text-neutral-400 cursor-pointer"
          ></button>
        </div>
        <form
          onSubmit={handleUpdate}
          className="w-full h-fit flex flex-col gap-4"
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-fit w-[320px] px-5 py-3 rounded-2xl bg-[#FAFAFA] border border-[#EEEEEE] outline-none text-neutral-600 focus:border-neutral-500"
            autoFocus
          />
          <div className="flex gap-2 font-medium">
            <button
              type="button"
              onClick={handleDelete}
              className="h-fit grow py-2.5 rounded-2xl bg-red-500 text-white cursor-pointer"
            >
              Delete
            </button>
            <button
              type="submit"
              className="h-fit grow py-2.5 rounded-2xl bg-indigo-500 text-white cursor-pointer"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditBookmarkModal;
