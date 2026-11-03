# Esten.co

Personal product design portfolio built with Jekyll and hosted on GitHub Pages.

## Start the local development server

```bash
bundle exec jekyll serve --livereload
```

## Running locally

Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

From the root of the project, install dependencies if needed

```bash
brew install rbenv ruby-build rbenv-gemset rbenv-vars
rbenv init
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
```

To open your Zsh profile (.zshrc) using the nano text editor on a Mac
```bash
nano ~/.zshrc
```

Modify your shell startup script

```bash
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@3)"
eval "$(rbenv init - zsh)"
```

Install the latest version of Ruby

```bash
rbenv install 3.2.2
rbenv global 3.2.2
```

Confirm you are using the latest ruby, open a new shell

```bash
ruby -v
ruby 3.2.2 (2023-03-30 revision e51014f9c0) [x86_64-darwin23]
```

Install Jekyll

```bash
gem install jekyll
```

Bundle the project

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