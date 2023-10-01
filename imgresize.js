function adjustImage() {
  const carousel = document.querySelector('.main-carousel');
  const images = carousel.querySelectorAll('img');
  
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const viewportAspectRatio = viewportWidth / viewportHeight;

  images.forEach(img => {
    const imgAspectRatio = img.naturalWidth / img.naturalHeight;
    let maxWidth, maxHeight;

    if (viewportAspectRatio > 1) {
      // Landscape viewport
      maxWidth = 'calc(75vw - 50px)';
      maxHeight = 'calc(75vh - 50px)';
    } else {
      // Portrait viewport
      if (window.matchMedia("(max-width: 799px)").matches) {
        maxWidth = 'calc(70vw - 100px)';
        maxHeight = 'calc(70vh - 100px)';
      } else {
        maxWidth = 'calc(100vw - 50px)';
        maxHeight = 'calc(75vh - 50px)';
      }
    }

    if (imgAspectRatio > 1) {
      // Wider image
      if (imgAspectRatio > viewportAspectRatio) {
        img.style.width = maxWidth;
        img.style.height = 'auto';
      } else {
        img.style.height = maxHeight;
        img.style.width = 'auto';
      }
    } else {
      // Taller image
      if (imgAspectRatio < viewportAspectRatio) {
        img.style.height = maxHeight;
        img.style.width = 'auto';
      } else {
        img.style.width = maxWidth;
        img.style.height = 'auto';
      }
    }
  });
}

const adjustPositions = () => {
const cells = document.querySelectorAll('.carousel-cell');

cells.forEach(cell => {
  const cellHeight = cell.offsetHeight;
  const img = cell.querySelector('img');
  const p = cell.querySelector('div');

  const imgHeight = img ? img.offsetHeight : 0;
  const offset = (cellHeight - imgHeight) / 2;
  
  img.style.position = 'absolute';
  img.style.top = `${offset}px`;
  
  p.style.position = 'absolute';
  p.style.top = `${offset + imgHeight}px`;
});
};

// adjustPositions(); gets called on first image onload

// Update on resize
window.addEventListener("resize", ()=>{adjustImage();adjustPositions();});