import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

export default function PanelDialog({ title, children }) {
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const openerId = location.state?.openerId;

  const closePanel = () => {
    if (location.state?.fromTavern) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }

    return () => {
      if (openerId) {
        requestAnimationFrame(() => document.getElementById(openerId)?.focus());
      }
    };
  }, [openerId]);

  return (
    <dialog
      ref={dialogRef}
      className="portfolio-panel"
      aria-labelledby="panel-title"
      onCancel={(event) => {
        event.preventDefault();
        closePanel();
      }}
    >
      <header className="panel-header">
        <h1 id="panel-title">{title}</h1>
        <button
          type="button"
          onClick={closePanel}
          aria-label={`Close ${title}`}
        >
          ×
        </button>
      </header>
      <div className="panel-body">{children}</div>
    </dialog>
  );
}

PanelDialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
