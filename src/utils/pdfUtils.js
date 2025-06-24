import html2pdf from "html2pdf.js";

export const generateOptimizedPDF = async (
  element,
  templateId,
  filename = "resume.pdf"
) => {
  if (!element) {
    console.error("The element to print was not found.");
    return;
  }

  const wasInDarkMode = document.documentElement.classList.contains("dark");
  // Store the original transform style to restore it later
  const originalTransform = element.style.transform;

  try {
    // --- Prepare for PDF Render ---
    if (wasInDarkMode) {
      document.documentElement.classList.remove("dark");
    }
    // Temporarily reset the scale to ensure the content is captured correctly
    element.style.transform = "scale(1)";

    // Allow a brief moment for the browser to apply these style changes
    await new Promise((resolve) => setTimeout(resolve, 50));

    // --- Configure and Generate PDF ---
    const options = {
      margin: 0,
      filename: filename,
      image: { type: "png", quality: 1.0 },
      html2canvas: {
        scale: 2,
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

    await html2pdf().from(element).set(options).save();

    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF: " + error.message);
  } finally {
    // --- Clean Up ---
    // Restore the original styles so the on-screen preview looks correct again.
    element.style.transform = originalTransform;
    if (wasInDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }
};
