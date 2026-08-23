import { Link } from "react-router";
import { portfolioRecord } from "../../content/portfolio";

export default function QuickView() {
  return (
    <nav className="quick-view" aria-label="Quick View">
      <span>Quick View</span>
      <ul>
        {portfolioRecord.panels.map((panel) => {
          const id = `quick-view-${panel.slug}`;

          return (
            <li key={panel.slug}>
              <Link
                id={id}
                data-subject={panel.slug}
                to={panel.route}
                state={{ fromTavern: true, openerId: id }}
              >
                {panel.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
