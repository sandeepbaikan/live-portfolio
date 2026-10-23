"use client";
import { FormEvent, useState } from "react";
import { ArrowUp, Bot, Sparkles } from "lucide-react";
const suggestions = [
  "What is his React experience?",
  "What projects has he delivered?",
  "Is he experienced with GenAI?",
];
type Message = { role: "user" | "assistant"; content: string };
export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! Ask me about Sandeep’s engineering experience, selected projects, or technical focus.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function ask(question: string) {
    if (!question.trim() || busy) return;
    const q = question.trim().slice(0, 500);
    setMessages((prev) => [...prev, { role: "user", content: q }]);
    setInput("");
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      if (!res.ok) throw Error("The assistant is unavailable right now.");
      const data: { reply: string } = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setError("Could not reach the assistant. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    void ask(input);
  }
  return (
    <div className="assistant-card">
      <div className="assistant-head">
        <div className="assistant-avatar">
          <Bot size={21} />
        </div>
        <div>
          <strong>Portfolio assistant</strong>
          <small>Public project knowledge only</small>
        </div>
        <div className="online-dot" aria-label="Interface ready" />
      </div>
      <div
        className="assistant-messages"
        aria-live="polite"
        aria-label="Assistant conversation"
      >
        {messages.map((m, i) => (
          <div className={`message ${m.role}`} key={i}>
            {m.content}
          </div>
        ))}
        {busy && <div className="message assistant">Thinking…</div>}
      </div>
      <div className="suggestions">
        {suggestions.map((s) => (
          <button key={s} disabled={busy} onClick={() => void ask(s)}>
            {s}
          </button>
        ))}
      </div>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <form className="assistant-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="assistant-input">
          Ask about experience
        </label>
        <input
          id="assistant-input"
          maxLength={500}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about my work…"
        />
        <button aria-label="Send question" disabled={busy || !input.trim()}>
          <ArrowUp size={19} />
        </button>
      </form>
      <p className="assistant-disclaimer">
        <Sparkles size={13} /> AI responses may be imperfect. No confidential
        client data.
      </p>
    </div>
  );
}
