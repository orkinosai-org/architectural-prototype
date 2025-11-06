import { IStorage } from './IStorage'

export class S3Stub implements IStorage {
  async uploadBuffer(container: string, buffer: Buffer, blobName: string, contentType = 'application/octet-stream') {
    // S3-compatible stub: return a consistent placeholder URL for prototype
    const url = `https://s3-placeholder.local/${container}/${blobName}`
    return { url }
  }
}
