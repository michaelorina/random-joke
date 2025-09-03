import { NextResponse } from "next/server";

const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call fake spaghetti? An impasta.",
  "Why did the computer go to the doctor? Because it caught a virus.",
];

export async function GET() {
  const random = jokes[Math.floor(Math.random() * jokes.length)];
  return NextResponse.json({ joke: random });
}
