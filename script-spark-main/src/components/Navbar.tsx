import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth, AuthModal } from "@/components/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const { user, signOut } = useAuth();

  const openLogin = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
  };

  const openSignup = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Scriptify</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a>
              <a href="#generator" className="text-muted-foreground hover:text-foreground transition-colors">Generator</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground">{user.email}</span>
                  <Button variant="ghost" onClick={signOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={openLogin}>Sign In</Button>
                  <Button variant="glow" onClick={openSignup}>Get Started</Button>
                </>
              )}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-border/30">
              <div className="flex flex-col gap-4">
                <a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a>
                <a href="#generator" className="text-muted-foreground hover:text-foreground transition-colors">Generator</a>
                <div className="flex gap-3 pt-4">
                  {user ? (
                    <Button variant="ghost" className="flex-1" onClick={signOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  ) : (
                    <>
                      <Button variant="ghost" className="flex-1" onClick={openLogin}>Sign In</Button>
                      <Button variant="glow" className="flex-1" onClick={openSignup}>Get Started</Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </>
  );
};

export default Navbar;
