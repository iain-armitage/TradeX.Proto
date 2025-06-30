import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DashboardView() {
  return (
    <div className="space-y-4">
      <Card><CardContent>Total Quotes This Month: $78,200</CardContent></Card>
      <Card><CardContent>Conversion Rate: 36%</CardContent></Card>
      <Card><CardContent>Active Projects: 4</CardContent></Card>
    </div>
  );
}

export function QuoteList({ onSelect }) {
  const quotes = [
    { id: 1, client: "BuildCo Pty Ltd", value: "$25,000", status: "Submitted" },
    { id: 2, client: "Edge Construction", value: "$18,500", status: "Pending" },
    { id: 3, client: "Bright Homes", value: "$34,700", status: "Approved" },
  ];

  return (
    <div className="space-y-2">
      {quotes.map((q) => (
        <Card key={q.id} className="cursor-pointer" onClick={() => onSelect(q)}>
          <CardContent>
            <p className="font-semibold">{q.client}</p>
            <p>{q.value} — {q.status}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function QuoteDetail({ quote, onBack }) {
  return (
    <div className="space-y-4">
      <Button variant="outline" onClick={onBack}>← Back to Quotes</Button>
      <Card><CardContent>Client: {quote.client}</CardContent></Card>
      <Card><CardContent>Quote Value: {quote.value}</CardContent></Card>
      <Card><CardContent>Status: {quote.status}</CardContent></Card>
      <Card><CardContent>Line Items: Plumbing rough-in, Fixtures, Testing</CardContent></Card>
    </div>
  );
}

export function ProjectList() {
  const projects = [
    { id: 1, name: "Greenvale Apartments", status: "Ongoing" },
    { id: 2, name: "Northside Industrial", status: "Delayed" },
    { id: 3, name: "Seaview Villas", status: "Completed" },
  ];

  return (
    <div className="space-y-2">
      {projects.map((p) => (
        <Card key={p.id}>
          <CardContent>
            <p className="font-semibold">{p.name}</p>
            <p>Status: {p.status}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}