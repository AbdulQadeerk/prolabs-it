export default function Loading() {
  return (
    <div className="route-loader" aria-live="polite" aria-busy="true">
      <section className="route-loader-hero">
        <div className="container">
          <div className="route-loader-line route-loader-breadcrumb" />
          <div className="route-loader-line route-loader-title" />
        </div>
      </section>

      <section className="route-loader-body">
        <div className="container route-loader-grid">
          <div className="route-loader-card" />
          <div className="route-loader-card" />
          <div className="route-loader-card" />
        </div>
      </section>
    </div>
  );
}
