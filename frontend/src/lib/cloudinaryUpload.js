"use client"
export const cloudinaryUpload = async (file, path) => {
    try{

        const imageFile = new FormData();
        imageFile.append('file', file);
        imageFile.append('upload_preset', 'haldfki5');
        imageFile.append('folder', path);
        imageFile.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
        imageFile.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
        imageFile.append('api_secret', process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET);
        const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: imageFile
        });
        const cloudinaryData = await cloudinaryRes.json();
        return {
            url: cloudinaryData.url,
            public_id: cloudinaryData.public_id
        };
    }
    catch(err){
        return {
            error: err.message
        }
    }
}