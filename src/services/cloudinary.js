export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "TU_UPLOAD_PRESET"); // ← reemplaza esto
  const response = await fetch("https://api.cloudinary.com/v1_1/TU_CLOUD_NAME/image/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error al subir la imagen a Cloudinary");
  }

  const data = await response.json();
  return data.secure_url;
};
