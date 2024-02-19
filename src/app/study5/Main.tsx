import { routeChange } from '@app/routes/Route';

function Main({ $target }: any) {
  const $page = document.createElement('div');
  $page.className = 'Main';

  $page.innerHTML = `<h1>메인페이지</h1>
    <div class='link' data-page-url='/about'>About</div>
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

export default Main;
