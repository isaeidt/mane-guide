"use client"

import Image from "next/image"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface CommunityPostProps {
  id: string
  author: {
    name: string
    avatar: string
    role?: string
  }
  content: string
  image?: string
  likes: number
  comments: number
  tags?: string[]
  className?: string
}

export function CommunityPost({
  id,
  author,
  content,
  image,
  likes,
  comments,
  tags,
  className,
}: CommunityPostProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card p-4",
        className
      )}
    >
      {/* Author */}
      <div className="mb-3 flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-primary/20">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-foreground">{author.name}</p>
          {author.role && (
            <p className="text-xs text-muted-foreground">{author.role}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <p className="mb-3 text-sm text-foreground">{content}</p>

      {/* Image */}
      {image && (
        <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4 border-t border-border pt-3">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              isLiked && "fill-primary text-primary"
            )}
          />
          <span className="text-sm">{likes} Curtidas</span>
        </button>
        <button className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary">
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">{comments} Respostas</span>
        </button>
        <button className="ml-auto text-muted-foreground transition-colors hover:text-primary">
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
