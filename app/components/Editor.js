"use client";
import './editor.css'
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
 

export default function Editor() {
  const editor = useCreateBlockNote();
 
  return <BlockNoteView editor={editor} theme={'light'} sideMenu={false}/>;
}