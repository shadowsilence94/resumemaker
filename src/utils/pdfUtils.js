import html2pdf from "html2pdf.js";

export const generateOptimizedPDF = async (
  element,
  templateId,
  filename = "resume.pdf"
) => {
  // Find the actual resume component, which should be the first child of the container
  const resumeContent = element.firstElementChild;

  if (!resumeContent) {
    console.error("Could not find the resume content element to print.");
    alert("An error occurred while preparing the PDF.");
    return false;
  }

  // Store the original margin style and theme to restore them later
  const originalContentMargin = resumeContent.style.margin;
  const wasInDarkMode = document.documentElement.classList.contains("dark");

  try {
    // --- PREPARE FOR PDF RENDER ---

    // 1. Force light mode to ensure a standard white background PDF
    if (wasInDarkMode) {
      document.documentElement.classList.remove("dark");
    }

    // 2. Directly set the margin on the content element to 0. This is the key fix.
    resumeContent.style.margin = "0";

    // Allow a brief moment for the browser to apply these style changes
    await new Promise((resolve) => setTimeout(resolve, 50));

    // --- CONFIGURE AND GENERATE PDF ---

    const options = {
      margin: 0,
      filename: filename,
      image: { type: "png", quality: 1.0 },
      html2canvas: {
        scale: 2, // A scale of 2 is a good balance of quality and performance
        useCORS: true,
        letterRendering: true,
        logging: false,
        backgroundColor: "#ffffff",
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
      enableLinks: true,
    };

    // Generate the PDF from the container element
    await html2pdf().from(element).set(options).save();
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF: " + error.message);
  } finally {
    // --- CLEAN UP ---
    // This block always runs, ensuring the on-screen resume looks correct again.

    // 1. Restore the original margin
    resumeContent.style.margin = originalContentMargin;

    // 2. Restore dark mode if it was originally active
    if (wasInDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }
};
