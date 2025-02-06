import React, { useEffect, useState } from "react";

function CopyButton({ textToCopy, buttonInitialText, buttonFinalText }) {
  const [buttonText, setButtonText] = useState(buttonInitialText);

  function handleCopy() {
    navigator.clipboard.writeText(textToCopy);
    setButtonText(buttonFinalText);
  }

  useEffect(() => {
    setButtonText(buttonInitialText);
  }, [textToCopy, buttonInitialText]);

  return (
    <div>
      <button
        className="border px-5 py-2 shadow-[0px_1px_5px_#000] hover:shadow-[0px_0px_0px_#000]"
        onClick={handleCopy}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default CopyButton;
