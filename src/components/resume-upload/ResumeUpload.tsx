"use client";

import { Button } from "@/components/ui/button";
import { FileText, FileUp, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

export function ResumeUpload({ onUploadSuccess, defaultValue }: any) {
  const [uploading, setUploading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState(defaultValue || "");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate File Type
    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file.");
      return;
    }

    setUploading(true);

    try {
      // 1. Create Form Data for Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "hireflow_resumes"); // Your Unsigned Preset

      // 2. Upload to Cloudinary API
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (data.secure_url) {
        setResumeUrl(data.secure_url);
        onUploadSuccess(data.secure_url); // Pass URL back to parent form
        toast.success("Resume uploaded successfully!");
      }
    } catch (error) {
      toast.error("Upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {resumeUrl ? (
        <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 text-white rounded-lg">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300 truncate max-w-[200px]">
                Resume_Uploaded.pdf
              </p>
              <p className="text-[10px] uppercase font-bold text-blue-500">
                Ready to save
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setResumeUrl("")}
            className="text-muted-foreground hover:text-red-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <label className="border-2 border-dashed border-muted rounded-2xl p-8 text-center hover:bg-muted/30 transition-all cursor-pointer group flex flex-col items-center">
          <input
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={uploading}
          />
          {uploading ? (
            <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
          ) : (
            <FileUp className="h-8 w-8 mb-2 text-muted-foreground group-hover:text-blue-600 transition-colors" />
          )}
          <p className="text-sm font-bold">
            {uploading
              ? "Uploading to secure server..."
              : "Click to upload resume"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            PDF only (Max 5MB)
          </p>
        </label>
      )}
    </div>
  );
}
