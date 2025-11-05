import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Cloud, Upload, FileText, Image, Video, Music } from "lucide-react";

export default function CloudStorage() {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleUploadClick = () => {
    console.log("Upload button clicked");
    toast({
      title: "S3 Integration Pending",
      description: "Cloud storage upload functionality will be available in production.",
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleUploadClick();
  };

  const fileTypes = [
    { icon: FileText, label: "Documents", formats: "PDF, DOC, TXT" },
    { icon: Image, label: "Images", formats: "JPG, PNG, GIF" },
    { icon: Video, label: "Videos", formats: "MP4, AVI, MOV" },
    { icon: Music, label: "Audio", formats: "MP3, WAV, OGG" },
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Cloud className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Cloud Object Storage</h1>
          <p className="text-muted-foreground">
            S3-compatible file storage and management
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              data-testid="dropzone-upload"
            >
              <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop files here, or click to browse
              </p>
              <Button onClick={handleUploadClick} data-testid="button-upload">
                Select Files
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {fileTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-filetype-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{type.label}</CardTitle>
                      <CardDescription className="text-xs">{type.formats}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Storage Integration Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">S3-Compatible Providers</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Amazon S3</li>
                <li>DigitalOcean Spaces</li>
                <li>Cloudflare R2</li>
                <li>MinIO (self-hosted)</li>
                <li>Backblaze B2</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Planned Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Multipart upload for large files</li>
                <li>Automatic file type detection and validation</li>
                <li>CDN integration for fast global delivery</li>
                <li>Folder organization and tagging</li>
                <li>Access control and signed URLs</li>
                <li>Storage usage analytics and quotas</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> The storage interface is ready for S3 API integration.
                Configuration includes bucket setup, CORS policies, and lifecycle rules.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
