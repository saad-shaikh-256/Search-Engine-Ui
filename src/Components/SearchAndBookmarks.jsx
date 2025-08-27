import React, { useState, useEffect } from "react";
import BookmarkItem from "./BookmarkItem";
import AddBookmarkModal from "./AddBookmarkModal";
import EditBookmarkModal from "./EditBookmarkModal";

const SearchAndBookmarks = () => {
  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [editingBookmark, setEditingBookmark] = useState(null);
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(savedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    const urlPattern =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
    if (urlPattern.test(query)) {
      const properUrl = query.startsWith("http") ? query : `https://${query}`;
      window.location.href = properUrl;
    } else {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
    }
    setQuery("");
  };

  const handleAddBookmark = (url) => {
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    setBookmarks([...bookmarks, fullUrl]);
    setIsAddModalOpen(false);
  };

  const handleUpdateBookmark = (index, newUrl) => {
    const fullUrl = newUrl.startsWith("http")
      ? newUrl
      : `httpshttps://${newUrl}`;
    const updatedBookmarks = bookmarks.map((bookmark, i) =>
      i === index ? fullUrl : bookmark
    );
    setBookmarks(updatedBookmarks);
    setEditingBookmark(null);
  };

  const handleDeleteBookmark = (index) => {
    const filteredBookmarks = bookmarks.filter((_, i) => i !== index);
    setBookmarks(filteredBookmarks);
    setEditingBookmark(null);
  };

  return (
    <>
      <div className="h-fit w-[95%] sm:w-[536px] flex flex-col justify-center items-center gap-6 sm:gap-4 font-poppins">
        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="group h-fit w-full px-6 py-4 rounded-2xl flex items-center gap-2 bg-[#FAFAFA] border border-[#EEEEEE] text-base focus-within:border-neutral-500 hover:border-neutral-500 transition "
        >
          <i className="hgi hgi-stroke hgi-search-01 text-2xl text-[#BDBDBD] transition-colors duration-200 group-hover:text-neutral-600 group-focus-within:text-neutral-600"></i>
          <input
            type="text"
            placeholder="Search or type a URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="placeholder:text-[#9E9E9E] outline-none grow text-neutral-600 bg-transparent"
          />
        </form>

        {/* Bookmarks List */}
        <div className="w-full h-fit flex flex-row justify-start items-center gap-4 sm:gap-6 overflow-x-scroll pb-2 bookmark-List">
          <div className="flex gap-4 sm:gap-6">
            {bookmarks.map((url, index) => (
              <BookmarkItem
                key={index}
                url={url}
                onEditClick={() => setEditingBookmark({ url, index })}
              />
            ))}
          </div>
          <div>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="h-12 sm:h-14 w-12 sm:w-14 bg-[#FAFAFA] rounded-2xl flex justify-center items-center border border-[#EEEEEE] text-2xl text-[#BDBDBD] p-2.5 sm:p-4 hover:text-neutral-600 transition"
            >
              <i className="hgi hgi-stroke hgi-plus-sign"></i>
            </button>
          </div>
        </div>
      </div>

      <AddBookmarkModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddBookmark}
      />
      {editingBookmark && (
        <EditBookmarkModal
          bookmark={editingBookmark}
          onClose={() => setEditingBookmark(null)}
          onUpdate={handleUpdateBookmark}
          onDelete={handleDeleteBookmark}
        />
      )}
    </>
  );
};

export default SearchAndBookmarks;
