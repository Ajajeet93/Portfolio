import { useEffect, useMemo, useRef, useState } from "react";

function normalizeCommand(input) {
  return input.trim().toLowerCase();
}

export function TerminalContact({ contact, resumeHref }) {
  const commands = useMemo(
    () => ({
      help: {
        lines: ["Available commands:"],
        commandList: [
          "help",
          "contact",
          "resume",
          "coding profiles",
          "github",
          "linkedin",
          "leetcode",
          "gfg",
          "phone",
          "email",
          "clear",
        ],
      },
      contact: {
        entries: [
          { label: "Email", href: `mailto:${contact.email}`, actionLabel: "Send Email" },
          { label: "Phone", href: `tel:${contact.phone}`, actionLabel: "Call Phone" },
          { label: "LinkedIn", href: contact.linkedin, actionLabel: "Open LinkedIn" },
          { label: "GitHub", href: contact.github, actionLabel: "Open GitHub" },
        ],
      },
      email: {
        entries: [{ label: "Email", href: `mailto:${contact.email}`, actionLabel: "Send Email" }],
      },
      phone: {
        entries: [{ label: "Phone", href: `tel:${contact.phone}`, actionLabel: "Call Phone" }],
      },
      resume: {
        link: { label: "Open Resume", href: resumeHref },
      },
      github: {
        entries: [{ label: "GitHub", href: contact.github, actionLabel: "Open GitHub" }],
      },
      linkedin: {
        entries: [{ label: "LinkedIn", href: contact.linkedin, actionLabel: "Open LinkedIn" }],
      },
      leetcode: {
        entries: [{ label: "LeetCode", href: contact.leetcode, actionLabel: "Open LeetCode" }],
      },
      gfg: {
        entries: [{ label: "GeeksforGeeks", href: contact.gfg, actionLabel: "Open GeeksforGeeks" }],
      },
      "coding profiles": {
        entries: [
          { label: "GitHub", href: contact.github, actionLabel: "Open GitHub" },
          { label: "LeetCode", href: contact.leetcode, actionLabel: "Open LeetCode" },
          { label: "GeeksforGeeks", href: contact.gfg, actionLabel: "Open GeeksforGeeks" },
          { label: "Code360", href: contact.code360, actionLabel: "Open Code360" },
          { label: "Codolio", href: contact.codolio, actionLabel: "Open Codolio" },
          { label: "HackerRank", href: contact.hackerrank, actionLabel: "Open HackerRank" },
          { label: "CodeChef", href: contact.codechef, actionLabel: "Open CodeChef" },
        ],
      },
    }),
    [contact, resumeHref],
  );

  const [history, setHistory] = useState([
    {
      command: "contact",
      output: commands.contact,
    },
  ]);
  const [input, setInput] = useState("");
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const container = outputRef.current;

    if (!container) {
      return;
    }

    container.scrollTop = container.scrollHeight;
  }, [history]);

  const handleOutputWheel = (event) => {
    const container = outputRef.current;

    if (!container || event.deltaY === 0) {
      return;
    }

    const isScrollable = container.scrollHeight > container.clientHeight;

    if (!isScrollable) {
      return;
    }

    const isAtTop = container.scrollTop <= 0;
    const isAtBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight - 1;
    const shouldConsume =
      (event.deltaY > 0 && !isAtBottom) || (event.deltaY < 0 && !isAtTop);

    if (!shouldConsume) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (typeof event.nativeEvent.stopImmediatePropagation === "function") {
      event.nativeEvent.stopImmediatePropagation();
    }

    container.scrollTop += event.deltaY;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const command = normalizeCommand(input);

    if (!command) {
      return;
    }

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[command] ?? {
      lines: [`Command not found: ${command}`, "Try: help"],
    };

    setHistory((current) => [...current, { command, output }]);
    setInput("");
  };

  const handleChipClick = (command) => {
    setInput(command);
    inputRef.current?.focus();
  };

  return (
    <div className="terminal-shell mt-12">
      <div className="terminal-topbar">
        <span className="terminal-dot bg-[#7A0C0C]" />
        <span className="terminal-dot bg-[#d97706]" />
        <span className="terminal-dot bg-[#15803d]" />
        <p className="terminal-title">ajeet@portfolio:~ contact-terminal</p>
      </div>

      <div className="terminal-body">
        <div ref={outputRef} className="terminal-output" onWheelCapture={handleOutputWheel}>
          <div className="terminal-block terminal-built-in">
            <p className="terminal-command">$ help</p>
            {commands.help.lines.map((line) => (
              <p key={line} className="terminal-line">
                {line}
              </p>
            ))}
            <div className="terminal-command-list">
              {commands.help.commandList.map((command) => (
                <button
                  key={command}
                  type="button"
                  className="terminal-command-chip"
                  onClick={() => handleChipClick(command)}
                >
                  {command}
                </button>
              ))}
            </div>
          </div>

          {history.map((entry, index) => (
            <div key={`${entry.command}-${index}`} className="terminal-block">
              <p className="terminal-command">$ {entry.command}</p>
              {(entry.output.lines ?? []).map((line) => (
                <p key={line} className="terminal-line">
                  {line}
                </p>
              ))}
              {entry.output.entries ? (
                <div className="terminal-entry-list">
                  {entry.output.entries.map((entryItem) => (
                    <div key={`${entryItem.label}-${entryItem.href}`} className="terminal-entry-row">
                      <p className="terminal-line terminal-entry-label">{entryItem.label}</p>
                      <a
                        href={entryItem.href}
                        target="_blank"
                        rel="noreferrer"
                        className="terminal-action-button"
                      >
                        {entryItem.actionLabel ?? `Open ${entryItem.label}`}
                      </a>
                    </div>
                  ))}
                </div>
              ) : null}
              {entry.output.commandList ? (
                <div className="terminal-command-list">
                  {entry.output.commandList.map((command) => (
                    <button
                      key={command}
                      type="button"
                      className="terminal-command-chip"
                      onClick={() => handleChipClick(command)}
                    >
                      {command}
                    </button>
                  ))}
                </div>
              ) : null}
              {entry.output.link ? (
                <a
                  href={entry.output.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="terminal-action-button terminal-link"
                >
                  {entry.output.link.label}
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="terminal-prompt">
          <span className="terminal-prefix">ajeet@portfolio:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="terminal-input"
            placeholder="Type help"
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  );
}
