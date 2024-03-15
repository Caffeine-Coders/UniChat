"use client"
import { useRouter } from 'next/navigation';
export default function Teacher() {
  const router = useRouter()
  router.push("/teacher/login")
}

