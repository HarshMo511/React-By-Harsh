import { useLoaderData } from "react-router-dom";

import EventList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return <EventList events={events} />;
}

export default EventsPage;
