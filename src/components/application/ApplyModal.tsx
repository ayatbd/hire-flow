"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useApplyToJobMutation } from "@/redux/api/applicationApi";
import { CheckCircle, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ResumeUpload } from "../resume-upload/ResumeUpload";

export function ApplyModal({ job, user }: { job: any; user: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [apply, { isLoading, isSuccess }] = useApplyToJobMutation();

  const handleApply = async () => {
    try {
      await apply({
        jobId: job._id,
        recruiterId: job.recruiterId._id,
        resume: user.resume || "https://placeholder-resume.pdf",
        coverLetter,
      }).unwrap();

      toast.success("Application sent!");
      // Modal remains open to show success state
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to apply");
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center space-y-4">
        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="text-xl font-bold">Application Sent!</h3>
        <p className="text-muted-foreground">
          You can track your status in the dashboard.
        </p>
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button
          size="lg"
          className="px-10 bg-blue-600 hover:bg-blue-700 h-14 text-lg rounded-xl shadow-xl shadow-blue-500/20"
        >
          Apply Now
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-125 rounded-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Apply for {job.title}
          </DialogTitle>
          <DialogDescription>
            Review your details before submitting.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Resume Preview Box */}
          {/* <div className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl border border-dashed">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold truncate max-w-50">
                  {user.fullName}_Resume.pdf
                </p>
                <p className="text-xs text-muted-foreground">
                  Attached from profile
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 font-bold"
            >
              Change
            </Button>
          </div> */}

          <ResumeUpload />

          {/* Cover Letter Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="font-bold">Cover Letter (Optional)</Label>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs gap-1 text-purple-600 hover:text-purple-700 bg-purple-50"
              >
                <Sparkles className="h-3 w-3" /> AI Generate
              </Button>
            </div>
            <Textarea
              placeholder="Why are you a great fit for this role?"
              className="min-h-37.5 rounded-2xl resize-none"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>

          <Button
            onClick={handleApply}
            disabled={isLoading}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold"
          >
            {isLoading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Confirm & Submit"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
