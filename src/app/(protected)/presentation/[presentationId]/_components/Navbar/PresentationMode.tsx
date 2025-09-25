"use client";

import { useSlideStore } from "@/store/useSlideStore";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { MasterRecursiveComponent } from "../editor/MasterRecursiveComponent";

type Props = {
  onClose: () => void;
};

const PresentationMode = ({ onClose }: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const { getOrderedSlides, currentTheme } = useSlideStore();

  const slides = getOrderedSlides();

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const isLastSlide = currentSlideIndex === slides.length - 1;

  const goToNextSlide = () => {
    if (isLastSlide) {
      onClose();
    } else {
      setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        if (currentSlideIndex === slides.length - 1) {
          onClose();
        } else {
          setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
        }
      } else if (e.key === "ArrowLeft") {
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slides.length, currentSlideIndex, onClose]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div
        className="relative w-full h-full"
        style={{
          aspectRatio: "16/9",
          maxHeight: "100vh",
          maxWidth: "177.78vh",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className={`w-full h-full pointer-events-none ${slides[currentSlideIndex].className}`}
            style={{
              backgroundColor: currentTheme.slideBackgroundColor,
              backgroundImage: currentTheme.gradientBackground,
              color: currentTheme.accentColor,
              fontFamily: currentTheme.fontFamily,
            }}
            key={currentSlideIndex}
          >
            <MasterRecursiveComponent
              content={slides[currentSlideIndex].content}
              onContentChange={() => {}}
              slideId={slides[currentSlideIndex].id}
              isPreview={false}
              isEditable={false}
            />
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          <X className="w-6 h-6" />
        </Button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Button
            variant="outline"
            size="icon"
            disabled={currentSlideIndex === 0}
            onClick={goToPreviousSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {!isLastSlide && (
            <Button variant="outline" size="icon" onClick={goToNextSlide}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PresentationMode;
