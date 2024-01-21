
const routes = {
    '/': {
        linkLabel: 'Home',
        content: `<div id="app">
  <p><button onclick = "f()" > Call the "greeting" spring based REST service... </button></p>
  <div id="greeting1"></div>
  <p><button onclick = "f2()" > Call the "greeting" spring based REST service... </button></p>
  <div id="greeting2"></div>
  <p id="p1">p</p>

</div>`
    },
    '/about': {
        linkLabel: 'About',
        content: `I am in about page`
    },
    '/friends': {
        linkLabel: 'Friends',
        content: `I am in friends page`,
    },
};
const app = document.querySelector('#app');
const nav = document.querySelector('#nav');

// function to create new nav items
const renderNavlinks = () => {
    const navFragment = document.createDocumentFragment();
    Object.keys(routes).forEach(route => {
        const { linkLabel } = routes[route];

        const linkElement = document.createElement('a')
        linkElement.href = route;
        linkElement.textContent = linkLabel;
        linkElement.className = 'nav-link';
        navFragment.appendChild(linkElement);
    });

    nav.append(navFragment);
};
const renderContent = route => app.innerHTML = routes[route].content;

const navigate = e => {
    const route = e.target.pathname;
    // this is responsible for adding the new path name to the history stack
    history.pushState({}, "", route);
    renderContent(route);
};
// function to register click handlers
const registerNavLinks = () => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        const { href } = e.target;
        history.pushState({}, "", href);
        navigate(e); // pending implementation
    });
};

const registerBrowserBackAndForth = () => {
    window.onpopstate = function (e) {
        const route = location.pathname;
        renderContent(route);
    };
};

const renderInitialPage = () => {
    const route = location.pathname;
    renderContent(route);
};
(function bootup() {
    renderNavlinks();
    registerNavLinks();
    registerBrowserBackAndForth();
    renderInitialPage();
})();
