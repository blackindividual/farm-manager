import React from 'react';
import { TooltipProps } from 'recharts';

interface ChartContainerProps {
  config: Record<string, { label: string; color: string }>;
  children: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ config, children }) => {
  // Apply any styling or context needed
  return <div className="w-full h-full">{children}</div>;
};

export const ChartTooltipContent = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-sm">
        <p className="text-sm font-medium">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name || entry.dataKey}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};