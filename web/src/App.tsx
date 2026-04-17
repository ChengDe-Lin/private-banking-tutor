import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import mermaid from 'mermaid'
import type { Components } from 'react-markdown'

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
})

function MermaidDiagram({ chart }: { chart: string }) {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    const id = `m-${Date.now()}-${Math.random().toString(36).slice(2)}`
    mermaid
      .render(id, chart)
      .then(({ svg: renderedSvg }) => setSvg(renderedSvg))
      .catch(() => setSvg(''))
  }, [chart])

  if (!svg) return <pre><code>{chart}</code></pre>
  return <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: svg }} />
}

interface FileEntry {
  path: string
  name: string
  content: string
}

interface Section {
  key: string
  title: string
  description: string
  color: string
  files: FileEntry[]
}

interface Heading {
  level: number
  text: string
  id: string
}

const studyPathMd = import.meta.glob('../../study_path.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const rolesMd = import.meta.glob('../../roles.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const productsMds = import.meta.glob('../../products/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const conceptsMds = import.meta.glob('../../concepts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const regulationMds = import.meta.glob('../../regulation/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const marketsMds = import.meta.glob(
  ['../../market_view.md', '../../industry.md'],
  { query: '?raw', import: 'default', eager: true },
) as Record<string, string>

const casesMds = import.meta.glob('../../cases/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const bqReadmeMd = import.meta.glob('../../bq/README.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const bqStoriesMds = import.meta.glob('../../bq/stories/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const businessPlanMds = import.meta.glob('../../business_plan/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const assessmentsMds = import.meta.glob('../../assessments/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function toDisplayName(path: string): string {
  const fileName = path.split('/').pop()?.replace('.md', '') || ''
  const stripped = fileName.replace(/^\d+[_-]/, '')
  return stripped
    .split(/[_-]/)
    .map((w) => {
      const lower = w.toLowerCase()
      const acronyms: Record<string, string> = {
        fx: 'FX',
        cio: 'CIO',
        mas: 'MAS',
        pb: 'PB',
        fatca: 'FATCA',
        crs: 'CRS',
        aml: 'AML',
        sow: 'SOW',
        sof: 'SOF',
        hnw: 'HNW',
        bq: 'BQ',
        rm: 'RM',
        ic: 'IC',
      }
      if (acronyms[lower]) return acronyms[lower]
      return w.charAt(0).toUpperCase() + w.slice(1)
    })
    .join(' ')
}

function parseFiles(
  mds: Record<string, string>,
  order?: string[],
): FileEntry[] {
  const entries = Object.entries(mds).map(([path, content]) => ({
    path,
    name: toDisplayName(path),
    content,
  }))
  if (order) {
    const orderMap = new Map(order.map((name, i) => [name.toLowerCase(), i]))
    return entries.sort((a, b) => {
      const ai = orderMap.get(a.name.toLowerCase()) ?? 999
      const bi = orderMap.get(b.name.toLowerCase()) ?? 999
      if (ai !== bi) return ai - bi
      return a.path.localeCompare(b.path)
    })
  }
  return entries.sort((a, b) => a.path.localeCompare(b.path))
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function extractHeadings(markdown: string): Heading[] {
  const regex = /^(#{1,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match
  while ((match = regex.exec(markdown)) !== null) {
    const text = match[2]
      .replace(/\*\*/g, '')
      .replace(/`/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    headings.push({ level: match[1].length, text, id: slugify(text) })
  }
  return headings
}

function getTextContent(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getTextContent).join('')
  if (node && typeof node === 'object' && 'props' in node) {
    return getTextContent((node as any).props.children)
  }
  return ''
}

function TableOfContents({
  headings,
  activeId,
}: {
  headings: Heading[]
  activeId: string
}) {
  const filtered = headings.filter((h) => h.level <= 3)
  if (filtered.length === 0) return null

  return (
    <div className="toc">
      <h3 className="toc-title">On This Page</h3>
      <ul className="toc-list">
        {filtered.map((h, i) => (
          <li key={`${h.id}-${i}`}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById(h.id)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`toc-link toc-level-${h.level} ${
                activeId === h.id ? 'toc-active' : ''
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const [selected, setSelected] = useState<FileEntry | null>(null)
  const [activeHeadingId, setActiveHeadingId] = useState('')
  const mainRef = useRef<HTMLElement>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const productOrder = [
    'Derivatives',
    'Structured',
    'Fixed Income',
    'FX',
    'Equities Funds',
    'Leverage',
    'Alternatives',
  ]

  const regulationOrder = [
    'MAS Notice 626',
    'PB Code Of Conduct',
    'Accredited Investor',
    'FATCA CRS',
    'SOW SOF Sanctions',
  ]

  const conceptOrder = ['Wealth Management', 'CIO House View']

  const marketsOrder = ['Market View', 'Industry']

  const sections: Section[] = useMemo(() => {
    const startFiles = [
      ...parseFiles(studyPathMd).map((f) => ({ ...f, name: 'Study Path' })),
      ...parseFiles(rolesMd).map((f) => ({ ...f, name: 'Roles: RM vs IC' })),
    ]

    const bqFiles = [
      ...parseFiles(bqReadmeMd).map((f) => ({ ...f, name: 'Index' })),
      ...parseFiles(bqStoriesMds),
    ]

    return [
      {
        key: 'start',
        title: 'Start Here',
        description: 'Study path and role calibration',
        color: 'var(--accent)',
        files: startFiles,
      },
      {
        key: 'products',
        title: 'Products',
        description: 'Product deep-dives',
        color: 'var(--accent-blue)',
        files: parseFiles(productsMds, productOrder),
      },
      {
        key: 'concepts',
        title: 'Concepts',
        description: 'Wealth management fundamentals',
        color: 'var(--accent-green)',
        files: parseFiles(conceptsMds, conceptOrder),
      },
      {
        key: 'regulation',
        title: 'Regulation',
        description: 'MAS / PB Code / AI / FATCA / AML',
        color: 'var(--accent-orange)',
        files: parseFiles(regulationMds, regulationOrder),
      },
      {
        key: 'markets',
        title: 'Markets',
        description: 'Industry landscape and market view',
        color: 'var(--accent-blue)',
        files: parseFiles(marketsMds, marketsOrder),
      },
      {
        key: 'cases',
        title: 'Cases',
        description: 'Suitability case studies',
        color: 'var(--accent)',
        files: parseFiles(casesMds),
      },
      {
        key: 'bq',
        title: 'Behavioural (BQ)',
        description: 'STAR stories',
        color: 'var(--accent-green)',
        files: bqFiles,
      },
      {
        key: 'business_plan',
        title: 'Business Plan',
        description: 'RM business plan template',
        color: 'var(--accent-orange)',
        files: parseFiles(businessPlanMds),
      },
      {
        key: 'assessments',
        title: 'Assessments',
        description: 'Confusion ledger',
        color: 'var(--accent)',
        files: parseFiles(assessmentsMds),
      },
    ]
  }, [])

  const allFiles = useMemo(() => sections.flatMap((s) => s.files), [sections])

  const headings = useMemo(
    () => (selected ? extractHeadings(selected.content) : []),
    [selected],
  )

  const h2Headings = useMemo(
    () => headings.filter((h) => h.level === 2),
    [headings],
  )

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return null

    const results: { file: FileEntry; section: Section; snippet: string }[] = []
    for (const section of sections) {
      for (const file of section.files) {
        const nameMatch = file.name.toLowerCase().includes(q)
        const contentLower = file.content.toLowerCase()
        const contentMatch = contentLower.includes(q)

        if (nameMatch || contentMatch) {
          let snippet = ''
          if (contentMatch) {
            const idx = contentLower.indexOf(q)
            const start = Math.max(0, idx - 50)
            const end = Math.min(file.content.length, idx + q.length + 50)
            snippet = file.content
              .slice(start, end)
              .replace(/[#*`|\n]/g, ' ')
              .replace(/\s+/g, ' ')
              .trim()
            if (start > 0) snippet = '…' + snippet
            if (end < file.content.length) snippet += '…'
          }
          results.push({ file, section, snippet })
        }
      }
    }
    return results
  }, [searchQuery, sections])

  useEffect(() => {
    if (!selected || headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveHeadingId(visible.target.id)
      },
      { rootMargin: '-60px 0px -75% 0px', root: mainRef.current },
    )

    const timer = setTimeout(() => {
      headings.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 80)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [selected, headings])

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 })
    setActiveHeadingId('')
  }, [selected])

  useEffect(() => {
    const main = mainRef.current
    if (!main) return
    const onScroll = () => setShowBackToTop(main.scrollTop > 400)
    main.addEventListener('scroll', onScroll, { passive: true })
    return () => main.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
      if (e.key === 'Escape' && searchQuery) {
        setSearchQuery('')
        searchInputRef.current?.blur()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [searchQuery])

  const mdComponents: Components = useMemo(
    () => ({
      h1: ({ children, ...props }: any) => (
        <h1 id={slugify(getTextContent(children))} {...props}>
          {children}
        </h1>
      ),
      h2: ({ children, ...props }: any) => (
        <h2 id={slugify(getTextContent(children))} {...props}>
          {children}
        </h2>
      ),
      h3: ({ children, ...props }: any) => (
        <h3 id={slugify(getTextContent(children))} {...props}>
          {children}
        </h3>
      ),
      table: ({ children, ...props }: any) => (
        <div className="table-wrapper">
          <table {...props}>{children}</table>
        </div>
      ),
      pre: ({ children, ...props }: any) => {
        const child = Array.isArray(children) ? children[0] : children
        if (child?.props?.className === 'language-mermaid') {
          return (
            <MermaidDiagram
              chart={String(child.props.children).replace(/\n$/, '')}
            />
          )
        }
        return <pre {...props}>{children}</pre>
      },
    }),
    [],
  )

  const handleSelect = useCallback((file: FileEntry) => {
    setSelected(file)
  }, [])

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <button
            onClick={() => setSelected(null)}
            className="sidebar-title-btn"
          >
            <span className="sidebar-title">Private Banking</span>
            <span className="sidebar-subtitle">Tutor</span>
          </button>
          <span className="sidebar-count">{allFiles.length} notes</span>
        </div>

        <div className="sidebar-search">
          <input
            ref={searchInputRef}
            type="text"
            className="sidebar-search-input"
            placeholder="Search… ⌘K"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="sidebar-search-clear"
              onClick={() => setSearchQuery('')}
            >
              ×
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          {searchResults ? (
            <div className="sidebar-section">
              <div className="sidebar-section-header">
                <span className="sidebar-section-title">
                  {searchResults.length} result
                  {searchResults.length !== 1 ? 's' : ''}
                </span>
              </div>
              {searchResults.length === 0 ? (
                <p className="sidebar-empty">No matches found</p>
              ) : (
                <ul>
                  {searchResults.map((r) => (
                    <li key={r.file.path}>
                      <button
                        onClick={() => {
                          handleSelect(r.file)
                          setSearchQuery('')
                        }}
                        className={`sidebar-item search-result-item ${
                          selected?.path === r.file.path
                            ? 'sidebar-item-active'
                            : ''
                        }`}
                      >
                        <span className="search-result-name">
                          {r.file.name}
                        </span>
                        <span
                          className="search-result-section"
                          style={{ color: r.section.color }}
                        >
                          {r.section.title}
                        </span>
                        {r.snippet && (
                          <span className="search-result-snippet">
                            {r.snippet}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            sections.map((s) => (
              <div key={s.key} className="sidebar-section">
                <div className="sidebar-section-header">
                  <span
                    className="sidebar-dot"
                    style={{ background: s.color, color: s.color }}
                  />
                  <span className="sidebar-section-title">{s.title}</span>
                </div>
                {s.files.length === 0 ? (
                  <p className="sidebar-empty">No notes yet</p>
                ) : (
                  <ul>
                    {s.files.map((f) => (
                      <li key={f.path}>
                        <button
                          onClick={() => handleSelect(f)}
                          className={`sidebar-item ${
                            selected?.path === f.path
                              ? 'sidebar-item-active'
                              : ''
                          }`}
                        >
                          {f.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </nav>
      </aside>

      <main className="main-content" ref={mainRef}>
        <div className="mobile-search">
          <div className="mobile-search-bar">
            <input
              type="text"
              className="mobile-search-input"
              placeholder="Search all notes…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="mobile-search-clear"
                onClick={() => setSearchQuery('')}
              >
                ×
              </button>
            )}
          </div>
          {searchResults && (
            <div className="mobile-search-results">
              {searchResults.length === 0 ? (
                <p className="mobile-search-empty">No matches found</p>
              ) : (
                <ul>
                  {searchResults.map((r) => (
                    <li key={r.file.path}>
                      <button
                        onClick={() => {
                          handleSelect(r.file)
                          setSearchQuery('')
                        }}
                        className="mobile-search-result-item"
                      >
                        <span className="search-result-name">
                          {r.file.name}
                        </span>
                        <span
                          className="search-result-section"
                          style={{ color: r.section.color }}
                        >
                          {r.section.title}
                        </span>
                        {r.snippet && (
                          <span className="search-result-snippet">
                            {r.snippet}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {selected ? (
          <div className="article-layout">
            <div className="article-container">
              <div className="breadcrumb">
                <button
                  onClick={() => setSelected(null)}
                  className="breadcrumb-home"
                >
                  Home
                </button>
                <span className="breadcrumb-sep">/</span>
                <span className="breadcrumb-current">{selected.name}</span>
              </div>

              {h2Headings.length > 0 && (
                <nav className="inline-outline">
                  <span className="inline-outline-title">Outline</span>
                  <ol className="inline-outline-list">
                    {h2Headings.map((h, i) => (
                      <li key={`${h.id}-${i}`}>
                        <a
                          href={`#${h.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            document
                              .getElementById(h.id)
                              ?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                              })
                          }}
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <article className="article-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={mdComponents}
                >
                  {selected.content}
                </ReactMarkdown>
              </article>
            </div>
            <TableOfContents headings={headings} activeId={activeHeadingId} />
          </div>
        ) : (
          <div className="home">
            <div className="home-header">
              <h1 className="home-title">
                Private Banking{' '}
                <span className="home-title-accent">Tutor</span>
              </h1>
              <p className="home-desc">
                A personal knowledge base for Singapore private-banking interviews — RM lateral and Investment Counselor. Start with the study path, then explore by topic.
              </p>
            </div>
            <div className="home-grid">
              {sections.map((s) => (
                <div key={s.key} className="home-card">
                  <div
                    className="home-card-accent"
                    style={{ background: s.color }}
                  />
                  <div className="home-card-header">
                    <h2 className="home-card-title">{s.title}</h2>
                    <span className="home-card-count">{s.files.length}</span>
                  </div>
                  <p className="home-card-desc">{s.description}</p>
                  {s.files.length > 0 ? (
                    <ul className="home-card-list">
                      {s.files.map((f) => (
                        <li key={f.path}>
                          <button
                            onClick={() => handleSelect(f)}
                            className="home-card-link"
                          >
                            {f.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="home-card-empty">No notes yet.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {showBackToTop && selected && (
          <button
            className="back-to-top"
            onClick={() =>
              mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
            }
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </main>
    </div>
  )
}
