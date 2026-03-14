import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partnership | Professional Labs",
    description: "Accelerate your CSP Revenue backed by Professional Labs end-to-end Azure solutions. Partner with certified Azure experts for rapid growth and improved business outcomes.",
};

export default function PartnershipPage() {
    const cards = [
        {
            title: "Accelerated Path to Azure",
            description: "From single-application migrations to full data center transformations, Professional Labs results-driven assessment, planning, design, migration, deployment.",
            icon: "🚀",
            type: "blue"
        },
        {
            title: "White Labeled Services",
            description: "Professional Labs offer White Labeled services for CSP's where we act as an extension of your team enabling you to achieve more.",
            icon: "🏷️",
            type: "white"
        },
        {
            title: "Reduce Complexity",
            description: "Professional Labs with 24x7x365 support to simplify operations and reduce lead times. Professional Labs is always up to date with Azure's continual evolution.",
            icon: "⚡",
            type: "blue"
        },
        {
            title: "Heightened Security and Reliability",
            description: "Professional Labs provides flexible security offerings as an extension of native Azure security capabilities, helping to protect against advanced threats and cyberattacks, while reducing the risk of security breaches, reputation damage and data loss.",
            icon: "🔒",
            type: "white"
        },
        {
            title: "Hybrid and Multi-Cloud-Ready",
            description: "Enterprise IT complexity requires multi-cloud and hybrid strategies to meet varying application and workload requirements. Professional Labs integrates private cloud, bare metal and hybrid components into a single solution.",
            icon: "☁️",
            type: "blue"
        },
        {
            title: "Azure or M365 Pre Sales / Lead Generation",
            description: "From Lead Generation to content creation or Email Marketing, we help with it all. We understand the B2B market and curate a highly customized strategy for your business interest.",
            icon: "📈",
            type: "white"
        }
    ];

    return (
        <main className="bg-[#f8fafc] min-h-screen pt-[180px] md:pt-[220px] lg:pt-[240px]">

            {/* Hero Section */}
            <section className="container mx-auto px-6 text-center max-w-4xl mb-20">
                <div className="inline-block bg-[#e8f4fd] text-[#0d6efd] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                    Partner Program
                </div>
                <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-bold text-[#082638] mb-8 leading-[1.1] tracking-tight">
                    PROFESSIONAL Labs CSP<br className="hidden md:block" /> Partner Program
                </h1>
                <div className="space-y-5 text-[17px] md:text-[18px] text-[#4b6674] leading-[1.75] max-w-3xl mx-auto">
                    <p>
                        Accelerate your CSP Revenue backed by Professional Labs end-to-end Azure solutions. Many CSP's invested in Microsoft technologies are seeking certified experts to assist them with the complexity of Microsoft Azure, making them more responsive, flexible, scalable and, ultimately, more competitive.
                    </p>
                    <p>
                        To ensure your success,{" "}
                        <span className="font-semibold text-[#082638]">Experts are Dedicated to Your Success</span>.
                        {" "}Professional Labs has deep expertise in Microsoft Azure, and the latest tools and technologies to help you unravel the complexities of the cloud faster and easier.
                    </p>
                </div>

                {/* Stats row */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    {[
                        { value: "35+", label: "Countries" },
                        { value: "24/7", label: "Support" },
                        { value: "500+", label: "Clients" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8edf2]">
                            <div className="text-[32px] font-bold text-[#082638]">{stat.value}</div>
                            <div className="text-sm text-[#4b6674] mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cards Grid */}
            <section className="container mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-10 rounded-3xl transition-all duration-300 h-full ${card.type === 'blue'
                                ? 'bg-[#082638] text-white shadow-xl shadow-[#082638]/15 hover:-translate-y-2'
                                : 'bg-white text-[#082638] border border-[#e8edf2] shadow-sm hover:shadow-md hover:-translate-y-2'
                                }`}
                        >
                            {/* Icon badge */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm ${card.type === 'blue' ? 'bg-white/10' : 'bg-[#f0f7ff]'
                                }`}>
                                {card.icon}
                            </div>

                            <h2 className="text-[22px] md:text-[24px] font-bold mb-4 leading-tight">
                                {card.title}
                            </h2>

                            <p className={`text-[16px] leading-[1.6] flex-grow ${card.type === 'blue' ? 'text-[#a8c4d4]' : 'text-[#5a7080]'
                                }`}>
                                {card.description}
                            </p>

                            <div className={`mt-8 pt-6 border-t ${card.type === 'blue' ? 'border-white/10' : 'border-[#e8edf2]'}`}>
                                <a
                                    href="/contact"
                                    className={`inline-flex items-center gap-2 text-[15px] font-bold tracking-wide uppercase transition-all group ${card.type === 'blue' ? 'text-white' : 'text-[#22a7e0]'
                                        }`}
                                >
                                    <span>Discover</span>
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-20 max-w-[1240px] mx-auto bg-[#082638] rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-[28px] md:text-[36px] font-bold text-white mb-4 leading-tight">
                            Ready to grow your<br className="md:hidden" /> CSP business?
                        </h3>
                        <p className="text-[#a8c4d4] text-lg max-w-2xl">
                            Talk to our team and explore how Professional Labs can accelerate your growth with dedicated Azure support.
                        </p>
                    </div>
                    <div className="flex-shrink-0 relative z-10">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-[#082638] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#e8f4fd] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Get a Free Consultation
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                    {/* Subtle decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                </div>
            </section>
        </main>
    );
}
