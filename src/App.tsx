import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductsSection } from "./components/ProductsSection";
import { YouTubeSection } from "./components/YouTubeSection";
import { MissionSection } from "./components/MissionSection";
import { Footer } from "./components/Footer";
import { VideoModal } from "./components/VideoModal";

export function App() {
  // Theme state: respects user's localStorage, defaults to system theme
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("ethics-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  // Video modal state
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ethics-theme", theme);
  }, [theme]);

  // Listen to OS theme changes if user hasn't explicitly set a preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("ethics-theme");
      if (!saved) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleOpenVideo = (videoId: string, videoTitle: string) => {
    setActiveVideo({ id: videoId, title: videoTitle });
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <ProductsSection />
        <YouTubeSection onOpenVideoModal={handleOpenVideo} />
        <MissionSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Video Modal */}
      <VideoModal
        videoId={activeVideo?.id ?? null}
        videoTitle={activeVideo?.title ?? ""}
        onClose={handleCloseVideo}
      />
    </div>
  );
}

export default App;
