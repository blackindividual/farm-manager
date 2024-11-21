import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function MetricItem({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-xl font-bold">-</p>
    </div>
  )
}

export function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-4">
          <MetricItem label="Present Cost Price/Bird" />
          <MetricItem label="Price/KG" />
          <MetricItem label="Est. Sell Price" />
          <MetricItem label="Actual Sale" />
        </div>
      </CardContent>
    </Card>
  )
}