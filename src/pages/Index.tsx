import { motion } from "framer-motion";
import buaPhoto from "@/assets/bua-photo.jpeg";
import Confetti from "@/components/Confetti";

const hearts = ["💖", "🌸", "✨", "🎂", "🎁", "🌺", "💐", "🎈"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <Confetti />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12"
        style={{ background: "var(--gradient-soft)" }}>
        
        {/* Floating emojis */}
        {hearts.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl pointer-events-none"
            style={{
              left: `${10 + (i * 11) % 80}%`,
              top: `${15 + (i * 17) % 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-2xl mx-auto"
        >
          {/* Birthday text */}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-2"
          >
            🎉 Happy Birthday 🎉
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            style={{
              background: "var(--gradient-warm)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dear Bua!
          </motion.h1>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="relative mx-auto mb-8 w-56 h-56 md:w-72 md:h-72"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
            <img
              src={buaPhoto}
              alt="My beloved Bua"
              className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
            <motion.div
              className="absolute -top-3 -right-3 text-4xl"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎂
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-border"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
              You have been my <span className="font-bold text-primary">motivation</span> from the very start.
              Your love, strength, and warmth have shaped who I am today.
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary italic">
              "I love you, Bua! 💖"
            </p>
            <p className="mt-4 text-muted-foreground text-sm">
              Wishing you all the happiness, health, and love in the world.
              May this year bring you everything your beautiful heart desires. 🌸
            </p>
          </motion.div>

          {/* Cake emoji row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-8 flex justify-center gap-3 text-3xl"
          >
            {["🎂", "🎈", "🎁", "💐", "🎉"].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                {e}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
