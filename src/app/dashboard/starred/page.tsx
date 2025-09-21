import { SiteHeaderWithBreadcrumb } from "@/components/dashboard/site-header-with-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  StarOff,
  Bookmark,
  TrendingUp,
  Database,
  FileBarChart,
} from "lucide-react";

export default function StarredPage() {
  // Mock data for starred items
  const starredItems = [
    {
      id: 1,
      title: "Monthly Revenue Dashboard",
      description: "Comprehensive dashboard showing revenue trends and KPIs",
      category: "dashboard",
      tags: ["revenue", "analytics", "monthly"],
      lastAccessed: "Yesterday",
      isStarred: true,
    },
    {
      id: 2,
      title: "Customer Segmentation Model",
      description: "ML model for customer behavior analysis and segmentation",
      category: "model",
      tags: ["ml", "customers", "segmentation"],
      lastAccessed: "3 days ago",
      isStarred: true,
    },
    {
      id: 3,
      title: "Sales Performance Query",
      description: "Complex SQL query to analyze sales team performance",
      category: "query",
      tags: ["sales", "performance", "sql"],
      lastAccessed: "1 week ago",
      isStarred: true,
    },
    {
      id: 4,
      title: "Inventory Forecast Report",
      description: "Predictive report for inventory management and planning",
      category: "report",
      tags: ["inventory", "forecast", "planning"],
      lastAccessed: "2 weeks ago",
      isStarred: true,
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "dashboard":
        return <TrendingUp className="h-4 w-4" />;
      case "model":
        return <Database className="h-4 w-4" />;
      case "query":
        return <FileBarChart className="h-4 w-4" />;
      case "report":
        return <Bookmark className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "dashboard":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
      case "model":
        return "bg-green-500/10 text-green-700 dark:text-green-300";
      case "query":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-300";
      case "report":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-300";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <>
      <SiteHeaderWithBreadcrumb
        title="Starred"
        breadcrumbItems={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Playground", href: "#" },
          { label: "Starred", isActive: true },
        ]}
      />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">
                  Starred Items
                </h1>
                <p className="text-muted-foreground">
                  Your favorite and most frequently used resources
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {starredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="transition-shadow hover:shadow-md"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(item.category)}
                          <CardTitle className="text-lg">
                            {item.title}
                          </CardTitle>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-1"
                        >
                          {item.isStarred ? (
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ) : (
                            <StarOff className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <CardDescription className="mt-2">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3">
                        <div className="text-muted-foreground flex items-center justify-between text-sm">
                          <span>Last accessed: {item.lastAccessed}</span>
                          <Badge
                            variant="secondary"
                            className={getCategoryColor(item.category)}
                          >
                            {item.category}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
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
