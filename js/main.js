'use strict';

// ? Functions
// todo: 'Local date'
const getLocalDate = () => {
	const dateEl = new Date();

	// Mobile
	const mLocalDate = dateEl.toLocaleDateString();
	const mDate = document.getElementById('m-date');

	if (mDate.id === 'm-date') {
		mDate.innerHTML = mLocalDate;
	} else {
		return;
	}

	// Tablet and desktop
	const tLocalDate = dateEl.toDateString();
	document.getElementById('t-date').innerHTML = tLocalDate;
};
getLocalDate();

// todo: 'Local time'
const getLocalTime = () => {
	setTimeout(() => {
		const dateEl = new Date();
		const localTime = dateEl.toLocaleTimeString();
		document.getElementById('time').innerHTML = localTime;
		getLocalTime();
	}, 1000);
};
getLocalTime();

// todo: Render 'Html template'
const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

// todo: 'Navigation'
(() => {
	// Show
	document.querySelector('.close').addEventListener('click', () => {
		document.querySelector('.nav').classList.add('un-active-navbar');
	});
	// Hide
	document.querySelector('.check-burger').addEventListener('click', () => {
		document.querySelector('.nav').classList.remove('un-active-navbar');
	});
})();

// todo: Show 'All words'
(() => {
	const wordsItemTemplate = document.getElementById(
		'show-all-sort-words'
	).innerHTML;
	const wordsListEl = document.getElementById('words-list');

	const allWords = [
		{ plWords: 'Cześć / Witam', uaWords: 'Привіт' },
		{ plWords: 'Samochód', uaWords: 'Автомобіль' },
		{ plWords: 'Dzień dobry (rano)', uaWords: 'Доброго ранку' },
		{ plWords: 'Dzień dobry (po południu)', uaWords: 'Добрий день' },
		{ plWords: 'Do widzenia', uaWords: 'До побачення' },
		{ plWords: 'Do zobaczenia', uaWords: 'До зустрічі' },
		{ plWords: 'Jak masz na imię?', uaWords: 'Як тебе звати?' },
		{ plWords: 'Mam na imię Vlad.', uaWords: 'Мене звати Влад.' },
		{ plWords: 'Ile masz lat?', uaWords: 'Скільки тобі років?' },
		{ plWords: 'Mam 16 lat.', uaWords: 'Мені 16 років.' },
		{ plWords: 'Biały', uaWords: 'Білий' },
		{ plWords: 'Czarny', uaWords: 'Чорний' },
		{ plWords: 'Pomarańczowy', uaWords: 'Оранжевий' },
		{ plWords: 'Czerwony', uaWords: 'Червоний' },
		{ plWords: 'Żółty', uaWords: 'Жовтий' },
		{ plWords: 'Fioletowy', uaWords: 'Фіолетовий' },
		{ plWords: 'Niebieskie', uaWords: 'Синій' },
		{ plWords: 'Brązowy', uaWords: 'Коричневий' },
		{ plWords: 'Różowy', uaWords: 'Рожевий' },
		{ plWords: 'Jeden', uaWords: 'Один' },
		{ plWords: 'Dwa', uaWords: 'Два' },
		{ plWords: 'Trzy', uaWords: 'Три' },
		{ plWords: 'Cztery', uaWords: 'Чотири' },
		{ plWords: 'Pięć', uaWords: "П'ять" },
		{ plWords: 'Sześć', uaWords: 'Шість' },
		{ plWords: 'Siedem', uaWords: 'Сім' },
		{ plWords: 'Osiem', uaWords: 'Вісім' },
		{ plWords: 'Dziewięć', uaWords: "Дев'ять" },
		{ plWords: 'Dziewięć', uaWords: 'Десять' },
		{ plWords: 'Laptop', uaWords: 'Ноутбук' },
		{ plWords: 'Komputer', uaWords: "Комп'ютер" },
		{ plWords: 'Telefon', uaWords: 'Телефон' },
		{ plWords: 'Puchar', uaWords: 'Чашка' },
		{ plWords: 'Słuchawki', uaWords: 'Навушники' },
		{ plWords: 'Długopis', uaWords: 'Ручка' },
		{ plWords: 'Ołówek', uaWords: 'Олівець' },
		{ plWords: 'Okulary', uaWords: 'Окуляри' },
		{ plWords: 'Drzewo', uaWords: 'Дерево' },
		{ plWords: 'Okno', uaWords: 'Вікно' },
		{ plWords: 'Winda', uaWords: 'Ліфт' },
		{ plWords: 'Oczy', uaWords: 'Очі' },
		{ plWords: 'Język angielski', uaWords: 'Англійська мова' },
		{ plWords: 'Książka', uaWords: 'Книга' },
		{ plWords: 'Ryba', uaWords: 'Риба' },
		{ plWords: 'Kot', uaWords: 'Кіт' },
		{ plWords: 'Pies', uaWords: 'Пес' },
		{ plWords: 'Świnka morska', uaWords: 'Морська свинка' },
		{ plWords: 'Chomik', uaWords: "Хом'як" },
		{ plWords: 'Papuga', uaWords: 'Папуга' },
		// { plWords: '', uaWords: '' },
	];

	allWords.sort((a, b) => (a.plWords > b.plWords ? 1 : -1));

	wordsListEl.insertAdjacentHTML(
		'afterbegin',
		allWords.map(e => render(wordsItemTemplate, e)).join('')
	);
})();
