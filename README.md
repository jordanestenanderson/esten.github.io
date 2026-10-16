# Esten.co

Personal product design portfolio built with Jekyll and hosted on GitHub Pages.

## Running locally

From the root of the project, install dependencies if needed

```bash
bundle install
```

Start the local development server

```bash
bundle exec jekyll serve --livereload
```

Then open

```text
http://localhost:4000
```

## Clean rebuild

If generated files appear stale or something is behaving unexpectedly, stop the server and run

```bash
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```
