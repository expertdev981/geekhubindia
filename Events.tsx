
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventFilters, { EventFilters as EventFiltersType } from "@/components/events/EventFilters";
import EventsHeader from "@/components/events/EventsHeader";
import EventsTabContent from "@/components/events/EventsTabContent";
import { useEventsData, eventCities } from "@/hooks/events/useEventsData";

export default function Events() {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  const [filters, setFilters] = useState<EventFiltersType>({
    search: "",
    eventType: "all",
    city: "all",
    dateRange: "all"
  });
  
  const { isLoading, filterEvents } = useEventsData();
  const filteredEvents = filterEvents(activeTab, filters);

  return (
    <Layout>
      <div className="bg-card py-16">
        <div className="main-container">
          <EventsHeader />
          <EventFilters onFilterChange={setFilters} cities={eventCities} />

          <Tabs defaultValue="upcoming" className="mt-8" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <EventsTabContent 
                events={filteredEvents}
                isLoading={isLoading}
              />
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
