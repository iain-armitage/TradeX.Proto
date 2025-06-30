import { useState } from 'react';
import { ThemeProvider, useTheme } from '@/components/theme-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { QuoteList, ProjectList, QuoteDetail, DashboardView } from '@/components/demo-content';
import { Moon, Sun } from 'lucide-react';

function AppContent() {
  const [selectedQuote, setSelectedQuote] = useState(null);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white`}>
      <div className="flex">
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-xl h-screen p-6 flex flex-col justify-between">
          <div>
            <div className="text-2xl font-bold mb-6">TradeX</div>
            <nav className="flex flex-col gap-4">
              <TabsList>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="quotes">Quotes</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
            </nav>
          </div>
          <div className="pt-4 flex justify-center">
            <img src="/dex-icon.png" alt="Dex Icon" className="w-12 h-12" />
          </div>
        </aside>

        <main className="flex-1 p-6 relative">
          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Tabs defaultValue="dashboard">
            <TabsContent value="dashboard">
              <DashboardView />
            </TabsContent>
            <TabsContent value="quotes">
              {selectedQuote ? (
                <QuoteDetail quote={selectedQuote} onBack={() => setSelectedQuote(null)} />
              ) : (
                <QuoteList onSelect={setSelectedQuote} />
              )}
            </TabsContent>
            <TabsContent value="projects">
              <ProjectList />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}