import { portfolioRecord } from "../content/portfolio";
import QuickView from "../features/navigation/QuickView";
import PanelRoutes from "./PanelRoutes";

export default function AppShell() {
  return (
    <main className="app-shell">
      <section className="tavern-foundation" aria-labelledby="host-greeting">
        <p id="host-greeting">{portfolioRecord.profile.greeting}</p>
      </section>
      <QuickView />
      <PanelRoutes />
    </main>
  );
}
