import { SiteHeaderWithBreadcrumb } from "@/components/dashboard/site-header-with-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Calendar } from "lucide-react";

export default function HistoryPage() {
  // Mock data for history items
  const historyItems = [
    {
      id: 1,
      title: "Data Analysis Query",
      description: "Executed complex SQL query for user analytics",
      timestamp: "2 hours ago",
      type: "query",
      status: "completed",
    },
    {
      id: 2,
      title: "Report Generation",
      description: "Generated monthly performance report",
      timestamp: "5 hours ago",
      type: "report",
      status: "completed",
    },
    {
      id: 3,
      title: "Model Training",
      description: "Trained machine learning model for predictions",
      timestamp: "1 day ago",
      type: "model",
      status: "completed",
    },
    {
      id: 4,
      title: "Data Export",
      description: "Exported customer data to CSV format",
      timestamp: "2 days ago",
      type: "export",
      status: "failed",
    },
  ];

  return (
    <>
      <SiteHeaderWithBreadcrumb
        title="History"
        breadcrumbItems={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Playground", href: "#" },
          { label: "History", isActive: true },
        ]}
      />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">History</h1>
                <p className="text-muted-foreground">
                  View your recent activities and executed tasks
                </p>
              </div>

              <div className="grid gap-4">
                {historyItems.map((item) => (
                  <Card
                    key={item.id}
                    className="transition-shadow hover:shadow-md"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="text-muted-foreground h-4 w-4" />
                          <CardTitle className="text-lg">
                            {item.title}
                          </CardTitle>
                        </div>
                        <Badge
                          variant={
                            item.status === "completed"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-muted-foreground flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.timestamp}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Type: {item.type}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
