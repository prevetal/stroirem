WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight


document.addEventListener('DOMContentLoaded', function() {
	// Images slider
	const imagesSliders = [],
		images = document.querySelectorAll('.images_slider .swiper')

	images.forEach((el, i) => {
		el.classList.add('images_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		imagesSliders.push(new Swiper('.images_s' + i, options))
	})


	// Certs slider
	const certsSliders = [],
		certs = document.querySelectorAll('.certs .swiper')

	certs.forEach((el, i) => {
		el.classList.add('certs_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 12,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 14,
					slidesPerView: 4
				}
			}
		}

		certsSliders.push(new Swiper('.certs_s' + i, options))
	})


	// Team slider
	const teamSliders = [],
		team = document.querySelectorAll('.team .swiper')

	team.forEach((el, i) => {
		el.classList.add('team_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 0,
			slidesPerView: 1,
		}

		teamSliders.push(new Swiper('.team_s' + i, options))
	})


	// Before/After slider
	const BASliders = document.querySelectorAll('.before_after .slider')

	if (BASliders) {
		BASliders.forEach(el => {
			el.addEventListener('input', (e) => {
				el.style.setProperty('--position', `${e.target.value}%`)
			})
		})
	}

	const beforeAfterSliders = [],
		beforeAfter = document.querySelectorAll('.before_after .swiper')

	beforeAfter.forEach((el, i) => {
		el.classList.add('before_after_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 0,
			slidesPerView: 1,
			allowTouchMove: false,
		}

		beforeAfterSliders.push(new Swiper('.before_after_s' + i, options))
	})


	// Discount slider
	const discountSliders = [],
		discount = document.querySelectorAll('.discount .swiper')

	discount.forEach((el, i) => {
		el.classList.add('discount_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 10,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				768: {
					slidesPerView: 3,
					grid: {
						rows: 2,
						fill: 'column'
					},
				}
			}
		}

		discountSliders.push(new Swiper('.discount_s' + i, options))
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	$('.rutube-video').click(function(e) {
		e.preventDefault()

		const id = $(this).data('video-id')

		Fancybox.show([{
			src: `https://rutube.ru/play/embed/${id}/`,
			type: 'iframe'
		}])
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')
	})


	$('.mob_menu .menu a.sub_link').click(function(e) {
		e.preventDefault()

		const sub = $(this).data('sub')

		$('.mob_menu .sub' + sub).addClass('show')
	})

	$('.mob_menu .sub .items a.service.sub_link').click(function(e) {
		e.preventDefault()

		const sub = $(this).data('sub')

		$('.mob_menu .sub_service' + sub).addClass('show')
	})

	$('.mob_menu .sub .back_btn').click(function(e) {
		e.preventDefault()

		$('.mob_menu .sub').removeClass('show')
	})

	$('.mob_menu .sub_service .back_btn').click(function(e) {
		e.preventDefault()

		$('.mob_menu .sub_service').removeClass('show')
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Prices
	$('.prices .section .head').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Calc
	const areaRangePostfix = ' м²'

	const areaRange = $('#area_range').ionRangeSlider({
		min: 10,
		max: 1000,
		from: 12,
		step: 1,
		postfix: areaRangePostfix,
		onChange: data => {
			$('.calc .area_range .val').val(data.from + areaRangePostfix)
		},
	}).data('ionRangeSlider')

	$('.calc .area_range .input').keyup(function () {
		areaRange.update({
			from: parseInt($('.calc .area_range .input').val().replace(/[^\d]/g, ""), 10),
		})
	})


	// Cases
	const serviceCaseImagesSliders = [],
		serviceCasesSliders = [],
		serviceCaseImages = document.querySelectorAll('.service_cases .images .swiper'),
		serviceCases = document.querySelectorAll('.service_cases .swiper.main')

	serviceCaseImages.forEach((el, i) => {
		el.classList.add('case_images_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 0,
			slidesPerView: 1,
			nested: true
		}

		serviceCaseImagesSliders.push(new Swiper('.case_images_s' + i, options))
	})

	serviceCases.forEach((el, i) => {
		el.classList.add('service_cases_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-main-button-next',
				prevEl: '.swiper-main-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1440: {
					spaceBetween: 40,
					slidesPerView: 2
				}
			}
		}

		serviceCasesSliders.push(new Swiper('.service_cases_s' + i, options))
	})


	$('.service_cases .images .swiper-button-next, .service_cases .images .swiper-button-prev').click(function(e) {
		e.preventDefault()
		e.stopPropagation()
	})


	$('a.case').click(function(e) {
		e.preventDefault()

		Fancybox.show([{
			src: $(this).attr('href'),
			type: 'ajax'
		}], {
			on: {
				done: (fancybox) => {
					// Slider
					let images = document.querySelector('.case_info .images .swiper')

					if (images) {
						new Swiper('.case_info .images .swiper', {
							loop: true,
							speed: 500,
							watchSlidesProgress: true,
							slideActiveClass: 'active',
							slideVisibleClass: 'visible',
							spaceBetween: 0,
							slidesPerView: 1,
							lazy: true,
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev'
							}
						})
					}
				},
			}
		})
	})


	// Header menu
	$('header .menu_item > a.sub_link').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('open')

		$('header .menu .service.sub_link').removeClass('active')
		$('header .menu_service_info').fadeOut(200)

		$(this).hasClass('open')
			? $(this).next('.sub_menu').fadeIn(200)
			: $(this).next('.sub_menu').fadeOut(200)

		$(this).hasClass('open')
			? $('.overlay').fadeIn(200)
			: $('.overlay').fadeOut(200)
	})


	$('header .menu .service.sub_link').click(function(e) {
		e.preventDefault()

		const info = $(this).data('info'),
			subMenu = $(this).closest('.sub_menu')

		if($(this).hasClass('active')) {
			$(this).removeClass('active')

			subMenu.find('.menu_service_info').fadeOut(200)
		} else {
			$(this).addClass('active')

			$('header .menu_service_info').hide()
			subMenu.find('.menu_service_info' + info).fadeIn(200)
		}
	})


	$('.services_grid .service.sub_link').click(function(e) {
		if (WW > 767) {
			e.preventDefault()

			const menuLinkIndex = $(this).data('menu-link-index'),
				menuLink = $('header .menu_item:nth-child('+ menuLinkIndex +') > a'),
				info = $(this).data('menu-service-info'),
				menuInfoLink = menuLink.next('.sub_menu').find('.service.sub_link[data-info="' + info + '"]')

			menuLink.click()
			menuInfoLink.click()
		}
	})


	$('.overlay').click(function(e) {
		e.preventDefault()

		$('header .menu_item > a.sub_link').removeClass('open')
		$('header .menu .service.sub_link').removeClass('active')

		$('header .menu .sub_menu, header .menu_service_info, .overlay').fadeOut(200)
	})


	// Form agree
	$('.form .agree .checkbox input').on('change', function () {
		const form = $(this).closest('.form')

		form.find('.submit_btn')
			.prop('disabled', !this.checked)
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})