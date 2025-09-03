"use client"

import { useState } from "react"
import { ModeToggle } from "@/components/menu";

export default function Home() {
  const [joke, setJoke] = useState<string>("Click the button to get a Joke!");
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchJoke() {
    try {
      setLoading(true);
      const res = await fetch("api/joke");
      const data = await res.json();
      setJoke(data.joke);
    } catch (err) {
      setJoke("Ooops! Something went Wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <ModeToggle />
      <div className="max-w-md text-center">
        <p className="mb-4 text-xl font-medium">{loading ? "Loading..." : joke}</p>
        <button
          onClick={fetchJoke}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Get Random Joke
        </button>
      </div>
    </main>
  )
}
