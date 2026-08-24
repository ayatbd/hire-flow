"use client";

import { CheckCircle, FileUp, Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProfileMutation } from "@/redux/features/auth/authApi";

export function SeekerDetailStep({ onBack }: { onBack: any }) {
  const router = useRouter();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  // Local State
  const [resumeUrl, setResumeUrl] = useState("");
  const [skills, setSkills] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // --- CLOUDINARY UPLOAD LOGIC ---
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file.");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hireflow_resumes"); // Replace with your Cloudinary preset

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/jqppzeqc/image/upload`, // Replace with your Cloudinary cloud name
        { method: "POST", body: formData },
      );
      const data = await res.json();
      if (data.secure_url) {
        setResumeUrl(data.secure_url);
        toast.success("Resume uploaded successfully!");
      }
    } catch (err) {
      toast.error("File upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  // --- FINAL SUBMIT LOGIC ---
  const handleComplete = async () => {
    if (!resumeUrl) return toast.error("Please upload your resume.");
    if (!skills) return toast.error("Please add your skills.");

    try {
      await updateProfile({
        resume: resumeUrl,
        skills: skills.split(",").map((s) => s.trim()), // Convert string to array
      }).unwrap();

      toast.success("Profile completed!");
      router.push("/");
    } catch (err) {
      toast.error("Failed to save profile info.");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Professional Info
        </h1>
        <p className="text-muted-foreground">
          Help us find the right jobs for you.
        </p>
      </div>

      <div className="space-y-6">
        {/* --- Resume Upload Section --- */}
        <div className="grid gap-2">
          <Label className="text-sm font-bold">Resume / CV</Label>

          {resumeUrl ? (
            // Success State
            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-900">
                    Resume_Attached.pdf
                  </p>
                  <p className="text-xs text-blue-600">Successfully uploaded</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setResumeUrl("")}
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-red-600" />
              </Button>
            </div>
          ) : (
            // Upload State
            <label className="border-2 border-dashed border-muted rounded-2xl p-8 text-center hover:bg-muted/30 transition-all cursor-pointer group flex flex-col items-center">
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
              {isUploading ? (
                <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-2" />
              ) : (
                <FileUp className="h-8 w-8 mb-2 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              )}
              <p className="text-sm font-bold">
                {isUploading ? "Uploading..." : "Click to upload your resume"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PDF format (Max 5MB)
              </p>
            </label>
          )}
        </div>

        {/* --- Skills Section --- */}
        <div className="grid gap-2">
          <Label htmlFor="skills" className="text-sm font-bold">
            Primary Skillset
          </Label>
          <Input
            id="skills"
            placeholder="e.g. React, Node.js, Design"
            className="h-12 rounded-xl focus-visible:ring-blue-600"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <p className="text-[10px] text-muted-foreground italic">
            Separate skills with commas
          </p>
        </div>
      </div>

      {/* --- Actions --- */}
      <div className="flex flex-col gap-3 pt-4">
        <Button
          onClick={handleComplete}
          disabled={isUploading || isUpdating || !resumeUrl}
          className="h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold shadow-lg shadow-blue-500/20"
        >
          {isUpdating ? <Loader2 className="animate-spin" /> : "Complete Setup"}
        </Button>
        <Button variant="ghost" onClick={onBack} disabled={isUpdating}>
          Go back
        </Button>
      </div>
    </div>
  );
}
