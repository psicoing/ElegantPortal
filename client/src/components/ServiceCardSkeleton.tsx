import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ServiceCardSkeleton() {
  return (
    <Card className="overflow-hidden shadow-lg border border-border h-full flex flex-col">
      <div className="w-full h-64 overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
      <CardContent className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-8">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <div className="space-y-4 mb-8">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="space-y-3 mb-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="mt-auto">
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
}

export function HorizontalServiceCardSkeleton() {
  return (
    <Card className="overflow-hidden shadow-lg border border-border flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
      <CardContent className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-8">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <div className="space-y-4 mb-8">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="space-y-3 mb-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="mt-auto">
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
}