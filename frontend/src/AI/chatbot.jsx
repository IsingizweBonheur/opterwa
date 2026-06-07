import { useState, useEffect, useRef } from "react";
import { 
  MessageCircle, X, Send, Loader2, Sparkles, HelpCircle, 
  Phone, Mail, Globe, Info, Zap, Heart, Handshake, 
  FolderKanban, MessageSquare, Info as InfoIcon,
  ChevronDown
} from "lucide-react";

const NGO_KNOWLEDGE = {
  about:
    "OPTERWA empowers artisans through technology, training, and digital market access. We believe every artisan deserves the opportunity to grow, earn sustainably, and showcase their craft to the world through technology.",
  mission:
    "Our mission is to bridge traditional craft with modern digital tools to create sustainable income for communities.",
  donate:
    "You can support us through our donation page. Every contribution helps train and empower artisans. Your donations go directly to providing digital skills training, tools, and market access for local artisans.",
  volunteer:
    "We welcome volunteers in tech, design, and community outreach programs. You can help by teaching digital skills, website development, social media management, or assisting in our training workshops.",
  projects:
    "We run training programs, digital transformation initiatives, and artisan marketplace support projects. Current projects include: Digital Literacy for Artisans, E-commerce Setup Program, and Global Market Access Initiative.",
  services: "OPTERWA offers: 📱 Digital skills training, 🛠️ Artisan marketplace platform, 💻 E-commerce setup, 📊 Business digital transformation, and 🌍 Global market access programs.",
  cost: "Our programs are mostly free for artisans! For specific training or digital tools, please contact us directly at +250 788 231 302 for a personalized discussion.",
  mobile: "Yes! We have a mobile-friendly artisan platform and are developing a dedicated mobile app for artisans to showcase their products, track sales, and access training content.",
  contact: "You can reach OPTERWA at 📞 +250 788 231 302 or 📧 info@opterwa.com",
};

function getAIResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("what is") || msg.includes("about")) return NGO_KNOWLEDGE.about;
  if (msg.includes("mission")) return NGO_KNOWLEDGE.mission;
  if (msg.includes("donate") || msg.includes("donation") || msg.includes("give money") || msg.includes("support")) return NGO_KNOWLEDGE.donate;
  if (msg.includes("volunteer")) return NGO_KNOWLEDGE.volunteer;
  if (msg.includes("project")) return NGO_KNOWLEDGE.projects;
  if (msg.includes("service")) return NGO_KNOWLEDGE.services;
  if (msg.includes("cost") || msg.includes("price") || msg.includes("website cost") || msg.includes("how much") || msg.includes("free")) return NGO_KNOWLEDGE.cost;
  if (msg.includes("mobile") || msg.includes("app")) return NGO_KNOWLEDGE.mobile;
  if (msg.includes("contact") || msg.includes("phone") || msg.includes("email") || msg.includes("reach")) return NGO_KNOWLEDGE.contact;

  return "I can help you with OPTERWA's mission, services, costs, mobile apps, donation process, volunteering, projects, and contact info. Try asking something specific!";
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm OPTERWA Assistant. Ask me about our mission, donations, or volunteering.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef(null);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const sendMessage = async (messageText = null) => {
    const finalMessage = messageText || input;
    if (!finalMessage.trim() || isThinking) return;

    const userMsg = {
      role: "user",
      text: finalMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!messageText) setInput("");
    setIsThinking(true);

    setTimeout(() => {
      const botResponse = getAIResponse(finalMessage);
      const botMsg = {
        role: "bot",
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsThinking(false);
    }, 1500);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const quickQuestions = [
    { icon: InfoIcon, text: "About OPTERWA", color: "text-blue-500" },
    { icon: Heart, text: "How to donate?", color: "text-red-500" },
    { icon: Handshake, text: "Volunteer opportunities", color: "text-green-500" },
    { icon: FolderKanban, text: "Our projects", color: "text-purple-500" },
    { icon: MessageSquare, text: "Contact info", color: "text-orange-500" },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 font-sans">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl relative"
        >
          <MessageCircle size={isMobile ? 20 : 22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className={`
          fixed sm:absolute
          ${isMobile 
            ? 'inset-0 bottom-0 rounded-none' 
            : 'bottom-0 right-0 w-96 h-[600px] rounded-2xl'
          }
          bg-white shadow-2xl flex flex-col overflow-hidden border border-gray-200
        `}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={isMobile ? 18 : 20} />
              <div>
                <span className="font-semibold text-sm sm:text-base">OPTERWA Assistant</span>
                <p className="text-xs text-blue-100 hidden sm:block">AI-Powered Support</p>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="hover:bg-white/20 rounded-lg p-1.5 sm:p-1 transition-colors"
                title="Help & Info"
              >
                <HelpCircle size={isMobile ? 16 : 18} />
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  setShowQuickQuestions(false);
                  setShowHelp(false);
                }}
                className="hover:bg-white/20 rounded-lg p-1.5 sm:p-1 transition-colors"
              >
                <X size={isMobile ? 16 : 18} />
              </button>
            </div>
          </div>

          {/* Help Card (collapsible) */}
          {showHelp && (
            <div className="mx-2 sm:mx-3 mt-2 sm:mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-2">
                <Info size={isMobile ? 14 : 16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold text-blue-900 mb-2">ℹ️ How OPTERWA AI Works</h4>
                  <p className="text-xs text-blue-800 mb-3">
                    I'm trained on OPTERWA's mission, projects, donation process, and volunteer programs.
                    Ask me anything about our work with artisans!
                  </p>
                  <div className="border-t border-blue-200 pt-2 mt-1">
                    <p className="text-xs font-medium text-blue-900 mb-1">📞 Direct Contact:</p>
                    <div className="space-y-1 text-xs text-blue-800">
                      <div className="flex items-center gap-2">
                        <Phone size={12} />
                        <span className="text-xs">+250 788 231 302</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={12} />
                        <span className="text-xs">info@opterwa.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe size={12} />
                        <span className="text-xs">www.opterwa.org</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowHelp(false)}
                    className="text-xs text-blue-600 hover:text-blue-800 mt-2 font-medium"
                  >
                    Got it ✓
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 space-y-3 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] sm:max-w-[80%] ${msg.role === "user" ? "order-1" : "order-2"}`}>
                    <div
                      className={`px-3 sm:px-4 py-2 rounded-2xl shadow-sm text-xs sm:text-sm
                        ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none"
                            : "bg-white border border-gray-200 text-gray-700 rounded-bl-none"
                        }`}
                    >
                      {msg.text}
                    </div>
                    <p className={`text-[10px] sm:text-xs text-gray-400 mt-1 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>

                {/* Quick Questions Card — appears after first bot message */}
                {!showQuickQuestions && msg.role === "bot" && messages.length <= 2 && (
                  <div className="mt-4">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap size={isMobile ? 12 : 14} className="text-purple-600" />
                        <span className="text-[10px] sm:text-xs font-semibold text-purple-700">Quick questions:</span>
                        <span className="text-[10px] sm:text-xs text-gray-400">{formatTime(new Date())}</span>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {quickQuestions.map((q, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              sendMessage(q.text);
                              setShowQuickQuestions(true);
                            }}
                            className="w-full text-left text-xs sm:text-sm text-gray-700 hover:text-blue-600 hover:bg-white/60 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all flex items-center gap-2 sm:gap-3 group"
                          >
                            <q.icon size={isMobile ? 14 : 18} className={q.color} />
                            <span className="flex-1">{q.text}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-xs sm:text-sm">→</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Thinking Indicator */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-3 sm:px-4 py-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 size={isMobile ? 12 : 14} className="animate-spin text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-500">Thinking</span>
                    <span className="flex gap-1">
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2 items-end">
              <div className="flex-1 relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about OPTERWA..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  disabled={isThinking}
                />
              </div>
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isThinking}
                className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1 sm:gap-2
                  ${
                    !input.trim() || isThinking
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:from-blue-700 hover:to-blue-800 active:scale-95"
                  }`}
              >
                <Send size={isMobile ? 14 : 18} />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-2 text-center">
              Powered by OPTERWA AI • Responses may take a moment
            </p>
          </div>

          {/* Mobile swipe indicator */}
          {isMobile && (
            <div className="flex justify-center py-1 bg-white border-t border-gray-100">
              <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}