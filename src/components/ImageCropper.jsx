import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Canvas is empty');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    }, 'image/jpeg');
  });
}


const ImageCropper = ({ imageSrc, onCropComplete, onClose }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = useCallback((location) => {
        setCrop(location);
    }, []);
    
    const onZoomChange = useCallback((value) => {
        setZoom(value);
    }, []);

    const onCropPixelsChange = useCallback((croppedArea, croppedAreaPixelsValue) => {
        setCroppedAreaPixels(croppedAreaPixelsValue);
    }, []);

    const handleSave = async () => {
        if (imageSrc && croppedAreaPixels) {
            const croppedImageBase64 = await getCroppedImg(imageSrc, croppedAreaPixels);
            onCropComplete(croppedImageBase64);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000]">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg w-[90%] max-w-lg flex flex-col shadow-2xl">
                <div className="relative w-full h-72 bg-gray-200 dark:bg-black mb-4 rounded-md">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        cropShape="round"
                        showGrid={false}
                        onCropChange={onCropChange}
                        onZoomChange={onZoomChange}
                        onCropComplete={onCropPixelsChange}
                    />
                </div>
                <div className="flex flex-col items-center mb-4">
                    <label className="mb-2 text-sm text-gray-700 dark:text-gray-300">Zoom</label>
                    <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => onZoomChange(e.target.value)}
                        className="w-4/5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                </div>
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-5 py-2 bg-gray-200 dark:bg-gray-600 dark:text-gray-200 rounded-md font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageCropper;