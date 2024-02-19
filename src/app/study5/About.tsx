import { routeChange } from '@app/routes/Route';

function About({ $target }: any) {
  const $page = document.createElement('div');
  $page.className = 'About';

  $page.innerHTML = `<h1>About 페이지</h1>
    <div class='link' data-page-url='/main'>Main</div>
  `;

  this.render = () => {
    $target.appendChild($page);
  };
  $page.addEventListener('click', (e) => {
    const $link = e.target.closest('.link');
    const { pageUrl } = $link.dataset;

    if (pageUrl) routeChange(pageUrl);
  });
}

export default About;
