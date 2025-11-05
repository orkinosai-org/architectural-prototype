export interface IStorage {
  uploadBuffer(container: string, buffer: Buffer, blobName: string, contentType?: string): Promise<{ url: string }>
}
