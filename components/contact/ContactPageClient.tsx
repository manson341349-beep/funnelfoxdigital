"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGA } from "../../app/(client)/useGA";

export default function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const { track } = useGA();

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.55, 
        ease: "easeOut" as const
      } 
    },
  };
  const stagger = (delay=0)=>({
    animate:{ transition:{ staggerChildren:0.08, delayChildren:delay } }
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        track("contact_form_submit", {});
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container-max py-16">
      <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger()}>
        <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold">Contact us</motion.h1>
        <motion.p variants={fadeUp} className="mt-4 text-neutral-600">Tell us about your project. We usually reply within one business day.</motion.p>
        
        <motion.form
          onSubmit={handleSubmit}
          variants={stagger(0.1)}
          className="mt-8 max-w-xl space-y-4"
        >
          <motion.div variants={fadeUp}>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-sm font-medium">Company</label>
            <input name="company" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 min-h-[120px]"/>
          </motion.div>

          <motion.div variants={fadeUp}>
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary relative inline-flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <>
                  <span>Sending</span>
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" />
                  </span>
                </>
              ) : (
                "Send message"
              )}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>

      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="w-[90%] max-w-md rounded-2xl bg-white shadow-2xl p-8 text-center relative"
            >
              <h2 className={`text-2xl font-bold ${status === "success" ? "text-[var(--brand)]" : "text-rose-600"}`}>
                {status === "success" ? "Message Sent!" : "Something went wrong"}
              </h2>

              <p className="mt-3 text-neutral-600">
                {status === "success"
                  ? "Thanks for choosing FunnelFox Digital. We'll get back to you within 48 hours."
                  : "Please check your connection or try again later."}
              </p>

              <button
                onClick={() => setStatus("idle")}
                className={`mt-6 inline-flex justify-center rounded-xl px-5 py-2 font-medium text-white ${
                  status === "success" ? "bg-[var(--brand)] hover:bg-[var(--brand)]/90" : "bg-rose-600 hover:bg-rose-700"
                } transition`}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}