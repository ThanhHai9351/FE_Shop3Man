"use client"

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetOverlay } from "@/components/ui/sheet";
import GeminiAi from "@/shared/gemini/gemini_ai";

const ChatButtonDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => setIsOpen(true);

  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full shadow-lg p-4 bg-blue-500 hover:bg-blue-600 text-white"
          aria-label="Chat"
          onClick={openSheet}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetOverlay className="fixed inset-0 bg-black bg-opacity-25" />
        <SheetContent className="fixed top-0 bottom-0 right-0 w-80 max-w-full bg-white rounded-l-lg shadow-lg p-4">
          <GeminiAi/>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatButtonDialog;
