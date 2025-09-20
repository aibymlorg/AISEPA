
import React from 'react';
import type { Track, Service, Benefit } from './types';

// Icons
export const WorkflowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

export const CollectiveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a6.375 6.375 0 1 1 0-12.75 6.375 6.375 0 0 1 0 12.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a6.375 6.375 0 0 0 0-12.75m0 12.75v-1.125c0-.932.62-1.728 1.5-2.025a23.43 23.43 0 0 1 4.5 0c.88.297 1.5.093 1.5 2.025v1.125m-7.5 0a23.513 23.513 0 0 0 7.5 0M12 5.625v-1.125c0-.932-.62-1.728-1.5-2.025a23.43 23.43 0 0 0-4.5 0c-.88.297-1.5 1.093-1.5 2.025v1.125m7.5 0a23.513 23.513 0 0 1-7.5 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12a6.375 6.375 0 0 1-12.75 0m12.75 0h1.125c.932 0 1.728-.62 2.025-1.5a23.43 23.43 0 0 0 0-4.5c-.297-.88-1.093-1.5-2.025-1.5h-1.125m0 7.5a23.513 23.513 0 0 1 0-7.5M5.625 12h-1.125c-.932 0-1.728.62-2.025 1.5a23.43 23.43 0 0 0 0 4.5c.297.88 1.093 1.5 2.025 1.5h1.125m0-7.5a23.513 23.513 0 0 0 0 7.5" />
  </svg>
);

export const AutonomousIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 0 0-5.84-2.56m0 0a14.95 14.95 0 0 1-5.84 2.56m5.84-2.56V4.72a6 6 0 0 1 11.68 0v1.25m-11.68 0a6 6 0 0 0-5.84 7.38m5.84-7.38a14.95 14.95 0 0 0 5.84-2.56" />
  </svg>
);

export const InfrastructureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125A2.25 2.25 0 0 1 4.5 4.875h15A2.25 2.25 0 0 1 21.75 7.125v1.518a2.25 2.25 0 0 1-1.242 2.024l-2.26.848a2.25 2.25 0 0 0-1.242 2.024v3.216a2.25 2.25 0 0 1-1.242 2.024l-2.26.848a2.25 2.25 0 0 1-2.024 0l-2.26-.848a2.25 2.25 0 0 1-1.242-2.024v-3.216a2.25 2.25 0 0 0-1.242-2.024L3.492 8.643A2.25 2.25 0 0 1 2.25 6.625V5.125" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 8.25 2.25 2.25 2.25-2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5V18" />
</svg>
);


// Data
export const PROFESSIONAL_TRACKS: Track[] = [
  { level: 1, title: 'SPA AI Integrator', description: 'Builds coordinated AI user interfaces, implements basic orchestration patterns, creates simple multi-agent workflows.' },
  { level: 2, title: 'Distributed AI Architect', description: 'Designs headless/microservices AI systems, implements complex state sharing mechanisms, creates resilient, scalable AI networks.' },
  { level: 3, title: 'Intelligence Network Designer', description: 'Architects emergent, self-organizing AI ecosystems, designs evolution and adaptation mechanisms, creates truly autonomous business systems.' },
  { level: 4, title: 'Strategic AI Transformation Leader', description: 'Guides entire organizational AI evolution, designs enterprise-wide intelligence architectures, creates industry-disrupting AI capabilities.' },
];

export const SERVICE_OFFERINGS: Service[] = [
  {
    title: 'Distributed AI Workflow Services',
    valueProp: 'Transform from isolated AI tools to coordinated intelligence networks.',
    packages: ['Microservices AI Hub', 'Event-Driven Intelligence', 'Cross-Cloud Orchestration', 'Edge-Cloud Hybrid'],
    icon: WorkflowIcon,
  },
  {
    title: 'Collective Intelligence Services',
    valueProp: 'Build organizational memory that grows smarter over time.',
    packages: ['Distributed Knowledge Graph', 'Federated Learning Networks', 'Real-time Intelligence Synthesis', 'Evolutionary Knowledge Systems'],
    icon: CollectiveIcon,
  },
  {
    title: 'Autonomous Intelligence Systems',
    valueProp: 'Design business operations that self-optimize and evolve.',
    packages: ['Self-Healing Operations', 'Adaptive Market Response', 'Predictive Ecosystem Design', 'Emergent Innovation Platforms'],
    icon: AutonomousIcon,
  },
  {
    title: 'Next-Generation AI Infrastructure',
    valueProp: 'Deploy advanced, flexible AI infrastructure for the future.',
    packages: ['Serverless AI Orchestration', 'Headless Intelligence Services', 'Multi-Cloud AI Networks', 'Edge Intelligence Deployment'],
    icon: InfrastructureIcon,
  },
];

export const MEMBER_BENEFITS: Benefit[] = [
    { title: 'Exclusive Community', description: 'Connect with peers and leaders in distributed AI.' },
    { title: 'Intelligence Architecture Expertise', description: 'Access cutting-edge knowledge on designing how multiple AI systems think together.' },
    { title: 'Emergent Business Value', description: 'Learn to create AI systems that discover solutions and opportunities automatically.' },
    { title: 'Distributed Resilience', description: 'Understand how to build robust and capable AI networks.' },
    { title: 'Evolutionary Systems', description: 'Master the design of AI infrastructure that adapts and improves without human intervention.' },
    { title: 'Resources & Training', description: 'Access workshops, webinars, and certification paths aligned with the professional tracks.' },
    { title: 'Thought Leadership', description: 'Contribute to and benefit from industry standards and research.' },
    { title: 'Career Advancement', description: 'Position yourself at the forefront of AI innovation for high-demand roles.' },
];
