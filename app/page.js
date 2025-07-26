"use client";
import commands from "@/data/command";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Counter } from "counterapi";

const Terminal = () => {
  const counter = new Counter({
    workspace: "sam",
  });
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(null);
  const [count, setCount] = useState(null);
  const bottomRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === "ArrowUp") {
      if (history.length > 0) {
        const newIndex =
          historyIndex === null ? history.length - 1 : historyIndex - 1;

        if (newIndex >= 0) {
          setInput(history[newIndex].command);
          setHistoryIndex(newIndex);
        }
      }
    } else if (e.key === "ArrowDown") {
      if (history.length > 0 && historyIndex !== null) {
        const newIndex = historyIndex + 1;

        if (newIndex < history.length) {
          setInput(history[newIndex].command);
          setHistoryIndex(newIndex);
        } else {
          setInput("");
          setHistoryIndex(null); // go beyond history, clear input
        }
      }
    } else if (e.key === "Enter") {
      setIsTyping(true);
      const cmd = input.trim().toLowerCase();
      const command = commands[cmd] || { action: () => commands.notFound(cmd) };

      setTimeout(() => {
        const result = command.action();
        if (result === "CLEAR") {
          setHistory([]);
        } else {
          setHistory([...history, { command: cmd, output: result }]);
        }
        setInput("");
        setIsTyping(false);
        setHistoryIndex(null);
      }, 300);
    }
  };

  useEffect(() => {
    const fetchCount = async () => {
      // Check if the user has already viewed the portfolio
      const viewed = sessionStorage.getItem("viewedPortfolio");

      if (!viewed) {
        // Count this as a new visit
        const result = await counter.up("portfolio-counter");
        sessionStorage.setItem("viewedPortfolio", "true");
        setCount(result.data.up_count);
      } else {
        // Just fetch the existing count
        const result = await counter.get("portfolio-counter");
        setCount(result.data.up_count);
      }
    };
    fetchCount();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Matrix-like background particles
  const particles = Array(50)
    .fill()
    .map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 10,
    }));

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-green-400 opacity-20 text-xs"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "+" : "●"}
          </motion.div>
        ))}
      </div>

      {/* Terminal Content */}
      <div className="relative z-10 p-4 text-green-400 font-mono text-sm overflow-y-auto max-h-screen [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-green-400 font-bold">Asad Ali</div>
              <div className="text-green-300 text-xs">Web Developer</div>
            </div>
            <div className="text-right">
              <div className="text-green-300 text-xs">
                Portfolio Views:{" "}
                <span className="bg-green-400 text-black px-1">
                  {count !== null ? count : "Loading..."}
                </span>
              </div>
            </div>
          </div>

          <div className="text-gray-600 text-xs mb-2">
            ❯ Portfolio Terminal v1.0.0
          </div>

          <div className="text-green-400 mb-2">
            Welcome to my Interactive Portfolio Terminal!
          </div>
          <div className="text-green-300 text-xs mb-1">
            Type 'help' to see available commands.
          </div>
          <div className="text-green-300 text-xs mb-4">
            Use arrow keys to navigate command history.
          </div>

          <div className="text-gray-600/70 text-xs mb-6">
            Last login: {new Date().toLocaleString()}
          </div>
        </div>

        {/* Command History */}
        <AnimatePresence>
          {history.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4"
            >
              <div className="text-yellow-400 mb-1">
                asadali@portfolio:~${" "}
                <span className="text-green-400">{entry.command}</span>
              </div>
              <div className="text-green-300 pl-0 whitespace-pre-wrap">
                {entry.output}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4"
            >
              <div className="text-yellow-400">
                asadali@portfolio:~${" "}
                <span className="text-green-400">{input}</span>
              </div>
              <div className="text-green-300 flex items-center">
                Processing
                <div className="flex ml-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      .
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input Line */}
        <div className="flex items-center">
          <span className="text-yellow-400">asadali@portfolio:~$ </span>
          <input
            autoFocus
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (historyIndex !== null) {
                setHistoryIndex(null); // Reset history index when typing
              }
            }}
            onKeyDown={handleCommand}
            className="bg-transparent outline-none border-none text-green-400 flex-1 ml-1"
            disabled={isTyping}
          />
          <motion.span
            className="text-green-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            █
          </motion.span>
        </div>

        <div ref={bottomRef} />

        {/* Footer timestamp */}
        <div className="fixed bottom-2 right-4 text-gray-500/50 text-xs">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
