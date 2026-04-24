# CLI Portfolio

> Interactive CLI portfolio — runs directly in your terminal.

```bash
npx juan-acosta
```

---

## Try It

No installation needed. Just run this in any terminal:

```bash
npx juan-acosta
```

You'll get an interactive menu to explore my background, skills, projects, and contact info.

---

## Commands

You can also run sections directly:

```bash
npx juan-acosta about
npx juan-acosta skills
npx juan-acosta projects
npx juan-acosta experience
npx juan-acosta contact
```

---

## Built With

- **TypeScript** — fully typed, strict mode
- **Node.js** — runs anywhere Node is installed
- **Commander** — CLI command parsing
- **Enquirer** — interactive terminal prompts
- **Chalk** — terminal colors
- **Figlet** — ASCII art for header

---

## Development

```bash
# Clone
git clone https://github.com/acostajs/cli-portfolio
cd cli-portfolio

# Install dependencies
npm install

# Run locally
npm run dev

# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build
```

---

## CI/CD

Every push and pull request runs:

- **Type checking** — `tsc --noEmit`
- **Linting** — ESLint with TypeScript rules
- **Formatting** — Prettier
- **Build** — compiles to `dist/`
- Tested on **Node 18** and **Node 20**

Pre-commit hooks via **Husky** run ESLint and Prettier automatically before every commit.

---

## License

MIT