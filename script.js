document.addEventListener('DOMContentLoaded', () => {
  const movies = document.querySelectorAll('.movie');
  movies.forEach(movie => {
    movie.addEventListener('click', () => {
      movies.forEach(m => { if (m !== movie) m.classList.remove('active'); });
      movie.classList.toggle('active');
      movie.animate([{ transform: 'scale(.98)' }, { transform: 'scale(1)' }], { duration: 180 });
    });
  });
});

