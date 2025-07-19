"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeRenderer = ({
   code,
   language = "javascript",
}: {
   code: string;
   language?: string;
}) => {
   const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(code);
         setCopied(true);
         setTimeout(() => setCopied(false), 1500);
      } catch (err) {
         console.error("Failed to copy!", err);
      }
   };

   return (
      <section className="relative border border-gray-300 shadow-sm rounded-xl overflow-hidden">
         <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700 transition"
         >
            {copied ? "Copied!" : "Copy"}
         </button>

         <section className="max-h-[200px] overflow-auto">
            <SyntaxHighlighter
               language={language}
               style={oneDark}
               customStyle={{
                  margin: 0,
                  padding: "1rem",
               }}
               wrapLongLines
            >
               {code}
            </SyntaxHighlighter>
         </section>
      </section>
   );
};

export default CodeRenderer;
