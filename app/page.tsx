"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useCallback, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

type Mode = "daily" | "brand";
type TileState = "empty" | "filled" | "correct" | "present" | "absent";
type GameStatus = "playing" | "won" | "lost";
type LetterResult = Exclude<TileState, "empty" | "filled">;

type Stats = {
  played: number;
  wins: number;
  currentStreak: number;
  maxStreak: number;
  distribution: Record<number, number>;
  lastPlayedDate: string | null;
};

type SavedProgress = {
  answer: string;
  guesses: string[];
  currentGuess: string;
  status: GameStatus;
  statsRecorded: boolean;
};

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;
const LAUNCH_DATE = "2026-06-29";
const MODE_KEY = "brief:mode";
const STATS_KEY = "brief:stats";

const DAILY_SOLUTIONS = [
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
  "LOGIC",
];

const BRAND_SOLUTIONS = [
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
  "OREOS",
];

const EXTRA_ALLOWED_WORDS = [
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
  "YOUNG",
];

const KEY_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

const STATE_RANK: Record<LetterResult, number> = {
  absent: 1,
  present: 2,
  correct: 3,
};

const EMPTY_STATS: Stats = {
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
    6: 0,
  },
  lastPlayedDate: null,
};

const ALL_ALLOWED_WORDS = new Set(
  [...DAILY_SOLUTIONS, ...BRAND_SOLUTIONS, ...EXTRA_ALLOWED_WORDS].filter(
    (word) => word.length === WORD_LENGTH,
  ),
);

function cloneStats(stats: Stats = EMPTY_STATS): Stats {
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
      6: stats.distribution?.[6] ?? 0,
    },
    lastPlayedDate: stats.lastPlayedDate ?? null,
  };
}

function getDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

function parseDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function daysBetween(startKey: string, endKey: string) {
  const start = parseDateKey(startKey);
  const end = parseDateKey(endKey);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  return Math.max(
    0,
    Math.floor((end.getTime() - start.getTime()) / 86_400_000),
  );
}

function getGameDay(date = new Date()) {
  const dateKey = getDateKey(date);
  const index = daysBetween(LAUNCH_DATE, dateKey);
  return {
    dateKey,
    briefNumber: index + 1,
    label: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date),
  };
}

function getAnswer(mode: Mode, briefNumber: number) {
  const list = mode === "daily" ? DAILY_SOLUTIONS : BRAND_SOLUTIONS;
  return list[(briefNumber - 1) % list.length];
}

function progressKey(mode: Mode, dateKey: string) {
  return `brief:progress:${mode}:${dateKey}`;
}

function scoreGuess(guess: string, answer: string): LetterResult[] {
  const result: LetterResult[] = Array(WORD_LENGTH).fill("absent");
  const remaining = new Map<string, number>();

  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (guess[index] === answer[index]) {
      result[index] = "correct";
    } else {
      remaining.set(answer[index], (remaining.get(answer[index]) ?? 0) + 1);
    }
  }

  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (result[index] === "correct") {
      continue;
    }

    const letter = guess[index];
    const count = remaining.get(letter) ?? 0;
    if (count > 0) {
      result[index] = "present";
      remaining.set(letter, count - 1);
    }
  }

  return result;
}

function normalizeGuess(value: string) {
  return value.replace(/[^a-z]/gi, "").toUpperCase().slice(0, WORD_LENGTH);
}

function formatCountdown() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setHours(24, 0, 0, 0);
  const totalSeconds = Math.max(
    0,
    Math.floor((tomorrow.getTime() - now.getTime()) / 1000),
  );
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

function buildShareText(
  mode: Mode,
  briefNumber: number,
  status: GameStatus,
  guesses: string[],
  answer: string,
) {
  const score = status === "won" ? `${guesses.length}/6` : "X/6";
  const title = mode === "daily" ? "BRIEF" : "BRIEF BRAND";
  const rows = guesses.map((guess) =>
    scoreGuess(guess, answer)
      .map((state) => {
        if (state === "correct") {
          return "🟩";
        }

        if (state === "present") {
          return "🟨";
        }

        return "⬛";
      })
      .join(""),
  );

  return [
    `${title} #${String(briefNumber).padStart(3, "0")} ${score}`,
    "",
    ...rows,
    "",
    "Truth, well guessed.",
  ].join("\n");
}

function loadStats(): Record<Mode, Stats> {
  const fallback = {
    daily: cloneStats(),
    brand: cloneStats(),
  };

  try {
    const raw = window.localStorage.getItem(STATS_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw) as Partial<Record<Mode, Stats>>;
    return {
      daily: cloneStats(parsed.daily),
      brand: cloneStats(parsed.brand),
    };
  } catch {
    return fallback;
  }
}

function isYesterday(previousDateKey: string | null, currentDateKey: string) {
  if (!previousDateKey) {
    return false;
  }

  return daysBetween(previousDateKey, currentDateKey) === 1;
}

export default function Home() {
  const [gameDay, setGameDay] = useState(() => getGameDay());
  const [mode, setMode] = useState<Mode>("daily");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [status, setStatus] = useState<GameStatus>("playing");
  const [statsRecorded, setStatsRecorded] = useState(false);
  const [stats, setStats] = useState<Record<Mode, Stats>>({
    daily: cloneStats(),
    brand: cloneStats(),
  });
  const [message, setMessage] = useState("Make the first guess count.");
  const [shareMessage, setShareMessage] = useState("");
  const [countdown, setCountdown] = useState("00:00:00");
  const [showStats, setShowStats] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [shakeRow, setShakeRow] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const answer = useMemo(
    () => getAnswer(mode, gameDay.briefNumber),
    [gameDay.briefNumber, mode],
  );

  const activeStats = stats[mode];
  const winPercent =
    activeStats.played === 0
      ? 0
      : Math.round((activeStats.wins / activeStats.played) * 100);
  const maxDistribution = Math.max(
    1,
    ...Object.values(activeStats.distribution),
  );

  const rows = useMemo(() => {
    return Array.from({ length: MAX_ATTEMPTS }, (_, rowIndex) => {
      if (rowIndex < guesses.length) {
        const guess = guesses[rowIndex];
        return {
          letters: guess.split(""),
          states: scoreGuess(guess, answer),
          submitted: true,
        };
      }

      if (rowIndex === guesses.length && status === "playing") {
        const letters = currentGuess.padEnd(WORD_LENGTH).split("");
        return {
          letters,
          states: letters.map<TileState>((letter) =>
            letter.trim() ? "filled" : "empty",
          ),
          submitted: false,
        };
      }

      return {
        letters: Array(WORD_LENGTH).fill(""),
        states: Array<TileState>(WORD_LENGTH).fill("empty"),
        submitted: false,
      };
    });
  }, [answer, currentGuess, guesses, status]);

  const keyboardStates = useMemo(() => {
    const knownStates: Partial<Record<string, LetterResult>> = {};

    guesses.forEach((guess) => {
      scoreGuess(guess, answer).forEach((state, index) => {
        const letter = guess[index];
        const known = knownStates[letter];

        if (!known || STATE_RANK[state] > STATE_RANK[known]) {
          knownStates[letter] = state;
        }
      });
    });

    return knownStates;
  }, [answer, guesses]);

  const setTemporaryMessage = useCallback((nextMessage: string) => {
    setMessage(nextMessage);
    window.setTimeout(() => {
      setMessage((current) =>
        current === nextMessage ? "Keep going." : current,
      );
    }, 1700);
  }, []);

  const rejectGuess = useCallback(
    (nextMessage: string) => {
      setTemporaryMessage(nextMessage);
      setShakeRow(guesses.length);
      window.setTimeout(() => setShakeRow(null), 520);
    },
    [guesses.length, setTemporaryMessage],
  );

  const submitGuess = useCallback(() => {
    if (status !== "playing") {
      return;
    }

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
  }, [answer, currentGuess, guesses, rejectGuess, status]);

  const handleKey = useCallback(
    (key: string) => {
      if (key === "Enter") {
        submitGuess();
        return;
      }

      if (key === "Backspace") {
        if (status === "playing") {
          setCurrentGuess((guess) => guess.slice(0, -1));
        }
        return;
      }

      if (/^[a-z]$/i.test(key) && status === "playing") {
        setCurrentGuess((guess) => normalizeGuess(`${guess}${key}`));
      }
    },
    [status, submitGuess],
  );

  const resetBoard = useCallback(() => {
    setGuesses([]);
    setCurrentGuess("");
    setStatus("playing");
    setStatsRecorded(false);
    setMessage("Fresh brief. Same answer.");
    setShareMessage("");
    window.localStorage.removeItem(progressKey(mode, gameDay.dateKey));
  }, [gameDay.dateKey, mode]);

  const switchMode = useCallback(
    (nextMode: Mode) => {
      setMode(nextMode);
      setMessage(
        nextMode === "daily"
          ? "Daily Brief is live."
          : "Brand Mode is live.",
      );
      setShareMessage("");
    },
    [],
  );

  const shareResult = useCallback(async () => {
    if (status === "playing") {
      return;
    }

    const shareText = buildShareText(
      mode,
      gameDay.briefNumber,
      status,
      guesses,
      answer,
    );

    try {
      await navigator.clipboard.writeText(shareText);
      setShareMessage("Copied share result.");
    } catch {
      setShareMessage(shareText);
    }
  }, [answer, gameDay.briefNumber, guesses, mode, status]);

  useEffect(() => {
    setGameDay(getGameDay());
    setCountdown(formatCountdown());
    setStats(loadStats());

    const storedMode = window.localStorage.getItem(MODE_KEY);
    if (storedMode === "daily" || storedMode === "brand") {
      setMode(storedMode);
    }

    setMounted(true);

    const timer = window.setInterval(() => {
      setGameDay(getGameDay());
      setCountdown(formatCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

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

      const progress = JSON.parse(raw) as SavedProgress;
      if (progress.answer !== answer) {
        return;
      }

      setGuesses(progress.guesses ?? []);
      setCurrentGuess(progress.currentGuess ?? "");
      setStatus(progress.status ?? "playing");
      setStatsRecorded(Boolean(progress.statsRecorded));
      setMessage(
        progress.status === "won"
          ? "Truth, well guessed."
          : progress.status === "lost"
            ? `The answer was ${answer}.`
            : "Brief resumed.",
      );
    } catch {
      setGuesses([]);
      setCurrentGuess("");
      setStatus("playing");
      setStatsRecorded(false);
    }
  }, [answer, gameDay.dateKey, mode, mounted]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const progress: SavedProgress = {
      answer,
      guesses,
      currentGuess,
      status,
      statsRecorded,
    };

    window.localStorage.setItem(
      progressKey(mode, gameDay.dateKey),
      JSON.stringify(progress),
    );
  }, [
    answer,
    currentGuess,
    gameDay.dateKey,
    guesses,
    mode,
    mounted,
    statsRecorded,
    status,
  ]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }, [mounted, stats]);

  useEffect(() => {
    if (!mounted || status === "playing" || statsRecorded) {
      return;
    }

    setStats((currentStats) => {
      const current = cloneStats(currentStats[mode]);
      const won = status === "won";
      const guessCount = guesses.length;
      const nextCurrentStreak = won
        ? isYesterday(current.lastPlayedDate, gameDay.dateKey)
          ? current.currentStreak + 1
          : 1
        : 0;

      return {
        ...currentStats,
        [mode]: {
          played: current.played + 1,
          wins: current.wins + (won ? 1 : 0),
          currentStreak: nextCurrentStreak,
          maxStreak: Math.max(current.maxStreak, nextCurrentStreak),
          distribution: {
            ...current.distribution,
            [guessCount]:
              current.distribution[guessCount] + (won && guessCount ? 1 : 0),
          },
          lastPlayedDate: gameDay.dateKey,
        },
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
    status,
  ]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (showAbout || showStats) {
        if (event.key === "Escape") {
          setShowAbout(false);
          setShowStats(false);
        }
        return;
      }

      if (
        event.key === "Enter" ||
        event.key === "Backspace" ||
        /^[a-z]$/i.test(event.key)
      ) {
        event.preventDefault();
        handleKey(event.key);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleKey, showAbout, showStats]);

  return (
    <main className="brief-app">
      <header className="topbar" aria-label="BRIEF navigation">
        <a className="brand-lockup" href="#game" aria-label="BRIEF home">
          <span className="mccann">McCANN</span>
          <span className="truth">TRUTH WELL TOLD.</span>
        </a>
        <nav className="nav-actions" aria-label="Primary">
          <button type="button" onClick={() => setShowAbout(true)}>
            ABOUT
          </button>
          <a href="#how-to-play">HOW TO PLAY</a>
          <button type="button" onClick={() => setShowStats(true)}>
            STATS
          </button>
        </nav>
      </header>

      <section className="game-stage" id="game">
        <aside className="intro-panel" aria-label="Game introduction">
          <div>
            <p className="mode-kicker">{mode === "daily" ? "Daily Brief" : "Brand Mode"}</p>
            <h1>BRIEF</h1>
            <p className="tagline">The daily word game for brand thinkers.</p>
          </div>

          <div className="intro-rule" />

          <p className="guess-copy">
            Guess the 5-letter branding term in 6 tries.
          </p>

          <div className="mode-toggle" role="group" aria-label="Game mode">
            <button
              className={mode === "daily" ? "is-active" : ""}
              type="button"
              onClick={() => switchMode("daily")}
            >
              Daily Brief
            </button>
            <button
              className={mode === "brand" ? "is-active" : ""}
              type="button"
              onClick={() => switchMode("brand")}
            >
              Brand Mode
            </button>
          </div>

          <button className="new-game" type="button" onClick={resetBoard}>
            NEW GAME
          </button>

          <div className="countdown" aria-live="polite">
            <span>NEXT BRIEF IN</span>
            <strong>{countdown}</strong>
            <small>Come back tomorrow.</small>
          </div>
        </aside>

        <section className="play-panel" aria-label="BRIEF game board">
          <div className="game-meta">
            <span>BRIEF #{String(gameDay.briefNumber).padStart(3, "0")}</span>
            <span aria-hidden="true">|</span>
            <span>{gameDay.label.toUpperCase()}</span>
          </div>

          <div className="board" role="grid" aria-label="Guess grid">
            {rows.map((row, rowIndex) => (
              <div
                className={`board-row ${shakeRow === rowIndex ? "shake" : ""}`}
                role="row"
                key={`row-${rowIndex}`}
              >
                {row.letters.map((letter, colIndex) => {
                  const state = row.states[colIndex];
                  const delayStyle = {
                    "--delay": `${colIndex * 90}ms`,
                  } as CSSProperties;
                  const tileClass = [
                    "tile",
                    `is-${state}`,
                    row.submitted ? "reveal" : "",
                    !row.submitted && letter ? "pop" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <span
                      className={tileClass}
                      role="gridcell"
                      aria-label={letter ? `${letter} ${state}` : "empty"}
                      style={delayStyle}
                      key={`tile-${rowIndex}-${colIndex}`}
                    >
                      {letter}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          <p className={`game-message ${status !== "playing" ? "is-final" : ""}`}>
            {message}
          </p>

          <div className="keyboard" aria-label="On-screen keyboard">
            {KEY_ROWS.map((row) => (
              <div className="keyboard-row" key={row.join("")}>
                {row.map((key) => {
                  const isAction = key === "ENTER" || key === "BACKSPACE";
                  const keyState = !isAction ? keyboardStates[key] : undefined;
                  const className = [
                    "key",
                    isAction ? "is-action" : "",
                    keyState ? `is-${keyState}` : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <button
                      className={className}
                      type="button"
                      aria-label={key === "BACKSPACE" ? "Backspace" : key}
                      onClick={() =>
                        handleKey(key === "BACKSPACE" ? "Backspace" : key)
                      }
                      key={key}
                    >
                      {key === "BACKSPACE" ? "DEL" : key}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="how-to" id="how-to-play" aria-labelledby="how-title">
        <div className="how-column">
          <h2 id="how-title">HOW TO PLAY</h2>
          <p>Guess the 5-letter branding term in 6 tries.</p>
          <ul className="legend">
            <li>
              <span className="legend-swatch is-correct" />
              The letter is in the word and in the correct spot.
            </li>
            <li>
              <span className="legend-swatch is-present" />
              The letter is in the word but in the wrong spot.
            </li>
            <li>
              <span className="legend-swatch is-empty" />
              The letter is not in the word.
            </li>
          </ul>
        </div>

        <div className="examples" aria-label="Examples">
          <h2>EXAMPLES</h2>
          <div className="example-line">
            <div className="mini-row" aria-hidden="true">
              {["V", "A", "L", "U", "E"].map((letter, index) => (
                <span className={index === 4 ? "is-correct" : ""} key={letter}>
                  {letter}
                </span>
              ))}
            </div>
            <p>The letter E is in the word and in the correct spot.</p>
          </div>
          <div className="example-line">
            <div className="mini-row" aria-hidden="true">
              {["V", "I", "S", "I", "O"].map((letter, index) => (
                <span className={index === 1 ? "is-present" : ""} key={`${letter}-${index}`}>
                  {letter}
                </span>
              ))}
            </div>
            <p>The letter I is in the word but in the wrong spot.</p>
          </div>
          <div className="example-line">
            <div className="mini-row" aria-hidden="true">
              {["T", "R", "U", "S", "T"].map((letter, index) => (
                <span className={index === 0 ? "is-absent" : ""} key={`${letter}-${index}`}>
                  {letter}
                </span>
              ))}
            </div>
            <p>The letter T is not in the word.</p>
          </div>
        </div>

        <blockquote>
          <span aria-hidden="true">“</span>
          TRUTH
          <br />
          IS OUR
          <br />
          STRATEGY.
          <br />
          CREATIVITY
          <br />
          IS OUR
          <br />
          LANGUAGE.
          <cite>TRUTH WELL TOLD.</cite>
        </blockquote>
      </section>

      <footer className="footer">
        <span>McCANN WORLDGROUP</span>
        <span>TRUTH WELL TOLD.</span>
      </footer>

      {showAbout && (
        <div className="modal-backdrop" role="presentation">
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="about-title">
            <button
              className="modal-close"
              type="button"
              aria-label="Close about"
              onClick={() => setShowAbout(false)}
            >
              X
            </button>
            <p className="modal-kicker">ABOUT</p>
            <h2 id="about-title">Truth, well guessed.</h2>
            <p>
              BRIEF is a daily 5-letter word game for brand, advertising,
              marketing, media, and strategy people. Daily Brief uses industry
              terms. Brand Mode uses iconic 5-letter brand names as plain text.
            </p>
          </section>
        </div>
      )}

      {showStats && (
        <div className="modal-backdrop" role="presentation">
          <section className="modal stats-modal" role="dialog" aria-modal="true" aria-labelledby="stats-title">
            <button
              className="modal-close"
              type="button"
              aria-label="Close stats"
              onClick={() => setShowStats(false)}
            >
              X
            </button>
            <p className="modal-kicker">{mode === "daily" ? "DAILY BRIEF" : "BRAND MODE"}</p>
            <h2 id="stats-title">STATS</h2>

            <div className="stat-grid" aria-label="Game statistics">
              <div>
                <strong>{activeStats.played}</strong>
                <span>PLAYED</span>
              </div>
              <div>
                <strong>{winPercent}</strong>
                <span>WIN %</span>
              </div>
              <div>
                <strong>{activeStats.currentStreak}</strong>
                <span>STREAK</span>
              </div>
              <div>
                <strong>{activeStats.maxStreak}</strong>
                <span>MAX</span>
              </div>
            </div>

            <div className="distribution" aria-label="Guess distribution">
              {Array.from({ length: MAX_ATTEMPTS }, (_, index) => index + 1).map(
                (guessNumber) => {
                  const total = activeStats.distribution[guessNumber];
                  return (
                    <div className="distribution-row" key={guessNumber}>
                      <span>{guessNumber}</span>
                      <div>
                        <i
                          style={{
                            width: `${Math.max(8, (total / maxDistribution) * 100)}%`,
                          }}
                        >
                          {total}
                        </i>
                      </div>
                    </div>
                  );
                },
              )}
            </div>

            {status !== "playing" && (
              <div className="share-block">
                <button className="share-button" type="button" onClick={shareResult}>
                  SHARE
                </button>
                {shareMessage && <p>{shareMessage}</p>}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
