import React from "react";

function NewNoteInfoCard({
  mode = "",
  tagsText,
  status = "Archived",
  onChange,
}) {
  return (
    <div className="grid grid-rows-1 grid-cols-[max-content_max-content] gap-3 border-b border-neutral-800">
      <div className="grid grid-rows-[1fr_1fr]">
        <div className="flex items-center gap-1.5">
          <img src={`/assets/images/icon-tag-${mode}.svg`} alt="icon" />
          <p className="text-sm font-normal leading-[130%] text-neutral-300">
            Tags
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <img src={`/assets/images/icon-clock-${mode}.svg`} alt="icon" />
          <p className="text-sm font-normal leading-[130%] text-neutral-300 whitespace-nowrap">
            Last Edited
          </p>
        </div>
      </div>

      <div className="grid grid-rows-[1fr_1fr] gap-2">
        <div className="flex items-center justify-between w-full h-auto">
          <div className="h-14">
            <input
              className="h-full bg-transparent outline-none placeholder:whitespace-pre-wrap placeholder:text-sm placeholder:font-normal placeholder:leading-[130%] placeholder:text-neutral-400"
              type="text"
              maxLength="20"
              value={tagsText}
              onChange={onChange}
              placeholder="Add tags separated by commas (e.g. Work, Planning)"
            />
          </div>
        </div>

        <div className="flex items-center justify-start">
          <p className="text-sm text-center font-normal leading-[130%] text-neutral-300">
            Not yet saved
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewNoteInfoCard;
