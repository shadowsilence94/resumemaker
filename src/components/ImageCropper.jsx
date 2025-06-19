import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import './ImageCropper.css';

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
    canvas.toBlob((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
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
        <div className="cropper-modal-backdrop">
            <div className="cropper-modal-content">
                <div className="cropper-container">
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
                <div className="cropper-controls">
                    <label>Zoom</label>
                    <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => onZoomChange(e.target.value)}
                    />
                </div>
                <div className="cropper-actions">
                    <button onClick={onClose} className="cropper-btn cancel">Cancel</button>
                    <button onClick={handleSave} className="cropper-btn save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default ImageCropper;