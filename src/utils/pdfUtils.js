import html2pdf from "html2pdf.js";

export const generateOptimizedPDF = async (
  element,
  templateId,
  filename = "resume.pdf"
) => {
  const styleId = "pdf-override-style";
  const wasInDarkMode = document.documentElement.classList.contains("dark");

  try {
    if (wasInDarkMode) {
      document.documentElement.classList.remove("dark");
    }

    const overrideStyle = document.createElement("style");
    overrideStyle.id = styleId;

    overrideStyle.innerHTML = `
      [class*="Resume"] {
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
      }
    `;

    document.head.appendChild(overrideStyle);

    await new Promise((resolve) => setTimeout(resolve, 50));

    const options = {
      margin: 0,
      filename: filename,
      image: { type: "png", quality: 1.0 },
      html2canvas: {
        scale: 3,
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
    const styleToRemove = document.getElementById(styleId);
    if (styleToRemove) {
      styleToRemove.remove();
    }
    if (wasInDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }
};
