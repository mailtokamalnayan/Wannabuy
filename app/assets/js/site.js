

import Tracker from './modules/Tracker';
import Unveiler from './modules/Unveiler';

// GA Event Tracking
Tracker.track();

// Lazy Load Images
document.addEventListener('DOMContentLoaded', Unveiler.unveil(), false);