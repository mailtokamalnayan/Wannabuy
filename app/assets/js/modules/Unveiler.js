import $ from 'jquery';
import jQuery from 'jquery';

import unveil from '../plugins/unveil';

class Unveiler {

	unveil() {
	  $(".list-item-article figure img").unveil(100, function() {
	    $(this).on('load', function() {
	      this.style.opacity = 1;
	    });
	  });
	}

}

const unvieler = new Unveiler();

export default unvieler;