import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FlockDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Flock Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">Breed: -</p>
          <p className="text-sm">Duration: - days</p>
          <p className="text-sm">Date Entered: -</p>
          <p className="text-sm">Date Exited: -</p>
        </div>
      </CardContent>
    </Card>
  )
}