'use strict';

/**
 * Synchronous wait function
 * 
 * @author Jacinto Mba Cantero
 * @since 12/18/2017
 * @param millis - Time to wait in milliseconds
 */
function wait(millis) {
  let now = new Date().getTime();

  while(new Date().getTime() - now < millis) {}
}

module.exports = wait;