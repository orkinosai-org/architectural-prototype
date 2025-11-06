import { IStorage } from './IStorage'
import { S3Stub } from './s3Stub'
import { uploadBufferToAzure } from './azureBlob'

export function createStorageAdapter(): IStorage {
  const provider = process.env.STORAGE_PROVIDER || 'azure'
  if (provider === 'azure') {
    return {
      async uploadBuffer(container: string, buffer: Buffer, blobName: string, contentType = 'application/octet-stream') {
        const res = await uploadBufferToAzure(container, buffer, blobName, contentType)
        return { url: res.url }
      }
    }
  }
  return new S3Stub()
}
