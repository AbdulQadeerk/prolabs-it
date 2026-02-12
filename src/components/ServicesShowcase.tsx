'use client';

import { useState } from 'react';

interface Service {
    id: string;
    name: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    stats?: {
        label: string;
        value: string;
    };
    testimonial?: {
        quote: string;
        author: string;
        position: string;
        company: string;
    };
}

const services: Service[] = [
    {
        id: 'endpoint',
        name: 'Endpoint Management',
        title: 'Endpoint Management, Unified',
        description: 'Unify visibility and control across all devices to reduce complexity, improve efficiency, and strengthen security all from a single console.',
        features: [
            'Automate time-consuming tasks',
            'Real-time monitoring reduces issues faster'
        ],
        image: '/services/endpoint.png',
        stats: {
            label: 'endpoints managed',
            value: '15,000'
        },
        testimonial: {
            quote: 'Before, I needed 10-15 different tools to execute what NinjaOne does in its centralized, single pane of glass. NinjaOne makes life so much easier.',
            author: 'ERNIE TURNER',
            position: 'DIRECTOR OF IT',
            company: 'VETCOR'
        }
    },
    {
        id: 'mobile',
        name: 'Mobile Device Management',
        title: 'Mobile Device Management',
        description: 'Secure and manage mobile devices across your organization with comprehensive MDM capabilities, supporting iOS, Android, and other mobile platforms.',
        features: [
            'Centralized device enrollment',
            'App and security policy management'
        ],
        image: '/services/mobile.png'
    },
    {
        id: 'patch',
        name: 'Patch Management',
        title: 'Patch Management',
        description: 'Automate patch deployment across all endpoints to ensure security and compliance while reducing manual effort and minimizing vulnerabilities.',
        features: [
            'Automated patch scheduling',
            'Comprehensive patch compliance reporting'
        ],
        image: '/services/patch.png'
    },
    {
        id: 'backup',
        name: 'Backup',
        title: 'Backup & Recovery',
        description: 'Protect critical business data with reliable backup solutions and rapid recovery capabilities to minimize downtime and data loss.',
        features: [
            'Automated cloud and local backups',
            'Quick recovery from any point in time'
        ],
        image: '/services/backup.png'
    },
    {
        id: 'remote',
        name: 'Remote Control',
        title: 'Remote Control & Support',
        description: 'Provide instant remote support to end-users with secure, fast remote desktop access and troubleshooting capabilities.',
        features: [
            'One-click remote access',
            'Multi-platform support for all devices'
        ],
        image: '/services/remote.png'
    },
    {
        id: 'service-desk',
        name: 'Service Desk',
        title: 'Service Desk & Ticketing',
        description: 'Streamline IT support operations with integrated ticketing, asset management, and workflow automation for enhanced productivity.',
        features: [
            'Automated ticket routing and assignment',
            'SLA tracking and performance metrics'
        ],
        image: '/services/service-desk.png'
    },
    {
        id: 'integrations',
        name: 'Integrations',
        title: 'Seamless Integrations',
        description: 'Connect with your existing tools and platforms through powerful integrations to create a unified IT operations ecosystem.',
        features: [
            'Pre-built integrations with popular tools',
            'Custom API for flexible integrations'
        ],
        image: '/services/integrations.png'
    }
];

export default function ServicesShowcase() {
    const [activeTab, setActiveTab] = useState('endpoint');

    const activeService = services.find(s => s.id === activeTab) || services[0];

    return (
        <section className="services-showcase">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Unified IT Operations Platform</h2>
                </div>

                {/* Tabs Navigation */}
                <div className="tabs-container">
                    <div className="tabs-nav">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                className={`tab-button ${activeTab === service.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(service.id)}
                            >
                                {service.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    <div className="content-grid">
                        {/* Left Side - Content */}
                        <div className="content-left">
                            <h3 className="service-title">{activeService.title}</h3>
                            <p className="service-description">{activeService.description}</p>

                            {/* Features List */}
                            <div className="features-list">
                                {activeService.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <div className="feature-icon">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="feature-text">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#" className="learn-more-link">
                                More about {activeService.name} →
                            </a>

                            {/* Service Image/Screenshot */}
                            <div className="service-image-wrapper">
                                <div className="service-image-placeholder">
                                    <span className="placeholder-text">Service Screenshot</span>
                                    {/* Image will be added here */}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Stats & Testimonial */}
                        <div className="content-right">
                            {activeService.stats && (
                                <div className="stats-card">
                                    <div className="company-logo">
                                        <svg width="100" height="32" viewBox="0 0 100 32">
                                            <text x="0" y="24" fill="#0D2D44" fontSize="20" fontWeight="600">vetcor</text>
                                        </svg>
                                    </div>
                                    <div className="stat-value">{activeService.stats.value}</div>
                                    <div className="stat-label">{activeService.stats.label}</div>
                                </div>
                            )}

                            {activeService.testimonial && (
                                <div className="testimonial-card">
                                    <div className="quote-icon">❝</div>
                                    <p className="testimonial-quote">{activeService.testimonial.quote}</p>
                                    <div className="testimonial-author">
                                        <div className="author-name">{activeService.testimonial.author}</div>
                                        <div className="author-position">
                                            {activeService.testimonial.position}, {activeService.testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="cta-section">
                    <button className="cta-button">See the product</button>
                </div>
            </div>

            <style jsx>{`
        .services-showcase {
          background: #ffffff;
          padding: 60px 0 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0d2d44;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* Tabs Navigation */
        .tabs-container {
          margin-bottom: 0;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        .tabs-nav {
          display: flex;
          gap: 0;
          justify-content: center;
          border-bottom: 2px solid #e5eaee;
          min-width: fit-content;
        }

        .tab-button {
          position: relative;
          background: transparent;
          border: none;
          padding: 14px 24px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #5e7282;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
        }

        .tab-button:hover {
          color: #0d2d44;
        }

        .tab-button.active {
          color: #0d2d44;
          border-bottom-color: #00d4aa;
        }

        /* Tab Content */
        .tab-content {
          background: linear-gradient(135deg, #d4eff0 0%, #dff2f3 100%);
          border-radius: 12px;
          padding: 48px 44px;
          min-height: 500px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 36px;
        }

        /* Left Content */
        .content-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .service-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: #0d2d44;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .service-description {
          font-size: 0.9375rem;
          line-height: 1.55;
          color: #2d4a5c;
          margin: 0 0 20px 0;
        }

        /* Features */
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.7);
          padding: 10px 14px;
          border-radius: 6px;
          backdrop-filter: blur(10px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          background: #00d4aa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .feature-text {
          font-size: 0.875rem;
          color: #0d2d44;
          font-weight: 500;
          line-height: 1.4;
        }

        .learn-more-link {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #00a885;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.3s ease;
        }

        .learn-more-link:hover {
          gap: 8px;
        }

        /* Service Image */
        .service-image-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 280px;
        }

        .service-image-placeholder {
          width: 100%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          padding: 48px 32px;
          text-align: center;
          border: 2px dashed #b8cdd6;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .placeholder-text {
          color: #7a92a3;
          font-size: 1rem;
          font-weight: 500;
        }

        /* Right Content */
        .content-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stats-card {
          background: white;
          border-radius: 10px;
          padding: 28px 24px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(13, 45, 68, 0.08);
        }

        .company-logo {
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }

        .stat-value {
          font-size: 2.75rem;
          font-weight: 700;
          color: #0d2d44;
          margin-bottom: 6px;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9375rem;
          color: #5e7282;
          font-weight: 500;
        }

        .testimonial-card {
          background: white;
          border-radius: 10px;
          padding: 28px 24px;
          box-shadow: 0 2px 10px rgba(13, 45, 68, 0.08);
          flex: 1;
        }

        .quote-icon {
          font-size: 2.5rem;
          color: #0d2d44;
          line-height: 1;
          margin-bottom: 10px;
          opacity: 0.15;
        }

        .testimonial-quote {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #2d4a5c;
          margin: 0 0 20px 0;
        }

        .testimonial-author {
          border-top: 1px solid #e5eaee;
          padding-top: 16px;
        }

        .author-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #0d2d44;
          letter-spacing: 0.8px;
          margin-bottom: 4px;
        }

        .author-position {
          font-size: 0.75rem;
          color: #5e7282;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          margin-top: 48px;
        }

        .cta-button {
          background: #00d4aa;
          color: #0d2d44;
          border: none;
          padding: 15px 44px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 212, 170, 0.25);
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #00bd97;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 212, 170, 0.35);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .content-right {
            flex-direction: row;
            gap: 20px;
          }

          .stats-card,
          .testimonial-card {
            flex: 1;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.8rem;
          }

          .tab-content {
            padding: 24px;
          }

          .tab-content {
            padding: 28px 20px;
          }

          .service-title {
            font-size: 1.5rem;
          }

          .service-image-wrapper {
            min-height: 220px;
          }

          .content-right {
            flex-direction: column;
          }

          .tabs-nav {
            padding: 0 10px;
          }

          .tab-button {
            padding: 12px 16px;
            font-size: 0.85rem;
          }
        }
      `}</style>
        </section>
    );
}
