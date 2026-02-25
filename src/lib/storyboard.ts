import data from '../../data/storyboard.json';
import { StoryboardData } from './types';

export function getStoryboardData(): StoryboardData {
    return data as StoryboardData;
}
