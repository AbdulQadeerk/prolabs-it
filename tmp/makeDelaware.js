const fs = require('fs');
const path = require('path');

const srcDir = 'd:/prolabs-it/src/components';
const destDir = 'd:/prolabs-it/src/components/delaware';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const replacements = {
  'Hero.tsx': [
    { from: /Managed IT Services &amp; Cybersecurity Solutions/g, to: 'Managed IT Services &amp; Cybersecurity Solutions in Delaware' },
    { from: /Smarter IT starts with a unified approach\. Professional Labs helps businesses manage devices, secure endpoints, and support employees through a centralized platform for IT operations, cybersecurity, and cloud management\./g, to: 'Supporting Delaware Businesses with Secure IT Infrastructure & Cloud Management' },
  ],
  'ServicesShowcase.tsx': [
    { from: /Managed IT &amp; Cybersecurity Services Built for Growing\s*Organizations/g, to: 'Managed IT &amp; Cybersecurity Services Built for Growing Delaware Organizations' },
    { from: /We streamline infrastructure, cloud security, and threat monitoring\./g, to: 'We help Delaware businesses streamline IT infrastructure, strengthen cloud security, and improve threat monitoring.' },
    { from: /Protect your business with 24\/7 Managed Security Operations Center \(SOC\) services\. Our security experts continuously monitor your IT environment, detect cyber threats in real time, and respond quickly to prevent security incidents and business disruption\./g, to: 'Protect your business with 24/7 SOC services designed for Delaware organizations. Our experts monitor systems continuously, detect threats, and respond quickly to prevent disruptions.' },
    { from: /Simplify and secure your cloud infrastructure with our Cloud Managed Services\. We help businesses migrate, manage, and optimize cloud environments to improve performance, security, and cost efficiency\./g, to: 'Simplify and secure your cloud infrastructure with scalable solutions tailored for Delaware businesses.' },
    { from: /Protect your business communication with advanced email security solutions\. Professional Labs safeguards inboxes from phishing attacks, malware, and email-based cyber threats to prevent data breaches and unauthorized access\./g, to: 'Protect communication systems from phishing, malware, and email-based threats.' },
    { from: /Drive innovation and efficiency with advanced AI solutions\. Professional Labs helps businesses implement artificial intelligence strategies and custom AI tools to automate processes, gain insights, and accelerate digital transformation\./g, to: 'Enable innovation through AI-driven automation and analytics.' },
    { from: /Turn data into actionable insights with data-driven IT solutions\. Professional Labs helps businesses leverage analytics, data engineering, and predictive models to improve decision-making and operational performance\./g, to: 'Transform data into actionable insights for better decision-making.' },
    { from: /Protect your cloud applications with Microsoft Cloud App Security\. Gain visibility into app usage, detect shadow IT risks, and enforce data protection policies to secure users and sensitive business data\./g, to: 'Gain visibility into cloud applications and protect sensitive data.' },
    { from: /Protect your cloud infrastructure with Azure security services\. Professional Labs secures cloud workloads, applications, and hybrid environments using Microsoft-native security tools and best practices\./g, to: 'Secure workloads and cloud infrastructure with Microsoft-native tools.' },
    { from: /Enable secure remote work with Azure Virtual Desktop\. Deploy and manage Windows desktops and applications in the cloud with scalable infrastructure and built-in Microsoft security\./g, to: 'Enable secure remote work environments for Delaware teams.' },
    { from: /Ensure smooth business operations with 24\/7 IT help desk support\. Professional Labs provides fast issue resolution, proactive monitoring, and reliable technical assistance to keep your IT systems running efficiently\./g, to: 'Ensure smooth operations with 24/7 IT support for Delaware businesses.' }
  ],
  'LeadershipBand.tsx': [
    { from: /trusted by businesses across 35\+ countries since 1997/g, to: 'trusted across 35+ countries since 1997' },
    { from: /Our experts help organizations accelerate digital transformation\s*and drive measurable results through Cybersecurity, Cloud, and\s*Managed IT Services\./g, to: 'We help organizations accelerate digital transformation through cybersecurity, cloud, and managed IT services.' }
  ],
  'BenefitsSplit.tsx': [
    { from: /Global Managed IT and Cybersecurity Experts/g, to: 'Global Managed IT and Cybersecurity Experts' },
    { from: /The modern digital ecosystem depends on reliable technology\s*infrastructure\. Professional Labs simplifies complex IT environments\s*by delivering secure, scalable, and cost-efficient solutions\./g, to: 'Professional Labs simplifies complex IT environments by delivering secure, scalable, and cost-efficient solutions for Delaware organizations and global clients.' },
    { from: /Founded in 1997 and headquartered in Dubai, Professional Labs\s*specializes in Cybersecurity services, Managed IT services, Cloud\s*infrastructure management, and Microsoft ecosystem solutions\./g, to: 'Founded in 1997 and headquartered in Dubai, we specialize in cybersecurity, managed IT services, cloud infrastructure, and Microsoft ecosystem solutions.' },
    { from: /With automated management, proactive monitoring, and advanced\s*analytics, organizations can reduce downtime, improve security\s*posture, and lower operational costs\./g, to: 'Our platform enables automation, proactive monitoring, and advanced analytics to help Delaware businesses reduce downtime and improve security posture.' },
    { from: /By combining automation, monitoring, and proactive threat\s*intelligence, we help businesses protect their systems at every\s*level\./g, to: 'We combine automation, monitoring, and threat intelligence to protect systems at every level.' }
  ],
  'CaseStudy.tsx': [
    // CaseStudy and TrustBar mostly remain the same or adjust the title, wait the prompt says:
    // H2 Security-First IT Infrastructure for Resilient Organizations (This is in BenefitsSplit!)
    // H2 Real Feedback from Businesses Who Trust Our IT Solutions
  ],
  'TrustBar.tsx': [
  ],
  'StackSection.tsx': [
    { from: /We partner with leading technology providers to deliver secure,\s*scalable, and innovative IT solutions\./g, to: 'We partner with leading technology providers to deliver secure and scalable IT solutions for Delaware businesses.' }
  ],
  'Features.tsx': [
    { from: /Our proprietary tools help organizations detect vulnerabilities,\s*strengthen identity security, and streamline IT operations\./g, to: 'Our proprietary tools help organizations strengthen IT security and streamline operations.' },
    { from: /Complete Active Directory & Entra ID security and health assessment in one report\. Identifies misconfigurations, risks, and performance gaps with clear, prioritized remediation steps\./g, to: 'Active Directory & Entra ID security assessment with remediation insights.' },
    { from: /Detects and fixes risky permissions, including anonymous or unsafe SIDs and broken ACLs across AD objects\. Normalizes access control to reduce privilege exposure\./g, to: 'Detect and fix risky permissions across directory systems.' },
    { from: /Identifies GPO permission issues, broken or orphaned links, and inconsistent delegation that can weaken security\. Fixes common misconfigurations and restores least-privilege access\./g, to: 'Identify and resolve policy misconfigurations.' },
    { from: /Scans Windows servers for weak SSL\/TLS protocols, ciphers, and insecure configurations\. Generates a remediation-ready plan to strengthen TLS security settings\./g, to: 'Scan and improve TLS security across servers.' },
    { from: /Simplifies helpdesk tasks like password resets, MFA resets, unlocks, and account recovery for AD and Entra ID with secure workflows and logging\./g, to: 'Simplify IT help desk operations with secure workflows.' }
  ],
  'ResourcesSection.tsx': [
    // Exactly matches the text anyway
  ],
  'StandardsSection.tsx': [
    { from: /Professional Labs follows internationally recognized security frameworks to ensure the protection of customer data and IT systems\.\s*Our services align with global compliance standards including:/g, to: 'Professional Labs aligns with global compliance standards to protect data and IT systems.' }
  ],
  'CTASection.tsx': [
    { from: /Ready to Strengthen Your IT Infrastructure\?/g, to: 'Ready to Strengthen Your IT Infrastructure in Delaware?' },
    { from: /Join organizations across 35\+ countries that trust Professional Labs to manage their IT operations, cybersecurity, and cloud infrastructure\./g, to: 'Join businesses that trust Professional Labs for managed IT services in Delaware, cybersecurity, and cloud infrastructure solutions.' }
  ]
};

const componentsToProcess = [
  'Hero.tsx', 'ServicesShowcase.tsx', 'LeadershipBand.tsx', 
  'BenefitsSplit.tsx', 'CaseStudy.tsx', 'TrustBar.tsx', 
  'StackSection.tsx', 'Features.tsx', 'ResourcesSection.tsx', 
  'StandardsSection.tsx', 'CTASection.tsx'
];

componentsToProcess.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix imports so they resolve to the parent directory correctly
    content = content.replace(/from "\.\/([a-zA-Z0-9_-]+\.module\.css)"/g, 'from "../$1"');
    content = content.replace(/from "\.\/animations"/g, 'from "../animations"');
    content = content.replace(/import BrandCarousel from "@\/components\/BrandCarousel";/g, 'import BrandCarousel from "@/components/BrandCarousel";');

    // Apply specific text replacements
    const rules = replacements[file];
    if (rules) {
      rules.forEach(rule => {
        content = content.replace(rule.from, rule.to);
      });
    }

    // Rename the function itself to add Delaware suffix
    const componentName = file.replace('.tsx', '');
    content = content.replace(`export default function ${componentName}()`, `export default function ${componentName}Delaware()`);

    fs.writeFileSync(path.join(destDir, file), content);
  }
});

console.log('Delaware components generated Successfully.');
