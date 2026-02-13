import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const facts = [
  { emoji: "🔢", title: "A Prime Number", desc: "13 is a prime number — indivisible, unique, and strong. Just like Bua!" },
  { emoji: "🃏", title: "Lucky 13", desc: "In many cultures, 13 symbolizes transformation, new beginnings, and good fortune." },
  { emoji: "🌙", title: "13 Lunar Cycles", desc: "There are 13 full moons in a year — each one as beautiful and radiant as Bua's smile." },
  { emoji: "🇺🇸", title: "13 Stripes", desc: "The US flag has 13 stripes representing the original colonies — a symbol of foundation and strength." },
  { emoji: "💎", title: "The 13th Element", desc: "Aluminum, the 13th element, is lightweight yet incredibly strong — resilience in its purest form." },
  { emoji: "🎂", title: "Bua's Special Day", desc: "And today, the 13th, marks the birthday of someone truly extraordinary!" },
];

const NumberThirteen = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating 13s in background */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-black text-primary/5 select-none pointer-events-none"
          style={{
            fontSize: `${60 + Math.random() * 100}px`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            fontFamily: "'Playfair Display', serif",
          }}
          animate={{ rotate: [0, 10, -10, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          13
        </motion.div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="text-8xl md:text-9xl font-black mb-4"
            style={{
              background: "var(--gradient-warm)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            13
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Why 13 is Special ✨
          </h1>
          <p className="text-muted-foreground mt-2">
            A number that's far more magical than you think...
          </p>
        </motion.div>

        {/* Facts */}
        <div className="space-y-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.3, duration: 0.6 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border shadow-sm flex gap-4 items-start"
            >
              <span className="text-3xl mt-1 shrink-0">{fact.emoji}</span>
              <div>
                <h3 className="font-bold text-lg text-foreground">{fact.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{fact.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showButton ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-center mt-12"
        >
          {showButton && (
            <motion.button
              onClick={() => navigate("/birthday")}
              className="px-8 py-4 rounded-full text-lg font-bold text-primary-foreground shadow-lg"
              style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎂 Now Let's Celebrate Bua's Birthday! 🎉
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NumberThirteen;
