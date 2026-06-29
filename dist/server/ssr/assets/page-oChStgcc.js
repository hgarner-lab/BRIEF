import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var WORD_LENGTH = 5;
var MAX_ATTEMPTS = 6;
var LAUNCH_DATE = "2026-06-29";
var MODE_KEY = "brief:mode";
var STATS_KEY = "brief:stats";
var DAILY_SOLUTIONS = [
	"BRAND",
	"MEDIA",
	"CLICK",
	"REACH",
	"LEADS",
	"SALES",
	"TRUST",
	"VALUE",
	"VIRAL",
	"STORY",
	"OFFER",
	"PROOF",
	"TREND",
	"ASSET",
	"EMAIL",
	"EVENT",
	"FOCUS",
	"SCOPE",
	"PITCH",
	"BRIEF",
	"IDEAS",
	"VOICE",
	"STYLE",
	"CLAIM",
	"MODEL",
	"OWNED",
	"BUYER",
	"CROWD",
	"PRINT",
	"RADIO",
	"VIDEO",
	"AUDIO",
	"SCORE",
	"FRAME",
	"PRICE",
	"POINT",
	"SPACE",
	"AWARE",
	"LOYAL",
	"CYCLE",
	"FRESH",
	"SMART",
	"SHARE",
	"SHIFT",
	"BLEND",
	"BOOST",
	"MOTTO",
	"LOGOS",
	"MARKS",
	"SHELF",
	"STORE",
	"FIELD",
	"TRIAL",
	"GROUP",
	"INDEX",
	"RATES",
	"QUOTA",
	"AGENT",
	"PRESS",
	"SPEND",
	"REELS",
	"FEEDS",
	"POSTS",
	"LIKES",
	"CLIPS",
	"FILMS",
	"SPOTS",
	"LOGIC"
];
var BRAND_SOLUTIONS = [
	"APPLE",
	"ADOBE",
	"TESLA",
	"GUCCI",
	"PRADA",
	"PEPSI",
	"INTEL",
	"CANON",
	"XEROX",
	"VOLVO",
	"SHELL",
	"CHASE",
	"HONDA",
	"ACURA",
	"ROLEX",
	"CASIO",
	"SONOS",
	"DYSON",
	"VIMEO",
	"SLACK",
	"ASANA",
	"VENMO",
	"YAHOO",
	"NOKIA",
	"SKYPE",
	"FANTA",
	"CISCO",
	"OPERA",
	"LEXUS",
	"TIDAL",
	"HERTZ",
	"OREOS"
];
var EXTRA_ALLOWED_WORDS = [
	"ABOUT",
	"ABOVE",
	"ACIDS",
	"ACORN",
	"ACTOR",
	"ADAPT",
	"ADDED",
	"ADMAN",
	"ADMEN",
	"ADOPT",
	"ADORE",
	"ADULT",
	"AFTER",
	"AGILE",
	"AGREE",
	"AHEAD",
	"ALERT",
	"ALIKE",
	"ALIGN",
	"ALIVE",
	"ALLOW",
	"ALPHA",
	"AMONG",
	"ANGLE",
	"APPLY",
	"ARENA",
	"ARGUE",
	"ARISE",
	"ARRAY",
	"AUDIT",
	"AVOID",
	"AWARD",
	"BADGE",
	"BASIC",
	"BATCH",
	"BEACH",
	"BEATS",
	"BEGIN",
	"BEING",
	"BENCH",
	"BIRTH",
	"BLACK",
	"BLANK",
	"BLAST",
	"BLOCK",
	"BOARD",
	"BOUND",
	"BRAIN",
	"BREAK",
	"BRING",
	"BUILD",
	"BURST",
	"CAUSE",
	"CHAIN",
	"CHAIR",
	"CHART",
	"CHEAP",
	"CHECK",
	"CHIEF",
	"CIVIC",
	"CLEAR",
	"CLOSE",
	"CODED",
	"COLOR",
	"COMMS",
	"COUNT",
	"CRAFT",
	"CRISP",
	"DAILY",
	"DATED",
	"DEALS",
	"DEPTH",
	"DIGIT",
	"DREAM",
	"DRIVE",
	"EARLY",
	"EARND",
	"EARNT",
	"EMPTY",
	"ENTRY",
	"EQUAL",
	"EXACT",
	"EXTRA",
	"FACTS",
	"FAITH",
	"FAULT",
	"FINAL",
	"FIRST",
	"FLAIR",
	"FLOOR",
	"FORCE",
	"FORMS",
	"FOUND",
	"FRONT",
	"GATED",
	"GOALS",
	"GRADE",
	"GRANT",
	"GRAPH",
	"GREAT",
	"GREEN",
	"GROSS",
	"GUESS",
	"GUIDE",
	"HEART",
	"HEAVY",
	"HUMAN",
	"IDENT",
	"IMAGE",
	"INPUT",
	"ISSUE",
	"JOINT",
	"KNOWN",
	"LABEL",
	"LARGE",
	"LASER",
	"LAYER",
	"LIGHT",
	"LIMIT",
	"LINES",
	"LINKS",
	"LISTS",
	"LOCAL",
	"LOWER",
	"MAJOR",
	"MATCH",
	"MEANS",
	"MIXED",
	"MONEY",
	"MONTH",
	"MOVER",
	"NAMED",
	"NEEDS",
	"NERVE",
	"NOISE",
	"NORTH",
	"NOTES",
	"OCEAN",
	"ORDER",
	"OTHER",
	"PALET",
	"PANEL",
	"PARTS",
	"PAUSE",
	"PHASE",
	"PHOTO",
	"PIECE",
	"PLACE",
	"PLAIN",
	"PLANS",
	"PLANT",
	"PLAYS",
	"POSIT",
	"POWER",
	"PRIME",
	"PRIZE",
	"PROUD",
	"PULSE",
	"QUEST",
	"QUICK",
	"QUIET",
	"RANGE",
	"READY",
	"REALM",
	"REFER",
	"REPLY",
	"RIGHT",
	"RIVAL",
	"ROUTE",
	"ROYAL",
	"SCALE",
	"SCENE",
	"SENSE",
	"SERVE",
	"SHARP",
	"SHORT",
	"SHOWN",
	"SIGHT",
	"SIGNS",
	"SIMPLE",
	"SIXES",
	"SKILL",
	"SOLID",
	"SOLVE",
	"SOUND",
	"SOUTH",
	"SPEED",
	"STAGE",
	"STAND",
	"START",
	"STATE",
	"STICK",
	"STOCK",
	"STONE",
	"STRIP",
	"STUDY",
	"SUPER",
	"SWIPE",
	"TABLE",
	"TAKEN",
	"TASTE",
	"TEAMS",
	"TERMS",
	"TESTS",
	"THEME",
	"THINK",
	"THIRD",
	"TIMED",
	"TODAY",
	"TONES",
	"TOPIC",
	"TOTAL",
	"TOUCH",
	"TRADE",
	"UNION",
	"UNITE",
	"UPPER",
	"URBAN",
	"USERS",
	"VALID",
	"VIEWS",
	"VISIT",
	"VITAL",
	"WANTS",
	"WATCH",
	"WATER",
	"WHITE",
	"WHOLE",
	"WIDTH",
	"WORDS",
	"WORKS",
	"WORLD",
	"WRITE",
	"YIELD",
	"YOUNG"
];
var KEY_ROWS = [
	[
		"Q",
		"W",
		"E",
		"R",
		"T",
		"Y",
		"U",
		"I",
		"O",
		"P"
	],
	[
		"A",
		"S",
		"D",
		"F",
		"G",
		"H",
		"J",
		"K",
		"L"
	],
	[
		"ENTER",
		"Z",
		"X",
		"C",
		"V",
		"B",
		"N",
		"M",
		"BACKSPACE"
	]
];
var STATE_RANK = {
	absent: 1,
	present: 2,
	correct: 3
};
var EMPTY_STATS = {
	played: 0,
	wins: 0,
	currentStreak: 0,
	maxStreak: 0,
	distribution: {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0
	},
	lastPlayedDate: null
};
var ALL_ALLOWED_WORDS = new Set([
	...DAILY_SOLUTIONS,
	...BRAND_SOLUTIONS,
	...EXTRA_ALLOWED_WORDS
].filter((word) => word.length === WORD_LENGTH));
function cloneStats(stats = EMPTY_STATS) {
	return {
		played: stats.played ?? 0,
		wins: stats.wins ?? 0,
		currentStreak: stats.currentStreak ?? 0,
		maxStreak: stats.maxStreak ?? 0,
		distribution: {
			1: stats.distribution?.[1] ?? 0,
			2: stats.distribution?.[2] ?? 0,
			3: stats.distribution?.[3] ?? 0,
			4: stats.distribution?.[4] ?? 0,
			5: stats.distribution?.[5] ?? 0,
			6: stats.distribution?.[6] ?? 0
		},
		lastPlayedDate: stats.lastPlayedDate ?? null
	};
}
function getDateKey(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parseDateKey(dateKey) {
	const [year, month, day] = dateKey.split("-").map(Number);
	return new Date(year, month - 1, day);
}
function daysBetween(startKey, endKey) {
	const start = parseDateKey(startKey);
	const end = parseDateKey(endKey);
	start.setHours(0, 0, 0, 0);
	end.setHours(0, 0, 0, 0);
	return Math.max(0, Math.floor((end.getTime() - start.getTime()) / 864e5));
}
function getGameDay(date = /* @__PURE__ */ new Date()) {
	const dateKey = getDateKey(date);
	return {
		dateKey,
		briefNumber: daysBetween(LAUNCH_DATE, dateKey) + 1,
		label: new Intl.DateTimeFormat("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		}).format(date)
	};
}
function getAnswer(mode, briefNumber) {
	const list = mode === "daily" ? DAILY_SOLUTIONS : BRAND_SOLUTIONS;
	return list[(briefNumber - 1) % list.length];
}
function progressKey(mode, dateKey) {
	return `brief:progress:${mode}:${dateKey}`;
}
function scoreGuess(guess, answer) {
	const result = Array(WORD_LENGTH).fill("absent");
	const remaining = /* @__PURE__ */ new Map();
	for (let index = 0; index < WORD_LENGTH; index += 1) if (guess[index] === answer[index]) result[index] = "correct";
	else remaining.set(answer[index], (remaining.get(answer[index]) ?? 0) + 1);
	for (let index = 0; index < WORD_LENGTH; index += 1) {
		if (result[index] === "correct") continue;
		const letter = guess[index];
		const count = remaining.get(letter) ?? 0;
		if (count > 0) {
			result[index] = "present";
			remaining.set(letter, count - 1);
		}
	}
	return result;
}
function normalizeGuess(value) {
	return value.replace(/[^a-z]/gi, "").toUpperCase().slice(0, WORD_LENGTH);
}
function formatCountdown() {
	const now = /* @__PURE__ */ new Date();
	const tomorrow = new Date(now);
	tomorrow.setHours(24, 0, 0, 0);
	const totalSeconds = Math.max(0, Math.floor((tomorrow.getTime() - now.getTime()) / 1e3));
	return [
		Math.floor(totalSeconds / 3600),
		Math.floor(totalSeconds % 3600 / 60),
		totalSeconds % 60
	].map((value) => String(value).padStart(2, "0")).join(":");
}
function buildShareText(mode, briefNumber, status, guesses, answer) {
	const score = status === "won" ? `${guesses.length}/6` : "X/6";
	const title = mode === "daily" ? "BRIEF" : "BRIEF BRAND";
	const rows = guesses.map((guess) => scoreGuess(guess, answer).map((state) => {
		if (state === "correct") return "🟩";
		if (state === "present") return "🟨";
		return "⬛";
	}).join(""));
	return [
		`${title} #${String(briefNumber).padStart(3, "0")} ${score}`,
		"",
		...rows,
		"",
		"Truth, well guessed."
	].join("\n");
}
function loadStats() {
	const fallback = {
		daily: cloneStats(),
		brand: cloneStats()
	};
	try {
		const raw = window.localStorage.getItem(STATS_KEY);
		if (!raw) return fallback;
		const parsed = JSON.parse(raw);
		return {
			daily: cloneStats(parsed.daily),
			brand: cloneStats(parsed.brand)
		};
	} catch {
		return fallback;
	}
}
function isYesterday(previousDateKey, currentDateKey) {
	if (!previousDateKey) return false;
	return daysBetween(previousDateKey, currentDateKey) === 1;
}
function Home() {
	const [gameDay, setGameDay] = (0, import_react.useState)(() => getGameDay());
	const [mode, setMode] = (0, import_react.useState)("daily");
	const [guesses, setGuesses] = (0, import_react.useState)([]);
	const [currentGuess, setCurrentGuess] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("playing");
	const [statsRecorded, setStatsRecorded] = (0, import_react.useState)(false);
	const [stats, setStats] = (0, import_react.useState)({
		daily: cloneStats(),
		brand: cloneStats()
	});
	const [message, setMessage] = (0, import_react.useState)("Make the first guess count.");
	const [shareMessage, setShareMessage] = (0, import_react.useState)("");
	const [countdown, setCountdown] = (0, import_react.useState)("00:00:00");
	const [showStats, setShowStats] = (0, import_react.useState)(false);
	const [showAbout, setShowAbout] = (0, import_react.useState)(false);
	const [shakeRow, setShakeRow] = (0, import_react.useState)(null);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const answer = (0, import_react.useMemo)(() => getAnswer(mode, gameDay.briefNumber), [gameDay.briefNumber, mode]);
	const activeStats = stats[mode];
	const winPercent = activeStats.played === 0 ? 0 : Math.round(activeStats.wins / activeStats.played * 100);
	const maxDistribution = Math.max(1, ...Object.values(activeStats.distribution));
	const rows = (0, import_react.useMemo)(() => {
		return Array.from({ length: MAX_ATTEMPTS }, (_, rowIndex) => {
			if (rowIndex < guesses.length) {
				const guess = guesses[rowIndex];
				return {
					letters: guess.split(""),
					states: scoreGuess(guess, answer),
					submitted: true
				};
			}
			if (rowIndex === guesses.length && status === "playing") {
				const letters = currentGuess.padEnd(WORD_LENGTH).split("");
				return {
					letters,
					states: letters.map((letter) => letter.trim() ? "filled" : "empty"),
					submitted: false
				};
			}
			return {
				letters: Array(WORD_LENGTH).fill(""),
				states: Array(WORD_LENGTH).fill("empty"),
				submitted: false
			};
		});
	}, [
		answer,
		currentGuess,
		guesses,
		status
	]);
	const keyboardStates = (0, import_react.useMemo)(() => {
		const knownStates = {};
		guesses.forEach((guess) => {
			scoreGuess(guess, answer).forEach((state, index) => {
				const letter = guess[index];
				const known = knownStates[letter];
				if (!known || STATE_RANK[state] > STATE_RANK[known]) knownStates[letter] = state;
			});
		});
		return knownStates;
	}, [answer, guesses]);
	const setTemporaryMessage = (0, import_react.useCallback)((nextMessage) => {
		setMessage(nextMessage);
		window.setTimeout(() => {
			setMessage((current) => current === nextMessage ? "Keep going." : current);
		}, 1700);
	}, []);
	const rejectGuess = (0, import_react.useCallback)((nextMessage) => {
		setTemporaryMessage(nextMessage);
		setShakeRow(guesses.length);
		window.setTimeout(() => setShakeRow(null), 520);
	}, [guesses.length, setTemporaryMessage]);
	const submitGuess = (0, import_react.useCallback)(() => {
		if (status !== "playing") return;
		if (currentGuess.length !== WORD_LENGTH) {
			rejectGuess("Five letters, please.");
			return;
		}
		if (!ALL_ALLOWED_WORDS.has(currentGuess)) {
			rejectGuess("Not in the brief.");
			return;
		}
		const nextGuesses = [...guesses, currentGuess];
		setGuesses(nextGuesses);
		setCurrentGuess("");
		if (currentGuess === answer) {
			setStatus("won");
			setMessage("Truth, well guessed.");
			return;
		}
		if (nextGuesses.length === MAX_ATTEMPTS) {
			setStatus("lost");
			setMessage(`The answer was ${answer}.`);
			return;
		}
		setMessage("Read the room. Try again.");
	}, [
		answer,
		currentGuess,
		guesses,
		rejectGuess,
		status
	]);
	const handleKey = (0, import_react.useCallback)((key) => {
		if (key === "Enter") {
			submitGuess();
			return;
		}
		if (key === "Backspace") {
			if (status === "playing") setCurrentGuess((guess) => guess.slice(0, -1));
			return;
		}
		if (/^[a-z]$/i.test(key) && status === "playing") setCurrentGuess((guess) => normalizeGuess(`${guess}${key}`));
	}, [status, submitGuess]);
	const resetBoard = (0, import_react.useCallback)(() => {
		setGuesses([]);
		setCurrentGuess("");
		setStatus("playing");
		setStatsRecorded(false);
		setMessage("Fresh brief. Same answer.");
		setShareMessage("");
		window.localStorage.removeItem(progressKey(mode, gameDay.dateKey));
	}, [gameDay.dateKey, mode]);
	const switchMode = (0, import_react.useCallback)((nextMode) => {
		setMode(nextMode);
		setMessage(nextMode === "daily" ? "Daily Brief is live." : "Brand Mode is live.");
		setShareMessage("");
	}, []);
	const shareResult = (0, import_react.useCallback)(async () => {
		if (status === "playing") return;
		const shareText = buildShareText(mode, gameDay.briefNumber, status, guesses, answer);
		try {
			await navigator.clipboard.writeText(shareText);
			setShareMessage("Copied share result.");
		} catch {
			setShareMessage(shareText);
		}
	}, [
		answer,
		gameDay.briefNumber,
		guesses,
		mode,
		status
	]);
	(0, import_react.useEffect)(() => {
		setGameDay(getGameDay());
		setCountdown(formatCountdown());
		setStats(loadStats());
		const storedMode = window.localStorage.getItem(MODE_KEY);
		if (storedMode === "daily" || storedMode === "brand") setMode(storedMode);
		setMounted(true);
		const timer = window.setInterval(() => {
			setGameDay(getGameDay());
			setCountdown(formatCountdown());
		}, 1e3);
		return () => window.clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		window.localStorage.setItem(MODE_KEY, mode);
		try {
			const raw = window.localStorage.getItem(progressKey(mode, gameDay.dateKey));
			if (!raw) {
				setGuesses([]);
				setCurrentGuess("");
				setStatus("playing");
				setStatsRecorded(false);
				return;
			}
			const progress = JSON.parse(raw);
			if (progress.answer !== answer) return;
			setGuesses(progress.guesses ?? []);
			setCurrentGuess(progress.currentGuess ?? "");
			setStatus(progress.status ?? "playing");
			setStatsRecorded(Boolean(progress.statsRecorded));
			setMessage(progress.status === "won" ? "Truth, well guessed." : progress.status === "lost" ? `The answer was ${answer}.` : "Brief resumed.");
		} catch {
			setGuesses([]);
			setCurrentGuess("");
			setStatus("playing");
			setStatsRecorded(false);
		}
	}, [
		answer,
		gameDay.dateKey,
		mode,
		mounted
	]);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		const progress = {
			answer,
			guesses,
			currentGuess,
			status,
			statsRecorded
		};
		window.localStorage.setItem(progressKey(mode, gameDay.dateKey), JSON.stringify(progress));
	}, [
		answer,
		currentGuess,
		gameDay.dateKey,
		guesses,
		mode,
		mounted,
		statsRecorded,
		status
	]);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
	}, [mounted, stats]);
	(0, import_react.useEffect)(() => {
		if (!mounted || status === "playing" || statsRecorded) return;
		setStats((currentStats) => {
			const current = cloneStats(currentStats[mode]);
			const won = status === "won";
			const guessCount = guesses.length;
			const nextCurrentStreak = won ? isYesterday(current.lastPlayedDate, gameDay.dateKey) ? current.currentStreak + 1 : 1 : 0;
			return {
				...currentStats,
				[mode]: {
					played: current.played + 1,
					wins: current.wins + (won ? 1 : 0),
					currentStreak: nextCurrentStreak,
					maxStreak: Math.max(current.maxStreak, nextCurrentStreak),
					distribution: {
						...current.distribution,
						[guessCount]: current.distribution[guessCount] + (won && guessCount ? 1 : 0)
					},
					lastPlayedDate: gameDay.dateKey
				}
			};
		});
		setStatsRecorded(true);
		setShowStats(true);
	}, [
		gameDay.dateKey,
		guesses.length,
		mode,
		mounted,
		statsRecorded,
		status
	]);
	(0, import_react.useEffect)(() => {
		const onKeyDown = (event) => {
			if (showAbout || showStats) {
				if (event.key === "Escape") {
					setShowAbout(false);
					setShowStats(false);
				}
				return;
			}
			if (event.key === "Enter" || event.key === "Backspace" || /^[a-z]$/i.test(event.key)) {
				event.preventDefault();
				handleKey(event.key);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [
		handleKey,
		showAbout,
		showStats
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "brief-app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				"aria-label": "BRIEF navigation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "brand-lockup",
					href: "#game",
					"aria-label": "BRIEF home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mccann",
						children: "McCANN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truth",
						children: "TRUTH WELL TOLD."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "nav-actions",
					"aria-label": "Primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowAbout(true),
							children: "ABOUT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how-to-play",
							children: "HOW TO PLAY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowStats(true),
							children: "STATS"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "game-stage",
				id: "game",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "intro-panel",
					"aria-label": "Game introduction",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mode-kicker",
								children: mode === "daily" ? "Daily Brief" : "Brand Mode"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "BRIEF" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tagline",
								children: "The daily word game for brand thinkers."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "intro-rule" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "guess-copy",
							children: "Guess the 5-letter branding term in 6 tries."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mode-toggle",
							role: "group",
							"aria-label": "Game mode",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: mode === "daily" ? "is-active" : "",
								type: "button",
								onClick: () => switchMode("daily"),
								children: "Daily Brief"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: mode === "brand" ? "is-active" : "",
								type: "button",
								onClick: () => switchMode("brand"),
								children: "Brand Mode"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "new-game",
							type: "button",
							onClick: resetBoard,
							children: "NEW GAME"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "countdown",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NEXT BRIEF IN" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: countdown }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Come back tomorrow." })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "play-panel",
					"aria-label": "BRIEF game board",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-meta",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["BRIEF #", String(gameDay.briefNumber).padStart(3, "0")] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "|"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: gameDay.label.toUpperCase() })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "board",
							role: "grid",
							"aria-label": "Guess grid",
							children: rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `board-row ${shakeRow === rowIndex ? "shake" : ""}`,
								role: "row",
								children: row.letters.map((letter, colIndex) => {
									const state = row.states[colIndex];
									const delayStyle = { "--delay": `${colIndex * 90}ms` };
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: [
											"tile",
											`is-${state}`,
											row.submitted ? "reveal" : "",
											!row.submitted && letter ? "pop" : ""
										].filter(Boolean).join(" "),
										role: "gridcell",
										"aria-label": letter ? `${letter} ${state}` : "empty",
										style: delayStyle,
										children: letter
									}, `tile-${rowIndex}-${colIndex}`);
								})
							}, `row-${rowIndex}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `game-message ${status !== "playing" ? "is-final" : ""}`,
							children: message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "keyboard",
							"aria-label": "On-screen keyboard",
							children: KEY_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "keyboard-row",
								children: row.map((key) => {
									const isAction = key === "ENTER" || key === "BACKSPACE";
									const keyState = !isAction ? keyboardStates[key] : void 0;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: [
											"key",
											isAction ? "is-action" : "",
											keyState ? `is-${keyState}` : ""
										].filter(Boolean).join(" "),
										type: "button",
										"aria-label": key === "BACKSPACE" ? "Backspace" : key,
										onClick: () => handleKey(key === "BACKSPACE" ? "Backspace" : key),
										children: key === "BACKSPACE" ? "DEL" : key
									}, key);
								})
							}, row.join("")))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "how-to",
				id: "how-to-play",
				"aria-labelledby": "how-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "how-column",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "how-title",
								children: "HOW TO PLAY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Guess the 5-letter branding term in 6 tries." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "legend",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "legend-swatch is-correct" }), "The letter is in the word and in the correct spot."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "legend-swatch is-present" }), "The letter is in the word but in the wrong spot."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "legend-swatch is-empty" }), "The letter is not in the word."] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "examples",
						"aria-label": "Examples",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "EXAMPLES" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "example-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mini-row",
									"aria-hidden": "true",
									children: [
										"V",
										"A",
										"L",
										"U",
										"E"
									].map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: index === 4 ? "is-correct" : "",
										children: letter
									}, letter))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The letter E is in the word and in the correct spot." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "example-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mini-row",
									"aria-hidden": "true",
									children: [
										"V",
										"I",
										"S",
										"I",
										"O"
									].map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: index === 1 ? "is-present" : "",
										children: letter
									}, `${letter}-${index}`))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The letter I is in the word but in the wrong spot." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "example-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mini-row",
									"aria-hidden": "true",
									children: [
										"T",
										"R",
										"U",
										"S",
										"T"
									].map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: index === 0 ? "is-absent" : "",
										children: letter
									}, `${letter}-${index}`))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The letter T is not in the word." })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "“"
						}),
						"TRUTH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"IS OUR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"STRATEGY.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"CREATIVITY",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"IS OUR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"LANGUAGE.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", { children: "TRUTH WELL TOLD." })
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "McCANN WORLDGROUP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TRUTH WELL TOLD." })]
			}),
			showAbout && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "modal-backdrop",
				role: "presentation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "about-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "modal-close",
							type: "button",
							"aria-label": "Close about",
							onClick: () => setShowAbout(false),
							children: "X"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "modal-kicker",
							children: "ABOUT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "about-title",
							children: "Truth, well guessed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "BRIEF is a daily 5-letter word game for brand, advertising, marketing, media, and strategy people. Daily Brief uses industry terms. Brand Mode uses iconic 5-letter brand names as plain text." })
					]
				})
			}),
			showStats && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "modal-backdrop",
				role: "presentation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "modal stats-modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "stats-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "modal-close",
							type: "button",
							"aria-label": "Close stats",
							onClick: () => setShowStats(false),
							children: "X"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "modal-kicker",
							children: mode === "daily" ? "DAILY BRIEF" : "BRAND MODE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "stats-title",
							children: "STATS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stat-grid",
							"aria-label": "Game statistics",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: activeStats.played }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PLAYED" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: winPercent }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WIN %" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: activeStats.currentStreak }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STREAK" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: activeStats.maxStreak }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MAX" })] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "distribution",
							"aria-label": "Guess distribution",
							children: Array.from({ length: MAX_ATTEMPTS }, (_, index) => index + 1).map((guessNumber) => {
								const total = activeStats.distribution[guessNumber];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "distribution-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: guessNumber }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
										style: { width: `${Math.max(8, total / maxDistribution * 100)}%` },
										children: total
									}) })]
								}, guessNumber);
							})
						}),
						status !== "playing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "share-block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "share-button",
								type: "button",
								onClick: shareResult,
								children: "SHARE"
							}), shareMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: shareMessage })]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Home as default };
