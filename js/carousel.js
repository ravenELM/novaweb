jQuery(document).ready(($) => {
  let idx = 0;
  const interval = 3000; // change to shorter or longer interval
  const $wrapper = $('.pokemon-carousel .carousel-slide');
  const $gridItems = $('.pokemon-grid .grid-item');

  // Highlight the first grid item on load
  $gridItems.eq(0).addClass('active');

  // Rotate slides and grid highlights
  setInterval(() => {
    const $slides = $wrapper.find('.slide');
    if ($slides.length > 1) {
      // Remove active class from all slides
      $slides.removeClass('active');
      // Increment index
      idx = (idx + 1) % $slides.length;
      // Activate current slide
      $slides.eq(idx).addClass('active');

      // Remove active from all grid items
      $gridItems.removeClass('active');
      // Highlight the corresponding grid item
      $gridItems.eq(idx).addClass('active');
    }
  }, interval);

  // Optional: click on grid item to jump to that slide
  $gridItems.on('click', function() {
    idx = $(this).index();
    $wrapper.find('.slide').removeClass('active').eq(idx).addClass('active');
    $gridItems.removeClass('active').eq(idx).addClass('active');
  });
});
