import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CreatePageSkelton = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="text-center space-y-2">
        <Skeleton className="w-3/4 h-10 mx-auto" />
        <Skeleton className="w-1/2 h-4 mx-auto" />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="w-3/4 h-6" />
              <Skeleton className="w-full h-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <Skeleton className="w-1/4 h-8" />
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <Skeleton className="w-32 h-5 mb-1" />
                  <Skeleton className="w-24 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-16 h-8" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatePageSkelton;
