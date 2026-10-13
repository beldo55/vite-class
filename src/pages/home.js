export default /*html*/ `
  <section id="home-page" aria-labelledby="home-title">
    <div class="home-hero">
      <p class="eyebrow">Welcome</p>
      <h1 id="home-title">A calm place for good ideas.</h1>
      <p class="intro">Simple Studio helps small teams create useful websites.</p>
      <a class="button" href="#contact">Start a project</a>
    </div>

    <div class="cards">
      <article>
        <span class="card-num">01</span>
        <h2>Websites</h2>
        <p>Clear, fast sites that are easy to use and easy to update.</p>
      </article>
      <article>
        <span class="card-num">02</span>
        <h2>Content</h2>
        <p>Words and structure that explain what you do without the jargon.</p>
      </article>
      <article>
        <span class="card-num">03</span>
        <h2>Design basics</h2>
        <p>Simple layouts, readable type and a look that feels like you.</p>
      </article>
    </div>
  </section>
`;

export function enter() {
  const section = document.querySelector('#home-page');
  if (!section || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  section.querySelectorAll('.eyebrow, h1, .intro, .button, .cards article').forEach((el, i) => {
    el.animate(
      [
        { opacity: 0, transform: 'translateY(24px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 700, delay: i * 90, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' }
    );
  });
}
