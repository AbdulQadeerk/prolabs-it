'use client';

import { useState } from 'react';
import { UNIFIED_PLATFORM_SERVICES } from '@/data/unifiedPlatformServices';

const SERVICES = UNIFIED_PLATFORM_SERVICES;

export default function UnifiedPlatform() {
  const [activeTab, setActiveTab] = useState(0);
  const service = SERVICES[activeTab];

  return (
    <section className="unified-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Professional Labs Platform</span>
          <h2 className="title">Unified IT Operations Platform</h2>
          <div className="tabs">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                className={`tab ${i === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="platform-grid">
          <div className="platform-showcase">
            <div className="showcase-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.ctaLink} className="cta-link">
                {service.ctaText} <span>→</span>
              </a>
            </div>
            <div className="showcase-image">
              <img
                className="platform-img"
                src={service.dashboardImage}
                alt={`${service.tabLabel} dashboard`}
              />
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-head">
              <img src={service.testimonial.logo} alt={service.testimonial.logoAlt} />
              <span className="metric">{service.testimonial.metric}</span>
            </div>
            <blockquote className="testimonial-quote">
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <div className="testimonial-attribution">
              <strong>{service.testimonial.author}</strong>
              <span>{service.testimonial.role}</span>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <a href="/products" className="btn btn-primary">
            See the product
          </a>
        </div>
      </div>

      <style jsx>{`
        .unified-section {
          padding: 100px 0 110px;
          background-color: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .badge {
          background-color: rgba(34, 167, 224, 0.16);
          color: var(--c-blue-3);
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.75rem;
          margin-bottom: 16px;
          display: inline-block;
        }

        .title {
          color: var(--primary-blue);
          font-size: 2.35rem;
          margin-bottom: 24px;
          font-family: "Geologica", "Montserrat", "Helvetica", "Arial", sans-serif;
        }

        .tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .tab {
          background: #e8eef2;
          border: none;
          padding: 10px 18px;
          border-radius: 999px;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: "Geologica", "Montserrat", "Helvetica", "Arial", sans-serif;
        }

        .tab:hover {
          background: #dce4ea;
          color: var(--primary-blue);
        }

        .tab.active {
          background: white;
          color: var(--primary-blue);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          font-weight: 600;
        }

        .platform-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 24px;
          align-items: stretch;
        }

        .platform-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          background: linear-gradient(135deg, #eef7fa 0%, #ffffff 50%);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 24px 40px rgba(15, 23, 42, 0.08);
          border: 1px solid #e5ecf2;
        }

        .showcase-content h3 {
          font-size: 1.75rem;
          color: var(--primary-blue);
          margin-bottom: 20px;
          font-family: "Geologica", "Montserrat", "Helvetica", "Arial", sans-serif;
        }

        .showcase-content p {
          color: var(--text-secondary);
          margin-bottom: 24px;
          font-size: 0.98rem;
          line-height: 1.6;
        }

        .cta-link {
          color: var(--c-blue-0);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }

        .cta-link:hover {
          color: var(--c-blue-2);
        }

        .platform-img {
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(9, 52, 79, 0.18);
          width: 100%;
          height: auto;
        }

        .testimonial-card {
          background: white;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid #e5ecf2;
          box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: flex-start;
        }

        .testimonial-head {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .testimonial-head img {
          height: 28px;
          width: auto;
          object-fit: contain;
        }

        .metric {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-blue);
        }

        .testimonial-quote {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-style: italic;
        }

        .testimonial-attribution {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: auto;
        }

        .testimonial-attribution strong {
          font-size: 0.9rem;
          color: var(--primary-blue);
        }

        .testimonial-attribution span {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .section-cta {
          text-align: center;
          margin-top: 40px;
        }

        .section-cta .btn {
          padding: 14px 32px;
          font-size: 1rem;
          border-radius: 999px;
        }

        @media (max-width: 1024px) {
          .platform-grid {
            grid-template-columns: 1fr;
          }

          .platform-showcase {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cta-link {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .tabs {
            gap: 6px;
          }

          .tab {
            padding: 8px 14px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
