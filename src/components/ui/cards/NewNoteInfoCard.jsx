import React from "react";

function NewNoteInfoCard({ mode = "", tagsText, onChange }) {
  return (
    <div className="pb-4.5 mb-3 flex w-full flex-col items-start gap-3.5 border-b border-neutral-700 px-4 pb-4">
      <div className="top flex flex-row items-center justify-evenly gap-20">
        <div className="flex flex-row items-center justify-center gap-1.5">
          <img src={`/assets/images/icon-tag-${mode}.svg`} alt="icon" />
          <p className="text-sm font-normal leading-[130%] text-neutral-300">
            Tags
          </p>
        </div>
        <div className="right">
          <input
            className="h-14 bg-transparent text-white outline-none placeholder:whitespace-pre-wrap placeholder:text-sm placeholder:font-normal placeholder:leading-[130%] placeholder:text-neutral-400"
            type="text"
            maxLength="20"
            value={tagsText}
            onChange={onChange}
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
          />
        </div>
      </div>
      <div className="flex items-center justify-evenly gap-10">
        <div className="flex flex-row items-center justify-center gap-1.5">
          <img src={`/assets/images/icon-clock-${mode}.svg`} alt="icon" />
          <p className="text-sm font-normal leading-[130%] text-neutral-300">
            Last Edited
          </p>
        </div>
        <div className="right">
          <p className="text-sm font-normal leading-[130%] text-neutral-300">
            Not yet saved
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewNoteInfoCard;
