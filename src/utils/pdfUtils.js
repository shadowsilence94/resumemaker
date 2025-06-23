import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateOptimizedPDF = async (element, templateId, filename = 'resume.pdf') => {
  try {
    // Store original styles
    const originalStyles = {
      transform: element.style.transform,
      width: element.style.width,
      height: element.style.height,
      margin: element.style.margin,
      padding: element.style.padding,
      position: element.style.position,
      overflow: element.style.overflow,
      boxShadow: element.style.boxShadow,
      borderRadius: element.style.borderRadius,
      minHeight: element.style.minHeight
    };
    
    // Apply PDF-optimized styles for perfect capture
    element.style.transform = 'none';
    element.style.width = '210mm';
    element.style.height = 'auto';
    element.style.minHeight = '297mm';
    element.style.margin = '0';
    element.style.padding = '0';
    element.style.position = 'relative';
    element.style.overflow = 'visible';
    element.style.boxShadow = 'none';
    element.style.borderRadius = '0';
    
    // Find the actual resume content and ensure it has proper dimensions
    const resumeContent = element.querySelector('[class*="resume"]') || element;
    const originalResumeStyles = {
      width: resumeContent.style.width,
      minHeight: resumeContent.style.minHeight,
      padding: resumeContent.style.padding,
      margin: resumeContent.style.margin,
      boxSizing: resumeContent.style.boxSizing
    };
    
    // Apply proper dimensions to resume content
    if (resumeContent !== element) {
      resumeContent.style.width = '210mm';
      resumeContent.style.minHeight = '297mm';
      resumeContent.style.padding = '15mm 20mm';
      resumeContent.style.margin = '0';
      resumeContent.style.boxSizing = 'border-box';
    }
    
    // Wait for images to load
    const images = element.querySelectorAll('img');
    await Promise.all(Array.from(images).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
        setTimeout(resolve, 2000);
      });
    }));

    // Force multiple reflows to ensure proper layout
    element.offsetHeight;
    await new Promise(resolve => setTimeout(resolve, 300));
    element.offsetHeight;
    await new Promise(resolve => setTimeout(resolve, 200));

    // Calculate proper dimensions for canvas
    const elementRect = element.getBoundingClientRect();
    const canvasWidth = Math.max(elementRect.width, 794); // 210mm at 96dpi ≈ 794px
    const canvasHeight = Math.max(elementRect.height, 1123); // 297mm at 96dpi ≈ 1123px

    // Generate canvas with exact dimensions
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      letterRendering: true,
      width: canvasWidth,
      height: canvasHeight,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      windowWidth: canvasWidth,
      windowHeight: canvasHeight
    });
    
    // Restore original styles
    Object.keys(originalStyles).forEach(key => {
      element.style[key] = originalStyles[key] || '';
    });
    
    if (resumeContent !== element) {
      Object.keys(originalResumeStyles).forEach(key => {
        resumeContent.style[key] = originalResumeStyles[key] || '';
      });
    }
    
    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Create PDF with exact A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });
    
    const pdfWidth = 210;
    const pdfHeight = 297;
    
    // Calculate scaling to fit content perfectly without cutting
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    
    if (imgHeight <= pdfHeight) {
      // Single page - fit perfectly
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
    } else {
      // Multiple pages - ensure no content is cut
      let yPosition = 0;
      let pageCount = 0;
      const pageHeight = pdfHeight;
      
      while (yPosition < canvas.height) {
        if (pageCount > 0) {
          pdf.addPage();
        }
        
        // Calculate the exact portion for this page
        const remainingHeight = canvas.height - yPosition;
        const sourceHeight = Math.min(
          (pageHeight / imgHeight) * canvas.height,
          remainingHeight
        );
        
        // Ensure we don't cut content by using a slightly smaller page height
        const actualSourceHeight = Math.min(sourceHeight, remainingHeight);
        
        // Create page canvas with exact dimensions
        const pageCanvas = document.createElement('canvas');
        const pageCtx = pageCanvas.getContext('2d');
        pageCanvas.width = canvas.width;
        pageCanvas.height = actualSourceHeight;
        
        // Draw the exact portion needed
        pageCtx.fillStyle = '#ffffff';
        pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        
        pageCtx.drawImage(
          canvas,
          0, yPosition, canvas.width, actualSourceHeight,
          0, 0, canvas.width, actualSourceHeight
        );
        
        const pageImgData = pageCanvas.toDataURL('image/png', 1.0);
        
        // Calculate the height for this page in PDF
        const pdfPageHeight = Math.min(pageHeight, (actualSourceHeight / canvas.height) * imgHeight);
        
        // Add image to PDF with no gaps
        pdf.addImage(
          pageImgData,
          'PNG',
          0,
          0,
          pdfWidth,
          pdfPageHeight,
          '',
          'FAST'
        );
        
        yPosition += actualSourceHeight;
        pageCount++;
        
        // Safety check to prevent infinite loop
        if (pageCount > 10) break;
      }
    }
    
    // Add metadata
    pdf.setProperties({
      title: filename.replace('.pdf', ''),
      subject: 'Professional Resume',
      author: 'Easy Resume Builder',
      creator: 'Easy Resume Builder'
    });
    
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF: ' + error.message);
  }
};
