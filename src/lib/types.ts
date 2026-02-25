export interface Brand {
    name: string;
    tagline: string;
}

export interface Hero {
    title: string;
    subtitle: string;
}

export interface KPI {
    label: string;
    value: string;
}

export interface Persona {
    id: string;
    name: string;
    role: string;
    bullets: string[];
    avatar: string;
}

export interface Artifact {
    type: string;
    text: string;
}

export interface Step {
    id: string;
    title: string;
    summary: string;
    agentActions: string[];
    humanOversight: string[];
    systems: string[];
    dataIn: string[];
    dataOut: string[];
    artifacts: Artifact[];
}

export interface Phase {
    id: string;
    title: string;
    steps: Step[];
}

export interface Capability {
    title: string;
    description: string;
}

export interface Layer {
    name: string;
    items: string[];
}

export interface Architecture {
    layers: Layer[];
}

export interface Governance {
    title: string;
    description: string;
}

export interface StoryboardData {
    brand: Brand;
    hero: Hero;
    kpis: KPI[];
    personas: Persona[];
    phases: Phase[];
    capabilities: Capability[];
    architecture: Architecture;
    governance: Governance[];
}
