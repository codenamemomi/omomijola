function QuietNav({ items = [], activeSection, onChange }) {
  return (
    <nav className="quiet-nav" aria-label="Floor plan">
      <ul className="quiet-nav-list">
        {items.map((item) => {
          const isActive = activeSection === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`quiet-nav-link${isActive ? ' active' : ''}`}
                onClick={() => onChange?.(item.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default QuietNav
