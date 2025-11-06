/**
 * server/src/storage/azureBlob.ts
 *
 * Azure Blob upload helper adapted conceptually from the event-registration-form
 * repo (which used Azure Blob in its implementation).
 *
 * Exposes: uploadBufferToAzure(containerName, buffer, blobName, contentType)
 *
 * Requires environment variable AZURE_STORAGE_CONNECTION_STRING.
 */

import { BlobServiceClient } from "@azure/storage-blob";

const { AZURE_STORAGE_CONNECTION_STRING } = process.env;

if (!AZURE_STORAGE_CONNECTION_STRING) {
  console.warn("AZURE_STORAGE_CONNECTION_STRING is not set. Azure uploads will fail until configured.");
}

export async function uploadBufferToAzure(containerName: string, buffer: Buffer, blobName: string, contentType = "application/octet-stream") {
  if (!AZURE_STORAGE_CONNECTION_STRING) {
    throw new Error("Azure connection string not configured");
  }

  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Ensure container exists (no-op if already exists)
  await containerClient.createIfNotExists();

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadOptions = {
    blobHTTPHeaders: {
      blobContentType: contentType,
    },
  };

  const res = await blockBlobClient.uploadData(buffer, uploadOptions);
  return {
    url: blockBlobClient.url,
    requestId: res.requestId,
  };
}