import { createFileRoute } from '@tanstack/react-router'
import { Vault } from '@/pages/Vault'

export const Route = createFileRoute('/vault')({
  component: Vault,
})
