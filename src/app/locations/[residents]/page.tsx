'use client';

import { Note, Notes } from "@/app/lib/types";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page (
  { searchParams } : { searchParams: {
    name: string,
    image: string,
    status: string,
    episodes: string
  }}) {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<Notes | null>(null);

  useEffect(() => {
    const persistedNotes = localStorage.getItem(searchParams.name);
    if (persistedNotes) {
      setNotes(JSON.parse(persistedNotes));
    } else {
      setNotes(null);
    }
  },[searchParams.name])

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setNote(value);
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const new_note: Note = {comment: note}
    const updated_notes: Notes = { notes: [...notes ? notes.notes: [], new_note]}
    setNotes(updated_notes);
    localStorage.setItem(searchParams.name, JSON.stringify(updated_notes));
    setNote("");
  }

  return(
  <>
  <div className="flex flex-col space-y-3 md:flex-row md:justify-between md:max-w-[80%] mx-auto">
  <div className='w-full md:w-1/2 space-y-2 max-w-full my-3'>
    <Image
      src={searchParams.image}
      alt={searchParams.name}
      width={150}
      height={150}
      className='mt-2 md:w-[75%]'
    />
    <p className='font-semibold flex justify-between md:max-w-[75%] px-1'>Name: <span className='text-sm font-light'>{searchParams.name}</span></p>
    <p className='font-semibold flex justify-between md:max-w-[75%] px-1'>Status: <span className='text-sm font-light'>{searchParams.status}</span></p>
    <h4 className='font-semibold px-1'>Episodes</h4>
    <div className='bg-gray-200 rounded-xl mb-2 p-1'>
      {searchParams.episodes.split('|').map((episode) => (
        <p key={episode} className='p-1 text-sm'>{episode}</p>
      ))}
    </div>
  </div>

  <div className="w-full md:w-1/2">
    <form className="w-full flex flex-col justify-start" onSubmit={handleSubmit}>
      <textarea className="h-20 w-full max-w-[90%] md:w-full mx-auto my-3 p-1 focus:border-emerald-700 border border-gray-100 rounded-lg" name="note" onChange={handleChange} value={note} placeholder="Add notes"></textarea>
      <button type="submit" className="bg-teal-200 my-2 border border-pink-100 max-w-[25%] p-1 rounded-xl">Comment</button>
    </form>
    <div className="bg-gray-100 rounded-lg my-2 p-1">
      <h4 className="text-lg font-semibold mb-1">NOTES</h4>
      {notes && notes.notes.length > 0 ? (
      notes.notes.map((n) => (
        <p key={n.comment} className="text-base bg-gray-80 p-1 opacity-75 font-medium my-1">{n.comment}</p>
      ))
      ) : (
        <p>No notes left yet</p>
     )}
    </div>
  </div>
  </div>
  </>
  )
}
