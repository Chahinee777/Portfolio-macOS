import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, ExternalLink } from "lucide-react/dist/esm/icons";
import React from "react";

const Resume = () => {
  const resumePath = "/files/AOULED-AMOR-Chahine-CV.pdf";

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>AOULED-AMOR-Chahine-CV.pdf</h2>
        
        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          title="Open Resume in New Tab"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="icon mr-3" />
        </a>

        <a
          href={resumePath}
          download="Chahine_Aouled_Amor_Resume.pdf"
          title="Download Resume"
          onClick={(e) => e.stopPropagation()}
        >
          <Download className="icon" />
        </a>
      </div>

      {/* PDF iframe - simple and works everywhere */}
      <div className="flex-1 overflow-hidden bg-gray-100">
        <iframe
          src={resumePath}
          title="Resume PDF"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
