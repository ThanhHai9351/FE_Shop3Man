"use server"

import { S3Client } from "@aws-sdk/client-s3"
import { createPresignedPost } from "@aws-sdk/s3-presigned-post"

export async function onSubmit(formData: FormData) {
  try {
    const file = formData.get("file") as File
    const fileName = file.name

    const client = new S3Client({
      region: process.env.AWS_REGION,
    })

    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Key: fileName,
    })

    if (!file) {
      throw new Error("No file provided.")
    }

    const formDataS3 = new FormData()
    Object.entries(fields).forEach(([key, value]) => {
      formDataS3.append(key, value)
    })
    formDataS3.append("file", file)

    const uploadResponse = await fetch(url, {
      method: "POST",
      body: formDataS3,
    })

    if (!uploadResponse.ok) {
      throw new Error(`Failed to upload file: ${uploadResponse.statusText}`)
    }

    const filePath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`

    console.log("File uploaded successfully:", filePath)
    return { success: true, message: "File uploaded successfully." }
  } catch (err) {
    console.error(err)
    return { success: false, error: err }
  }
}

// <form action={onSubmit}  method="post" encType="multipart/form-data">
// <input type="file" accept="image/*" name="file" required />
// <Button variant="default" type="submit">Upload</Button>
// </form>
