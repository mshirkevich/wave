const broadcastItem = document.querySelectorAll('.broadcast-item');
const element = document.querySelector('#customSelect');
const choices = new Choices(element, {
  searchEnabled: false,
  searchChoices: false,
  placeholder: true,
  placeholderValue: null,
  itemSelectText: ''
});
element.addEventListener('change', () => {
  let choosenValue = element.querySelector('option').getAttribute('value');

  broadcastItem.forEach(item => {
    if(choosenValue === '') {
      item.style.display = 'flex';
    } else if (item.getAttribute('data-value') !== choosenValue) {
      item.style.display = 'none';
    } else {
      item.style.display = 'flex';
    }
  })
})

new Accordion('.guests__list', {
  duration: 100,
  elementClass: 'sphere-item',
  triggerClass: 'sphere-item__header',
  panelClass: 'sphere-item__body',
  activeClass: 'sphere-item--expanded'
});

const guestBtn = document.querySelectorAll('.sphere-item__name');
const guestContent = document.querySelectorAll('.guest-card');

guestBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    guestBtn.forEach(item => {
      item.classList.remove('sphere-item__name--active');
    });
    e.currentTarget.classList.add('sphere-item__name--active');

    guestContent.forEach(item => {
      item.classList.remove('guest-card--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guest-card--active');
  });
});

const validateContactForm = new window.JustValidate('.contact-form');
validateContactForm
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле для заполения',
    }
  ])
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле для заполения',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле для заполения',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный email',
    },
  ]);

const searchBtn = document.querySelector('.h-search__btn');
const searchInput = document.querySelector('.h-search__inp');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('h-search__inp--active');
});

const podcasts = document.querySelectorAll('.podcast-item:not(.podcast-item--hidden)');

if(document.querySelector('body').offsetWidth < 571) {
  let i = 0;
  podcasts.forEach(item => {
    i++;
    if(i > 4) {
      item.classList.add('podcast-item--hidden');
    }
  });
}
const podcastsBtn = document.querySelector('.podcasts__btn');
const podcastsHidden = document.querySelectorAll('.podcast-item--hidden');
podcastsBtn.addEventListener('click', () => {
  podcastsHidden.forEach(item => {
    item.classList.remove('podcast-item--hidden');
  });
  podcastsBtn.style.display = 'none';
});

const openMenuBtn = document.querySelector('.header__nav-burger');
const menu = document.querySelector('.header__menu');
const closeMenuBtn = document.querySelector('.m-menu__btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenuBtn = document.querySelector('.mobile-menu__btn');
const menuLink = document.querySelectorAll('.m-menu__link');
const mobileMenuLink = document.querySelectorAll('.mobile-menu__main-link');

openMenuBtn.addEventListener('click', () => {
  if(document.querySelector('body').offsetWidth < 571) {
    mobileMenu.classList.add('mobile-menu--active');
  } else {
    menu.classList.add('header__menu--active');
  }
});

if(document.querySelector('body').offsetWidth < 769) {
  menuLink.forEach(item => {
    item.addEventListener('click', () => {
      if (menu.classList.contains('header__menu--active')) {
        menu.classList.remove('header__menu--active');
      }
    });
  });
  mobileMenuLink.forEach(item => {
    item.addEventListener('click', () => {
      if (mobileMenu.classList.contains('mobile-menu--active')) {
        mobileMenu.classList.remove('mobile-menu--active');
      }
    });
  });
}

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
});

closeMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--active');
})

const openPlayerBtn = document.querySelector('.player__open');
const player = document.querySelector('.player__wrapper');
const closePlayerBtn = document.querySelector('.player__close');
const playerBtns = document.querySelector('.player__items');

openPlayerBtn.addEventListener('click', () => {
  player.classList.add('player__wrapper--active');
});

closePlayerBtn.addEventListener('click', () => {
  if(document.querySelector('body').offsetWidth < 571) {
    playerBtns.classList.toggle('player__items--active')
    closePlayerBtn.classList.toggle('player__close--active');
  } else {
    player.classList.remove('player__wrapper--active');
  }
});

const loginBtn = document.querySelector('.header__login');
loginBtn.addEventListener('click', () => {
  Fancybox.show(
    [{ src: "#login-dialog", type: "inline" }],
    {
      autoFocus: false,
      infinite: false,
      dragToClose: false,
      template: {
        closeButton: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="19.5" stroke="#A1A6B4" stroke-width="3"/><path d="M29.6777 12L12 29.6777M29.6777 29.6777L12 12" stroke="#A1A6B4" stroke-width="3"/></svg>'
      }
    },
  );
});

const buyBtn = document.querySelector('.market__btn');
buyBtn.addEventListener('click', () => {
  Fancybox.show(
    [{ src: "#market-dialog", type: "inline" }],
    {
      autoFocus: false,
      infinite: false,
      dragToClose: false,
      template: {
        closeButton: '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="19.5" stroke="#A1A6B4" stroke-width="3"/><path d="M29.6777 12L12 29.6777M29.6777 29.6777L12 12" stroke="#A1A6B4" stroke-width="3"/></svg>'
      }
    },
  );
});

const validateLoginForm = new window.JustValidate('.login-form');
validateLoginForm
  .addField('#login', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле для заполения',
    }
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле для заполения',
    }
  ]);

const genreRadioBtn = document.querySelectorAll('.c-radio__inp');
const playlistItem = document.querySelectorAll('.playlist-item');

genreRadioBtn.forEach(btn => {
  btn.addEventListener('change', () => {
    playlistItem.forEach(item => {
      if(btn.getAttribute('value') === '0') {
        item.style.display = 'block';
      } else if(btn.getAttribute('value') !== item.getAttribute('data-value')) {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    })
  });
});
