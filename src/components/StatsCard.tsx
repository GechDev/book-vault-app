import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description: string
}

export function StatsCard({ title, value, icon: Icon, description }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-500 rounded-lg shadow-md">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-blue-900">{value}</span>
      </div>
      <h3 className="font-semibold text-blue-900 mb-1">{title}</h3>
      <p className="text-sm text-blue-700">{description}</p>
    </div>
  )
}
