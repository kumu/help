preview:
	make build && make watch

watch:
	bundle exec guard

build:
	bundle exec jekyll build

clean:
	rm -fr ./_site/*

setup:
	bundle && powder link
