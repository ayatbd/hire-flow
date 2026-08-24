"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Bell, Briefcase, Clock, MessageSquare, UserCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data
const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    type: "application",
    title: "Application Updated",
    description:
      "Your application for Senior React Dev at Vercel is now 'Interviewing'.",
    time: "2m ago",
    isRead: false,
    icon: <UserCheck className="h-4 w-4 text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    id: "2",
    type: "job",
    title: "New Job Match",
    description: "A new 'Full Stack Engineer' role matches your skills.",
    time: "1h ago",
    isRead: false,
    icon: <Briefcase className="h-4 w-4 text-green-600" />,
    color: "bg-green-100",
  },
  {
    id: "3",
    type: "message",
    title: "New Message",
    description: "Recruiter from Stripe sent you a message.",
    time: "5h ago",
    isRead: true,
    icon: <MessageSquare className="h-4 w-4 text-purple-600" />,
    color: "bg-purple-100",
  },
];

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        isRead: true,
      })),
    );
  };

  return (
    <Popover>
      {/* Trigger */}
      <PopoverTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full hover:bg-muted/50"
        >
          <Bell className="h-5 w-5 text-muted-foreground" />

          {unreadCount > 0 && (
            <span
              className="
                absolute top-1.5 right-1.5
                h-2.5 w-2.5
                rounded-full
                bg-red-500
                border-2 border-background
                animate-pulse
              "
            />
          )}
        </Button>
      </PopoverTrigger>

      {/* Content */}
      <PopoverContent
        align="end"
        className="
          w-[380px]
          p-0
          rounded-3xl
          overflow-hidden
          shadow-2xl
          border-muted/40
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-muted/20">
          <h3 className="text-lg font-bold">Notifications</h3>

          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllRead}
              className="
                text-xs
                text-blue-600
                hover:text-blue-700
                font-semibold
              "
            >
              Mark all as read
            </Button>
          )}
        </div>

        <div className="border-t" />

        {/* Notification list */}
        <ScrollArea className="h-[400px]">
          {notifications.length > 0 ? (
            <div className="flex flex-col">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={cn(
                    `
                    flex gap-4
                    p-4
                    cursor-pointer
                    transition-colors
                    hover:bg-muted/50
                    `,
                    !n.isRead && "bg-blue-50/30 dark:bg-blue-900/10",
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      `
                      h-10 w-10
                      rounded-2xl
                      flex items-center justify-center
                      shrink-0
                      shadow-sm
                      `,
                      n.color,
                    )}
                  >
                    {n.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={cn(
                          "text-sm font-bold",
                          n.isRead
                            ? "text-muted-foreground"
                            : "text-foreground",
                        )}
                      >
                        {n.title}
                      </p>

                      {!n.isRead && (
                        <div className="h-2 w-2 bg-blue-600 rounded-full shrink-0" />
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {n.description}
                    </p>

                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground pt-1">
                      <Clock className="h-3 w-3" />
                      {n.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
              <Bell className="h-12 w-12 opacity-10 mb-2" />

              <p className="text-sm">No new notifications</p>
            </div>
          )}
        </ScrollArea>

        <div className="border-t" />

        {/* Footer */}
        <div className="p-2 bg-muted/10">
          <Button
            variant="ghost"
            className="
              w-full
              text-xs
              font-bold
              text-muted-foreground
              hover:text-blue-600
            "
          >
            <Link href="/">View all notifications</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
