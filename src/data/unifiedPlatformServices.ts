/**
 * Unified IT Operations Platform – 7 Services
 * Provide details for each service. Add your dashboard images, testimonials, and copy.
 */

export type ServiceTestimonial = {
  logo: string;
  logoAlt: string;
  metric: string;
  quote: string;
  author: string;
  role: string;
};

export type UnifiedPlatformService = {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  dashboardImage: string;
  testimonial: ServiceTestimonial;
};

export const UNIFIED_PLATFORM_SERVICES: UnifiedPlatformService[] = [
  {
    id: 'endpoint-management',
    tabLabel: 'Endpoint Management',
    title: 'Endpoint Management, Unified',
    description:
      'Unify visibility and control across all devices to reduce complexity, improve efficiency, and strengthen security all from a single console.',
    ctaLink: '/services/endpoint-management',
    ctaText: 'More about Endpoint Management',
    dashboardImage:
      'https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:1048/h:934/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/endpoint-management-dashboard-2026.png',
    testimonial: {
      logo: 'https://www.ninjaone.com/wp-content/uploads/2025/12/vetcor-logo-blue.svg',
      logoAlt: 'Customer logo',
      metric: '15,000 endpoints managed',
      quote:
        'Before, I needed 10-15 different tools to execute what Professional Labs does in its centralized, single pane of glass. Professional Labs makes life so much easier.',
      author: 'CUSTOMER NAME',
      role: 'DIRECTOR OF IT, COMPANY',
    },
  },
  {
    id: 'mobile-device-management',
    tabLabel: 'Mobile Device Management',
    title: 'Mobile Device Management, Unified',
    description: '[Provide description]',
    ctaLink: '/services/mobile-device-management',
    ctaText: 'More about Mobile Device Management',
    dashboardImage: '/images/services/mobile-device-management-dashboard.png',
    testimonial: {
      logo: '/images/testimonials/customer-logo.svg',
      logoAlt: 'Customer logo',
      metric: '[Provide metric]',
      quote: '[Provide testimonial quote]',
      author: 'CUSTOMER NAME',
      role: 'TITLE, COMPANY',
    },
  },
  {
    id: 'patch-management',
    tabLabel: 'Patch Management',
    title: 'Patch Management, Unified',
    description: '[Provide description]',
    ctaLink: '/services/patch-management',
    ctaText: 'More about Patch Management',
    dashboardImage: '/images/services/patch-management-dashboard.png',
    testimonial: {
      logo: '/images/testimonials/customer-logo.svg',
      logoAlt: 'Customer logo',
      metric: '[Provide metric]',
      quote: '[Provide testimonial quote]',
      author: 'CUSTOMER NAME',
      role: 'TITLE, COMPANY',
    },
  },
  {
    id: 'backup',
    tabLabel: 'Backup',
    title: 'Backup, Unified',
    description: '[Provide description]',
    ctaLink: '/services/backup',
    ctaText: 'More about Backup',
    dashboardImage: '/images/services/backup-dashboard.png',
    testimonial: {
      logo: '/images/testimonials/customer-logo.svg',
      logoAlt: 'Customer logo',
      metric: '[Provide metric]',
      quote: '[Provide testimonial quote]',
      author: 'CUSTOMER NAME',
      role: 'TITLE, COMPANY',
    },
  },
  {
    id: 'remote-control',
    tabLabel: 'Remote Control',
    title: 'Remote Control, Unified',
    description: '[Provide description]',
    ctaLink: '/services/remote-control',
    ctaText: 'More about Remote Control',
    dashboardImage: '/images/services/remote-control-dashboard.png',
    testimonial: {
      logo: '/images/testimonials/customer-logo.svg',
      logoAlt: 'Customer logo',
      metric: '[Provide metric]',
      quote: '[Provide testimonial quote]',
      author: 'CUSTOMER NAME',
      role: 'TITLE, COMPANY',
    },
  },
  {
    id: 'service-desk',
    tabLabel: 'Service Desk',
    title: 'Service Desk, Unified',
    description: '[Provide description]',
    ctaLink: '/services/service-desk',
    ctaText: 'More about Service Desk',
    dashboardImage: '/images/services/service-desk-dashboard.png',
    testimonial: {
      logo: '/images/testimonials/customer-logo.svg',
      logoAlt: 'Customer logo',
      metric: '[Provide metric]',
      quote: '[Provide testimonial quote]',
      author: 'CUSTOMER NAME',
      role: 'TITLE, COMPANY',
    },
  },
  {
    id: 'integrations',
    tabLabel: 'Integrations',
    title: 'Integrations, Unified',
    description: '[Provide description]',
    ctaLink: '/services/integrations',
    ctaText: 'More about Integrations',
    dashboardImage: '/images/services/integrations-dashboard.png',
    testimonial: {
      logo: '/images/testimonials/customer-logo.svg',
      logoAlt: 'Customer logo',
      metric: '[Provide metric]',
      quote: '[Provide testimonial quote]',
      author: 'CUSTOMER NAME',
      role: 'TITLE, COMPANY',
    },
  },
];
