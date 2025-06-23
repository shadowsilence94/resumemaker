import html2pdf from "html2pdf.js";

export const generateOptimizedPDF = async (
  element,
  templateId,
  filename = "resume.pdf"
) => {
  const styleId = "pdf-override-style";
  // Check if the page is in dark mode before we start
  const wasInDarkMode = document.documentElement.classList.contains("dark");

  try {
    // If in dark mode, temporarily remove it to force a light-mode render for the PDF
    if (wasInDarkMode) {
      document.documentElement.classList.remove("dark");
    }

    const overrideStyle = document.createElement("style");
    overrideStyle.id = styleId;

    // This CSS rule is temporarily injected to ensure the PDF looks perfect.
    overrideStyle.innerHTML = `
      /* General rule to remove margins from all templates */
      [class*="-resume"] {
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
      }
    `;

    document.head.appendChild(overrideStyle);

    // Allow a brief moment for styles to apply
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
    // This 'finally' block always runs, ensuring our temporary changes are reverted.
    const styleToRemove = document.getElementById(styleId);
    if (styleToRemove) {
      styleToRemove.remove();
    }
    // If the page was originally in dark mode, add the class back.
    if (wasInDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }
};
