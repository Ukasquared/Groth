import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-950 px-4 text-slate-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Groth
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            •
          </span>
        </h1>
        <p className="mt-4 max-w-md text-lg text-slate-400">
          React <span className="text-emerald-400">19</span> + Vite{' '}
          <span className="text-cyan-400">8</span> + TypeScript{' '}
          <span className="text-emerald-400">5.9</span> + Tailwind CSS{' '}
          <span className="text-cyan-400">4</span>. Tailwind is working — this
          whole page is styled with utility classes.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setCount((c) => c - 1)}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium ring-1 ring-slate-700 transition hover:bg-slate-700 active:scale-95"
        >
          −
        </button>
        <span className="min-w-16 text-center font-mono text-2xl font-semibold text-emerald-400">
          {count}
        </span>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400 active:scale-95"
        >
          +
        </button>
      </div>

      <p className="text-sm text-slate-500">
        React state is wired up too — click the buttons.
      </p>
    </main>
  )
}

export default App