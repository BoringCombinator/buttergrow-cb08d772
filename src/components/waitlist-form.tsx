"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: "buttergrow-cb08d772",
          email: email.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-start">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        placeholder="name@company.com"
        className="h-11 w-full rounded-[8px] border border-[var(--border)] bg-white px-4 text-[14px] outline-none transition-opacity duration-150 ease-in focus:opacity-80"
      />
      <button type="submit" className="waitlist-btn sm:min-w-[150px]" disabled={status === "loading"}>
        Join Waitlist
      </button>
      <p className="text-[13px] muted sm:col-span-2">
        {status === "success" && "You are in. We will email you soon."}
        {status === "error" && "Could not submit right now. Please try again."}
        {status === "loading" && "Submitting..."}
      </p>
    </form>
  );
}
