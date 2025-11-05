import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Activity, DollarSign } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12.5%",
      icon: Users,
      color: "text-chart-1",
    },
    {
      title: "Active Sessions",
      value: "1,234",
      change: "+8.2%",
      icon: Activity,
      color: "text-chart-2",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+23.1%",
      icon: DollarSign,
      color: "text-chart-3",
    },
    {
      title: "Growth Rate",
      value: "18.3%",
      change: "+4.3%",
      icon: TrendingUp,
      color: "text-chart-4",
    },
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor user growth, activity metrics, and order data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} data-testid={`card-metric-${index}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {metric.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold" data-testid={`text-metric-value-${index}`}>
                    {metric.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-chart-5 font-medium">{metric.change}</span> from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-elevate" data-testid="card-user-growth">
            <CardHeader>
              <CardTitle>User Growth Trends</CardTitle>
              <CardDescription>Monthly user acquisition metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                <div className="text-center p-6">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Chart visualization placeholder
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Will be populated with real data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-activity-metrics">
            <CardHeader>
              <CardTitle>Activity Metrics</CardTitle>
              <CardDescription>User engagement and session data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                <div className="text-center p-6">
                  <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Chart visualization placeholder
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Will be populated with real data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-order-data">
            <CardHeader>
              <CardTitle>Order Data</CardTitle>
              <CardDescription>Transaction volume and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                <div className="text-center p-6">
                  <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Chart visualization placeholder
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Will be populated with real data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 p-6">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> These are placeholder visualizations. The production version
            will include interactive charts with real-time data from the backend API.
          </p>
        </Card>
      </div>
    </div>
  );
}
