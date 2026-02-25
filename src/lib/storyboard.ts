import data from '../../data/storyboard.json';
import { StoryboardData } from './types';

export function getStoryboardData(): StoryboardData {
    return data as unknown as StoryboardData;
}

/** Flatten all steps across all phases in order */
export function getAllSteps(d: StoryboardData) {
    return d.phases.flatMap(phase =>
        phase.steps.map(step => ({ ...step, phaseId: phase.id, phaseTitle: phase.title }))
    );
}
