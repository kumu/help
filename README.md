## Getting Started

Run `make setup` to install the required gems and set up pow link.

## Adding New Content

Run `make preview` and get to work. All source files are under `site/` with previews generated to `public/`. Visit `help.kumu.dev` to preview your changes.

## Releasing Updates

Merge your changes into the `master` branch and run `make deploy`.

Before pushing any updates you'll first need to add credentials for the `kumu-help` profile to your aws config file (`~/.aws/config`).


## Notes

Originally planned to host the help pages on GitHub Pages but ran into issues with our jekyll configuration (unsafe plugins, custom source / destination).  Was easier to just host the pages on S3 instead.
