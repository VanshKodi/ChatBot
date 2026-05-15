import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { AGENT_NAME } from "./constants"
import ChatBody from "./components/ui/chat-body"

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('ischatOpen')
    if (stored === null) {
      localStorage.setItem('ischatOpen', 'false')
    } else {
      setOpen(JSON.parse(stored))
    }
  }, [])

  function handleToggle() {
    setOpen((prev) => {
      const next = !prev
      localStorage.setItem('ischatOpen', JSON.stringify(next))
      return next
    })
  }

  function handleClose() {
    setOpen(false)
    localStorage.setItem('ischatOpen', 'false')
  }

  const isMobile = window.innerWidth < 768

  const panelVariants = {
    hidden: isMobile
      ? { y: "100%", opacity: 0 }
      : { opacity: 0, scale: 0.95, y: 20 },
    visible: isMobile
      ? { y: "0%", opacity: 1 }
      : { opacity: 1, scale: 1, y: 0 },
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              zIndex: 2147483646,
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: isMobile ? "16px 16px 0 0" : "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              ...(isMobile
                ? { bottom: 0, left: 0, right: 0, height: "80vh", width: "100%" }
                : { bottom: "88px", right: "24px", width: "360px", height: "520px" }),
            }}
          >
            {/* Header */}
            <div style={{
              background: "#0F2D52",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}>
              <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "17px" }}>
                {AGENT_NAME}
              </span>
              <button
                onClick={handleClose}
                style={{ background: "none", border: "none", cursor: "pointer", color: "white" }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <ChatBody />              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={handleToggle}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 2147483647,
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          background: "#0F2D52",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
        whileTap={{ scale: 0.92 }}
      >
        <MessageCircle color="#C9A84C" size={26} />
      </motion.button>
    </div>
  )
}