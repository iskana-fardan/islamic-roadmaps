export interface Collaborator {
  id: string
  name: string
  role: string
  description: string
  avatar: string
  socials?: {
    github?: string
    instagram?: string
    website?: string
  }
}

export const collaborators: Collaborator[] = [
  {
    id: "ipmkrmesir",
    name: "IPMKR Mesir",
    role: "Kolaborator Utama",
    description:
      "Inisiator dan mitra utama dalam pengembangan platform pembelajaran keislaman ini.",
    avatar: "/avatars/avatar-1.webp",
  },
  {
    id: "ahmad-widobwo",
    name: "Ahmad Wibowo",
    role: "UI/UX Designer",
    description:
      "Bertanggung jawab atas desain antarmuka yang bersih dan ramah pengguna.",
    avatar: "/avatars/avatar-2.svg",
  },
  {
    id: "budi-santoso",
    name: "Budi Santoso",
    role: "Software Engineer",
    description:
      "Mengembangkan arsitektur teknis dan fungsionalitas platform.",
    avatar: "/avatars/avatar-3.svg",
  },
  {
    id: "luthfi-hakim",
    name: "Luthfi Hakim",
    role: "Reviewer Materi",
    description:
      "Melakukan review mendalam terhadap akurasi materi roadmap hadits.",
    avatar: "/avatars/avatar-4.svg",
  },
]
