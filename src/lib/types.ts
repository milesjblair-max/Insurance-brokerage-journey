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
    tags: string[];
}

export interface Phase {
    id: string;
    title: string;
    summary: string;
    steps: Step[];
}

export interface Capability {
    title: string;
    bullets: string[];
}

export interface Layer {
    name: string;
    items: string[];
}

export interface Architecture {
    title: string;
    layers: Layer[];
}

export interface Governance {
    title: string;
    bullets: string[];
}

export interface ClientAccount {
    externalId: string;
    name: string;
    type: string;
    region: string;
    children?: string[];
}

export interface ClientModel {
    note: string;
    accounts: ClientAccount[];
}

export interface StoryboardData {
    brand: Brand;
    hero: Hero;
    kpis: KPI[];
    personas: Persona[];
    clientModel: ClientModel;
    phases: Phase[];
    sections: {
        capabilities: {
            title: string;
            items: Capability[];
        };
        architecture: Architecture;
        governance: Governance;
    };
}
