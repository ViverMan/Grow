// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

import mainSwiper from './modules/main-swiper.js';
mainSwiper();

import text from './modules/letters.js';
text();

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
