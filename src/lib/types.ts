export interface Brand {
    name: string;
    tagline: string;
}

export interface Hero {
    title: string;
    subtitle: string;
}

export interface MetricData {
    steps: string;
    phases: string;
    placement: string;
    prep: string;
}

export interface Persona {
    id: string;
    name: string;
    role: string;
    bullets: string[];
    avatar: string;
}

export interface Step {
    id: string;
    title: string;
    summary: string;
    whatHappens: string[];
    soWhat: string[];
    logos: string[];
}

export interface Phase {
    id: string;
    title: string;
    summary: string;
    steps: Step[];
}

export interface StoryboardData {
    brand: Brand;
    hero: Hero;
    metrics: MetricData;
    personas: Persona[];
    phases: Phase[];
}
