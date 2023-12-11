const swiperDown = new Swiper('.gift-swiper-thumb', {
  spaceBetween: 12,
  slidesPerView: 5,
  freeMode: true,
  breakpoints: {
    500: {
      spaceBetween: 12,
      slidesPerView: 5,
    },
    1081: {
      spaceBetween: 16,
      slidesPerView: 6,
    }
  }
  },
);

const swiperUp = new Swiper('.gift-swiper-card', {
  spaceBetween: 16,
  thumbs: {
    swiper: swiperDown,
  }
});

const form = document.querySelector('.form');
const formFieldPhone = form.querySelectorAll('.form-field-phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const submitButton = form.querySelector('.form-button');
const formCard = form.querySelector('.form-card');


for (let i = 0; i < formFieldPhone.length; i++) {
  IMask(formFieldPhone[i], maskOptions);
}

const updateSubmitButton = () => {
  let isFormFilled = true;

  for (const field of form.elements) {
    if (field.classList.contains('form-field')) {
      if (!field.value.trim()) {
        isFormFilled = false;
        break;
      }
    }
  }

  submitButton.disabled = !isFormFilled;
}


form.addEventListener('input', updateSubmitButton);


 // получаем активный слайдер по дата атрибуту
const getActiveSlideData = () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  const activeData = activeSlide.querySelector('.gift-cards-image').dataset.card;
  formCard.value = activeData;
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const errors = validate(form, {
    // можно реализовать валидацию формы. Неинтеренсо. Делать не буду. 
  })

 // получаем активный слайдер 
  getActiveSlideData();

  // FormData ЗАРЕЗЕРВИРОВАННАЯ ФУНКЦИЯ. Получает данные с функции и собирает в объект
  const formatData = new FormData(form);
  const data = Object.fromEntries(formatData);
  console.log(formatData)
  //form.reset()
})

