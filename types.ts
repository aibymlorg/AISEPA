
import type React from 'react';

export interface Track {
  level: number;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  valueProp: string;
  packages: string[];
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Benefit {
  title: string;
  description: string;
}

export enum MembershipTier {
  ASSOCIATE = "Associate Member",
  PROFESSIONAL = "Professional Member",
  FELLOW = "Fellow Member",
}
