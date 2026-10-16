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

## If you edit the config file

Changes to `_config.yml` are not picked up automatically. Stop Jekyll with `Control + C`, then restart the local development server

```bash
bundle exec jekyll serve --livereload
```

## If you edit the Gemfile

Install the updated dependencies

```bash
bundle install
```

## To deploy

Commit and push your changes to `master`

```bash
git add .
git commit -m "Describe your changes"
git push
```

GitHub Actions will build and deploy the production site automatically.