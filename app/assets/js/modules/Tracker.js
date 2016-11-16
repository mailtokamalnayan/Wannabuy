import $ from 'jquery';
import jQuery from 'jquery';

class Tracker { 

	/**
	 * Tracks how many people opted in for the mailing
	 * list. Will be helpful to compare this data with mailchimp
	 * to see drop off rates during the second step validation
	 */
  trackOptIns() {
		$('#mc_embed_signup').submit(function (e) {
				const email = $(this).find('input').val()
				ga('send', 'event', 'Mailing List Opt In', 'Footer Form', email);
		});
  }


  /**
   * Tracks clicks on products and logs the store
   * and item
   */
  trackProductClicks() {
		$('.list-item a').each( function(index) {
		    $(this).click( function(e) {
		        const store = $(this).find('.store-name').text();
		        const product = $(this).find('.product-name').text()
		        ga('send', 'event', 'Clicks on Product', store, product);
		    });
		});
  }


  /**
   * Exposes an encompased api for tracking
   * all events.
   */
	track() {
		this.trackOptIns();
		this.trackProductClicks();
	}

}

const tracker = new Tracker();

export default tracker;