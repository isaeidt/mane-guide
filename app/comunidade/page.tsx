"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { CommunityPost } from "@/components/community-post"
import { PlaceCard } from "@/components/place-card"
import { Heart, MessageCircle, Share2, PlusCircle, TrendingUp, X, ImagePlus, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const topManezinhos = [
  {
    id: "1",
    name: "Zeca Galego",
    avatar: "/bonicos/15.png",
    posts: 47,
  },
  {
    id: "2",
    name: "Dona Maria",
    avatar: "/bonicos/16.png",
    posts: 32,
  },
  {
    id: "3",
    name: "Rafa Explorer",
    avatar: "/bonicos/17.png",
    posts: 28,
  },
]

const featuredPost = {
  id: "featured",
  author: {
    name: "Beto da Costa",
    avatar: "/bonicos/pitch-(6).png",
    role: "Moradora Local",
  },
  content: "Acabei de ver o pôr do sol na Ponta das Canas e não tem erro: o melhor lugar e aréas da Lagoinha. Sêm crowd e com visual de novela. O tempo é iincrível!",
  image: "/por_sol.jpg",
  likes: 124,
  comments: 18,
}

const posts = [
  {
    id: "1",
    author: {
      name: "João Pescador",
      avatar: "/bonicos/pitch-(7).png",
      role: "Morador Local",
    },
    content: "Ô turista, hoje tá muito bom pra passear de canoa no rio da pratelinha! Maré cheia até às 15h, depois o rio vira um espelho.",
    likes: 24,
    comments: 8,
  },
  {
    id: "2",
    author: {
      name: "Carla Mares",
      avatar: "/bonicos/pitch-(8).png",
    },
    content: "Alguém sabe se o mercado público tá aberto até mais tarde hoje por causa do feriado? Valeu, galera!",
    likes: 62,
    comments: 5,
  },
  {
    id: "3",
    author: {
      name: "João Silveira",
      avatar: "/bonicos/pitch-(9).png",
    },
    content: "Sequência de camarão na Lagoa — melhor custo benefício que encontrei. O transporte é bem simples, tô sempre pelo lado de cá. Quem foi, sabe como é boa essa sacada.",
    image: "camarao.jpg",
    likes: 89,
    comments: 12,
  },
]

export default function ComunidadePage() {
  const [featuredLiked, setFeaturedLiked] = useState(false)
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const [postContent, setPostContent] = useState("")

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header com mascote  */}
            <div className="flex items-end gap-4">
              <div className="flex-1 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">O que você descobriu hoje?</h1>
                <button 
                  onClick={() => setIsPostModalOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  <PlusCircle className="h-4 w-4" />
                  Postar uma dica
                </button>
                <Image
                  src="/bonicos/pitch-(11).png"
                  alt="Mascote com programa na mão"
                  width={130}
                  height={130}
                  className="object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              
            </div>

            {/* Featured Post */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="p-4">
                <div className="mb-3 flex items-center gap-3">
                  <Avatar className="h-11 w-11 border-2 border-primary/20">
                    <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                    <AvatarFallback>{featuredPost.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{featuredPost.author.name}</p>
                    <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-foreground">{featuredPost.content}</p>
              </div>
              <div className="relative aspect-video">
                <Image src={featuredPost.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex items-center gap-4 border-t border-border p-4">
                <button
                  onClick={() => setFeaturedLiked(!featuredLiked)}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Bookmark className={`h-5 w-5 ${featuredLiked ? "fill-primary text-primary" : ""}`} />
                  <span className="text-sm">{featuredPost.likes} Curtidas</span>
                </button>
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm">{featuredPost.comments} Respostas</span>
                </button>
                <button className="ml-auto text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Other Posts */}
            {posts.map((post) => (
              <CommunityPost key={post.id} {...post} />
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Manézinhos */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Top Manézinhos</h2>
              </div>
              <div className="space-y-3">
                {topManezinhos.map((user, i) => (
                  <div key={user.id} className="flex items-center gap-3">
                    <span className="w-5 text-center text-sm font-bold text-muted-foreground">{i + 1}</span>
                    <Avatar className="h-9 w-9 border-2 border-primary/20">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.posts} posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desafio da Semana */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
                  alt="Desafio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-lg font-bold text-white">Desafio da Semana!</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Poste uma foto do seu pico favorito da Lagoinha e concorra a um passeio de barco gratúito.
                </p>
                <button className="mt-3 w-full rounded-xl border border-primary py-2 text-sm font-semibold text-primary transition-colors hover:bg-sidebar-accent">
                  Participar
                </button>
              </div>
            </div>

            {/* Sugestão de lugar */}
            <PlaceCard
              id="trilha-lagoinha"
              name="Trilha da Lagoinha"
              description="Um paraíso escondido que vale cada gota de suor. Leve água e protetor solar."
              image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
              rating={4.7}
            />
          </div>
        </div>
      </main>

      {/* Modal para criar post */}
      <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Compartilhe sua dica</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src="/bonicos/14.png" alt="Você" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <textarea
                  placeholder="O que você descobriu de legal hoje? Conta pra gente!"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full resize-none rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[120px]"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between border-t border-border pt-4">
              <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors">
                <ImagePlus className="h-5 w-5" />
                Adicionar foto
              </button>
              <button 
                onClick={() => {
                  setIsPostModalOpen(false)
                  setPostContent("")
                }}
                disabled={!postContent.trim()}
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Publicar
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
