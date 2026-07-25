import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/ScionExperience.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var gallery = [
	{
		src: "/media/auction-01.webp",
		alt: "Scion FR-S на аукционе в США, первый ракурс",
		label: "Аукцион · кадр 01",
		year: "2019"
	},
	{
		src: "/media/auction-02.webp",
		alt: "Scion FR-S на аукционе в США, второй ракурс",
		label: "Аукцион · кадр 02",
		year: "2019"
	},
	{
		src: "/media/auction-03.webp",
		alt: "Scion FR-S на аукционе в США, третий ракурс",
		label: "Аукцион · кадр 03",
		year: "2019"
	},
	{
		src: "/media/auction-04.webp",
		alt: "Салон Scion FR-S на аукционе в США",
		label: "Аукцион · салон",
		year: "2019"
	},
	{
		src: "/media/build-01.webp",
		alt: "Установка расширений Rocket Bunny на Scion FR-S",
		label: "Сборка · Rocket Bunny",
		year: "2019"
	},
	{
		src: "/media/build-02.webp",
		alt: "Scion FR-S в процессе widebody-сборки",
		label: "Сборка · примерка",
		year: "2019"
	},
	{
		src: "/media/reference-sheet.webp",
		alt: "Утверждённый six-view референс Scion FR-S без номерных знаков",
		label: "APPROVED REFERENCE · NO PLATES",
		year: "NOW"
	},
	{
		src: "/media/current-01.webp",
		alt: "Текущий вид красного Scion FR-S спереди",
		label: "Сейчас · передний ракурс",
		year: "NOW"
	},
	{
		src: "/media/current-02.webp",
		alt: "Текущий вид красного Scion FR-S сзади",
		label: "Сейчас · задний ракурс",
		year: "NOW"
	},
	{
		src: "/media/autofest-2026.webp",
		alt: "Реальная фотография красного Scion FR-S на AutoFest 2026",
		label: "AutoFest · оригинальный кадр",
		year: "2026"
	}
];
var posterStudies = [
	{
		src: "/media/poster-widebody-edition.webp",
		alt: "Авторский постер Widebody Edition с красным Scion FR-S",
		label: "WIDEBODY EDITION",
		note: "POSTER STUDY 01"
	},
	{
		src: "/media/poster-gallery-suspended.webp",
		alt: "Авторский постер с красным Scion FR-S в музейном пространстве",
		label: "THE OBJECT",
		note: "POSTER STUDY 02"
	},
	{
		src: "/media/poster-wet-run.webp",
		alt: "Авторский динамический постер красного Scion FR-S на мокрой дороге",
		label: "WET RUN",
		note: "POSTER STUDY 03"
	},
	{
		src: "/media/poster-bottle.webp",
		alt: "Авторский концептуальный постер с миниатюрой красного Scion FR-S в стеклянной бутылке",
		label: "MEMORY CAPSULE",
		note: "POSTER STUDY 04"
	}
];
var aiCartoonFrames = [
	{
		src: "/media/ai-cartoon-01.webp",
		alt: "Кадр из созданного с помощью нейросетей мультфильма: два мальчика и кот у деревянного дома",
		label: "CHARACTERS / STORY",
		note: "AI CARTOON FRAME 01"
	},
	{
		src: "/media/ai-cartoon-02.webp",
		alt: "Кадр окружения для ИИ-мультфильма: деревня у реки на рассвете",
		label: "WORLD / ATMOSPHERE",
		note: "AI CARTOON FRAME 02"
	},
	{
		src: "/media/ai-cartoon-03.webp",
		alt: "Кадр из созданного с помощью нейросетей мультфильма: кот в теплице",
		label: "HERO / EMOTION",
		note: "AI CARTOON FRAME 03"
	}
];
var instagramUrl = "https://www.instagram.com/s_packer_s?igsh=M2FuemtoYno5OWIz&utm_source=qr";
var aiFunnelSteps = [
	"Идея",
	"AI-кадр",
	"Мультфильм",
	"Оплаченная работа",
	"Scion FR-S"
];
var specs = [
	[
		"AERO",
		"Rocket Bunny V1",
		"Расширения с открытыми креплениями"
	],
	[
		"AERO",
		"Кастомные сплиттеры",
		"Передний сплиттер с двумя распорками"
	],
	[
		"STANCE",
		"Стойки Blitz",
		"Основа очень низкой посадки"
	],
	[
		"WHEELS",
		"Work VS XX",
		"Золотые многоспицевые диски"
	],
	[
		"INTERIOR",
		"Звёздное небо",
		"Атмосферный потолок салона"
	],
	[
		"INTERIOR",
		"Алькантара",
		"Потолок и торпедо"
	],
	[
		"INTERIOR",
		"Кожаный салон",
		"Полная перетяжка сидений"
	],
	[
		"AUDIO",
		"Аудиосистема",
		"Дорогая кастомная конфигурация"
	]
];
function MediaFrame({ src, alt, label, year, priority = false, className = "" }) {
	const [missing, setMissing] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: `media-frame ${className} ${missing ? "is-missing" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "media-fallback",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: year ?? "ARCHIVE" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fallback-car",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Оригинал из личного архива" })
				]
			}),
			!missing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				loading: priority ? "eager" : "lazy",
				fetchPriority: priority ? "high" : "auto",
				decoding: "async",
				onError: () => setMissing(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: year })] })
		]
	});
}
function NeurocoreMark() {
	const [missing, setMissing] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "neurocore-mark",
		children: missing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "neurocore-fallback",
			role: "img",
			"aria-label": "NEUROCORE community",
			children: ["NEUROCORE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "community" })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/media/neurocore-community-logo.png",
			alt: "NEUROCORE community",
			onError: () => setMissing(true)
		})
	});
}
function ScionExperience() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
		let observer = null;
		if ("IntersectionObserver" in window) {
			observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .13 });
			nodes.forEach((node) => observer?.observe(node));
		} else nodes.forEach((node) => node.classList.add("is-visible"));
		const updateProgress = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const value = max > 0 ? window.scrollY / max : 0;
			document.documentElement.style.setProperty("--scroll-progress", String(value));
		};
		updateProgress();
		window.addEventListener("scroll", updateProgress, { passive: true });
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const finePointer = window.matchMedia("(pointer: fine)");
		let pointerFrame = 0;
		const updatePointer = (event) => {
			if (reducedMotion.matches || !finePointer.matches) return;
			cancelAnimationFrame(pointerFrame);
			pointerFrame = requestAnimationFrame(() => {
				document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
				document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
			});
		};
		window.addEventListener("pointermove", updatePointer, { passive: true });
		return () => {
			observer?.disconnect();
			window.removeEventListener("scroll", updateProgress);
			window.removeEventListener("pointermove", updatePointer);
			cancelAnimationFrame(pointerFrame);
		};
	}, []);
	const closeMenu = () => setMenuOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scroll-progress",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-light",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "global-grain",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "brand",
					href: "#top",
					onClick: closeMenu,
					"aria-label": "Scion FR-S — в начало",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FR—S" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ONE CAR / ONE STORY" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "menu-button",
					type: "button",
					"aria-expanded": menuOpen,
					"aria-controls": "main-nav",
					onClick: () => setMenuOpen((value) => !value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: menuOpen ? "Закрыть" : "Меню" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					id: "main-nav",
					className: menuOpen ? "is-open" : "",
					"aria-label": "Основная навигация",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#story",
							onClick: closeMenu,
							children: "История"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#ai-path",
							onClick: closeMenu,
							children: "Нейросети"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#gallery",
							onClick: closeMenu,
							children: "Архив"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#instagram",
							onClick: closeMenu,
							children: "Instagram"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			id: "top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
					src: "/media/hero-reference.webp",
					alt: "Scion FR-S в актуальной конфигурации по утверждённому референсу, без номерных знаков",
					label: "REFERENCE-BASED VISUAL",
					year: "2015",
					priority: true,
					className: "hero-media"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-vignette" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-orbit orbit-one",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-orbit orbit-two",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "test-badge",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
								" TEST VERSION ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "всё ещё впереди" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " AI CARTOONS → DREAM CAR"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SCION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "FR-S" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-lead",
							children: "В 2020-м я просто смотрел на неё со стороны. В 2025-м заработал на неё, создавая мультфильмы с помощью нейросетей для клиентов из США. Это история машины, которая вернулась вместе с новой профессией."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "primary-action",
								href: "#story",
								children: ["Смотреть историю ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "↘" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "text-action",
								href: "#ai-path",
								children: ["Как ИИ привёл к машине ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↘" })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-data",
					"aria-label": "Данные автомобиля",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "YEAR" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2015" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BODY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "COUPE" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DRIVE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "LHD" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ROUTE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "LA → MSQ" })] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-reference-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " REFERENCE-BASED VISUAL · NO PLATES"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scroll-cue",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Листайте историю"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "owner-intro section-pad",
			"data-reveal": true,
			"aria-labelledby": "owner-intro-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "owner-intro-index",
					children: "00A / OWNER NOTE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "owner-intro-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "owner-hello",
						id: "owner-intro-title",
						children: "Привет! Я Никита и это история моего Scion FR-S."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Я занимаюсь нейросетями и создаю ИИ-мультфильмы. Именно эта работа помогла мне накопить на машину, которую я когда-то считал недостижимой, а невероятное совпадение вернуло в мою жизнь именно тот Scion FR-S." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "owner-signal",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
						"CONTENT",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"CREATOR"
					] })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "manifesto section-pad",
			"data-reveal": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-index",
					children: "00 / PROLOGUE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Некоторые автомобили мы выбираем сами." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Другие проходят через города, годы и невероятные совпадения, чтобы однажды оказаться именно у нас." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "route-line",
					"aria-label": "Маршрут автомобиля",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LOS ANGELES" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MINSK" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SAINT PETERSBURG" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MINSK" })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "story section-pad",
			id: "story",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "road-centerline",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "road-crack crack-a",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "road-crack crack-b",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), " THE STORY"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Путь одной",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Scion FR-S"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "От американского аукциона до новой профессии, ИИ-мультфильмов и исполненной мечты — без выдуманных глав." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "chapter chapter-2019",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-year",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHAPTER 01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2019" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "chapter-kicker",
									children: "LOS ANGELES → MINSK"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "До нашей встречи её история уже началась." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"В 2019 году красная Scion FR-S приехала в Беларусь из Лос-Анджелеса. Автомобиль привезла компания ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Autogroup" }),
									" — как проект для себя."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "На аукционных кадрах она была другой: ещё без будущего widebody-силуэта, на белых дисках и с огромным антикрылом. Почти сразу после приезда началась новая глава — примерка и установка расширений Rocket Bunny. Обычная FR-S постепенно обретала характер машины, которую невозможно не заметить." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-aside",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Аукцион",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Переезд",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Начало сборки"
							] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "chapter chapter-2020",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-year",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHAPTER 02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2020" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "chapter-kicker",
									children: "THE FIRST SIGHT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
									"Я просто остановился",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"и долго смотрел."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Впервые я увидел эту машину в Минске в 2020 году. Она уже стояла на расширениях Rocket Bunny, была очень низкой и выделялась огромным спойлером. Я не знал владельца и ничего не знал о её прошлом." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Она запала мне в душу, но казалась недостижимой. Я понимал: накопить на такую машину получится нескоро — если вообще получится. Потом Scion исчезла из поля зрения. Со временем я остыл. Казалось, история закончилась, так и не начавшись." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "«Тогда это была чужая машина. Но уже моя мечта.»" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "chapter chapter-2025",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-year",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHAPTER 03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2025" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "chapter-kicker",
									children: "THE IMPOSSIBLE COINCIDENCE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Пять лет спустя прошлое вернулось одной фотографией." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"В 2025 году я решил изменить деятельность, вошёл в сферу искусственного интеллекта и присоединился к агентству ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Neurocore" }),
									". Я начал создавать изображения, видео и мультфильмы с помощью нейросетей. Директор заметил мою любовь к японским автомобилям и рассказал, что когда-то у него была Scion FR-S. Затем показал фотографию."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "На ней была та самая машина." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "neurocore-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeurocoreMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Новая профессия стала связующим звеном между старой мечтой, заработком на ИИ-мультфильмах и её продолжением." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "К тому моменту автомобиль находился в Санкт-Петербурге у знакомого директора. Я снова захотел именно его — уже не похожую машину, а эту конкретную Scion FR-S." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "coincidence-mark",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
								"ЛЕТ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"СПУСТЯ"
							] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "chapter chapter-return",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-year",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHAPTER 04" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "RETURN" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "chapter-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "chapter-kicker",
									children: "SAINT PETERSBURG → MINSK"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Мечта, на которую я заработал с помощью нейросетей." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Я создавал ИИ-мультфильмы для клиентов из США. Заказы превратили новый навык в реальную работу, а заработок — в возможность накопить значительную часть суммы на Scion. Затем я продал свою прежнюю машину и решился на покупку." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Директор Neurocore договорился со знакомым о выкупе. Я благодарен ему за помощь: без этого история могла снова оборваться. Так автомобиль, который я случайно увидел в 2020-м, вернулся в Минск уже как часть моей собственной жизни." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "return-stamp",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DREAM" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "ACQUIRED" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "MINSK / BY" })
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "archive section-pad",
			id: "gallery",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading compact",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " VISUAL ARCHIVE"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Тогда / сборка / сейчас" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Личный фотоархив выстроен в той же последовательности, что и история." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "archive-rail",
					"data-reveal": true,
					children: gallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						...item,
						className: `archive-card card-${index % 3 + 1}`
					}, item.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "archive-footnote",
					children: "В галерее использованы реальные аукционные, сборочные и актуальные кадры. Художественные постеры и референсные визуалы отмечены отдельно."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "poster-interlude section-pad",
			"aria-labelledby": "poster-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "poster-intro",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02B" }), " VISUAL INTERLUDES"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "poster-title",
							children: [
								"Машина как",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"главный герой."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Авторские постеры из проекта работают как атмосфера между документальными главами. Это художественные образы, а не архивные фотографии событий." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "poster-grid",
					children: posterStudies.map((poster, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `poster-card poster-card-${index + 1}`,
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: poster.src,
								alt: poster.alt,
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "poster-shade",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: poster.note }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: poster.label })] })
						]
					}, poster.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "poster-road-mark",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "ai-path section-pad",
			id: "ai-path",
			"aria-labelledby": "ai-path-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ai-path-glow",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading inverse",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), " AI TURNING POINT"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "ai-path-title",
							children: [
								"Мечта, оплаченная",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"нейросетями."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Новая сфера стала не фоном истории, а способом приблизить цель: я создавал ИИ-мультфильмы для клиентов из США и направлял заработанное на покупку Scion." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ai-funnel",
					"data-reveal": true,
					"aria-label": "Путь от идеи до покупки автомобиля",
					children: aiFunnelSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ai-funnel-step",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: String(index + 1).padStart(2, "0") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: step }),
							index < aiFunnelSteps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								"aria-hidden": "true",
								children: "→"
							})
						]
					}, step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ai-proof-copy",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "chapter-kicker",
							children: "NOT A SHORTCUT · A NEW PROFESSION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Я научился превращать идею в кадр, кадр — в мультфильм, а навык — в оплачиваемую работу." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Нейросети не купили машину одним нажатием кнопки. За результатом стояли обучение, практика, работа с заказчиками и десятки собранных сцен. Но именно эта новая профессия дала мне возможность заработать на давнюю мечту." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ai-frame-grid",
					children: aiCartoonFrames.map((frame, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `ai-frame ai-frame-${index + 1}`,
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: frame.src,
								alt: frame.alt,
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ai-frame-shade",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: frame.note }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: frame.label })] })
						]
					}, frame.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ai-path-end",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE NEXT FRAME" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Примеры визуального направления моих ИИ-мультфильмов. Больше процесса, новых работ и продолжение истории машины — в Instagram." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "instagram-inline",
						href: instagramUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Больше работ" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "@s_packer_s" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "↗" })
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "specs section-pad",
			id: "specs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading compact",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), " BUILD SHEET"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Не просто серийная",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Scion FR-S"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Конфигурация, которая формировалась годами и продолжает развиваться." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "spec-grid",
				children: specs.map(([category, name, description], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "spec-card",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							String(index + 1).padStart(2, "0"),
							" / ",
							category
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
							"aria-hidden": "true",
							children: "↗"
						})
					]
				}, name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "autofest",
			id: "autofest",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
					src: "/media/autofest-2026.webp",
					alt: "Оригинальная фотография красного Scion FR-S на фестивале AutoFest 2026 в дождливом Минске",
					label: "AUTOFEST 2026 · ORIGINAL ARCHIVE PHOTO",
					year: "2026",
					className: "autofest-media"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "autofest-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "autofest-copy",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AUTOFEST · MINSK" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
							className: "autofest-proof",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " ORIGINAL ARCHIVE PHOTO · 2026"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"AUTO",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FEST" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2026" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "Когда-то я просто увидел эту машину на улице. Теперь она стояла на фестивале как часть моей собственной истории." })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "future section-pad",
			"data-reveal": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "future-label",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }), " NEXT CHAPTER"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "future-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "История не заканчивается на выставочном свете." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Дальше — подвеска, управляемость и увеличение мощности." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Важно сохранить главное: внешний вид, характер и атмосферу машины, благодаря которым она запомнилась ещё при первой встрече." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "future-orbit",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TO BE CONTINUED" })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "instagram-cta section-pad",
			id: "instagram",
			"aria-labelledby": "instagram-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "instagram-visual instagram-car",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/poster-widebody-edition.webp",
						alt: "Авторский постер красного Scion FR-S",
						loading: "lazy",
						decoding: "async"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "instagram-copy",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " CAR STORY · AI CREATION"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "instagram-title",
							children: [
								"Машина.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Нейросети.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Следующая глава." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "Если тебе интересны эта машина и сфера ИИ — подпишись на мой Instagram." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "instagram-description",
							children: "Там продолжается история Scion FR-S, появляются новые ИИ-работы и кадры из процесса создания мультфильмов."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "instagram-button",
							href: instagramUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "instagram-icon",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Подписаться в Instagram" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "@s_packer_s" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "↗" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "instagram-visual instagram-ai",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/ai-cartoon-03.webp",
						alt: "Кадр из ИИ-мультфильма с котом в теплице",
						loading: "lazy",
						decoding: "async"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-brand",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SCION" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "FR-S" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "2015 / PERSONAL BUILD" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-meta",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Los Angeles → Minsk → Saint Petersburg → Minsk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "TEST VERSION · ДОРОГА ТОЛЬКО НАЧИНАЕТСЯ" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				children: ["Наверх ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↑" })]
			})
		] })
	] });
}
//#endregion
export { ScionExperience };
