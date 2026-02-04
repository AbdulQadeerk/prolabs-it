import { Monitor, Shield, Ticket, Cloud, Rocket, FileText, ArrowRight } from 'lucide-react';

export default function Features() {
    const features = [
        {
            title: "Endpoint Management",
            description: "Monitor, manage, and secure all your endpoints from a single pane of glass.",
            icon: <Monitor size={32} strokeWidth={1.5} />
        },
        {
            title: "Patch Management",
            description: "Automate patching for Windows, Mac, Linux, and third-party applications.",
            icon: <Shield size={32} strokeWidth={1.5} />
        },
        {
            title: "Service Desk",
            description: "Integrated ticketing to streamline support and improve technician efficiency.",
            icon: <Ticket size={32} strokeWidth={1.5} />
        },
        {
            title: "Backup",
            description: "Reliable cloud-first backup for all your business-critical data.",
            icon: <Cloud size={32} strokeWidth={1.5} />
        },
        {
            title: "Remote Access",
            description: "Fast, secure one-click remote access to any device, anywhere.",
            icon: <Rocket size={32} strokeWidth={1.5} />
        },
        {
            title: "Documentation",
            description: "Store and manage passwords, documents, and assets securely.",
            icon: <FileText size={32} strokeWidth={1.5} />
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Everything you need to run IT</h2>
                    <p className="section-subtitle">
                        A unified platform that combines powerful functionality with consumer-grade simplicity.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                            <a href="#" className="feature-link">
                                Learn more <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .features-section {
          background-color: var(--bg-primary); 
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          color: var(--primary-blue);
          font-size: 2.15rem;
          margin-bottom: 20px;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 40px;
        }

        .feature-card {
           /* Removed default box style to match screenshot's clean look */
           padding: 0;
           transition: var(--transition);
        }

        .feature-icon-wrapper {
          color: #2b6cb0; 
          margin-bottom: 24px;
          background: #f2f7ff;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .feature-title {
          color: var(--primary-blue);
          font-size: 1.25rem;
          margin-bottom: 16px;
        }

        .feature-desc {
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .feature-link {
          color: #2b6cb0;
          font-weight: 600;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px;
          }
        }

        @media (max-width: 720px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-link:hover {
          text-decoration: underline;
          gap: 10px;
          transition: gap 0.2s;
        }
      `}</style>
        </section>
    );
}
