import PropTypes from "prop-types";
import { Navigate, Route, Routes, useParams } from "react-router";
import {
  getPanelBySlug,
  getProjectBySlug,
  portfolioRecord,
} from "../content/portfolio";
import PanelDialog from "../features/panels/PanelDialog";

function SubjectPanel({ slug }) {
  const panel = getPanelBySlug(slug);

  return (
    <PanelDialog title={panel.label}>
      <p>{portfolioRecord.profile.identity}</p>
    </PanelDialog>
  );
}

SubjectPanel.propTypes = {
  slug: PropTypes.string.isRequired,
};

function ProjectPanel() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PanelDialog title={project.title}>
      <p>{project.problem}</p>
    </PanelDialog>
  );
}

export default function PanelRoutes() {
  return (
    <Routes>
      <Route path="/" element={null} />
      {portfolioRecord.panels.map((panel) => (
        <Route
          key={panel.slug}
          path={panel.route}
          element={<SubjectPanel slug={panel.slug} />}
        />
      ))}
      <Route path="/projects/:projectSlug" element={<ProjectPanel />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
