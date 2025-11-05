import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2, Languages } from "lucide-react";

export default function Translation() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "ar", name: "Arabic" },
  ];

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to translate",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    console.log("Translating:", { sourceText, sourceLang, targetLang });

    setTimeout(() => {
      setTranslatedText(
        `[Translated from ${sourceLang} to ${targetLang}]\n\n${sourceText}\n\n(LibreTranslate API integration will be implemented in production)`
      );
      setIsTranslating(false);
      toast({
        title: "Translation complete",
        description: "Text has been translated successfully",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Languages className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Text Translation</h1>
          <p className="text-muted-foreground">
            Powered by LibreTranslate API - Real-time cross-language translation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Source Text</span>
                <Select value={sourceLang} onValueChange={setSourceLang}>
                  <SelectTrigger className="w-[180px]" data-testid="select-source-lang">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter text to translate..."
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                className="min-h-[300px] resize-none"
                data-testid="textarea-source"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Translation</span>
                <Select value={targetLang} onValueChange={setTargetLang}>
                  <SelectTrigger className="w-[180px]" data-testid="select-target-lang">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Translation will appear here..."
                value={translatedText}
                readOnly
                className="min-h-[300px] resize-none bg-muted"
                data-testid="textarea-translation"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            size="lg"
            onClick={handleTranslate}
            disabled={isTranslating}
            data-testid="button-translate"
          >
            {isTranslating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Translating...
              </>
            ) : (
              <>
                Translate
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Card className="max-w-2xl mx-auto p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This is a working prototype. The actual LibreTranslate API
              integration will be implemented in the production version, providing real-time
              translation between multiple languages.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
