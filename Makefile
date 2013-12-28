preview:
	make build && make watch

watch:
	bundle exec guard

build:
	bundle exec jekyll build

clean:
	rm -fr public

setup:
	bundle && powder link

deploy:
	aws s3 sync public s3://help.kumu.io --delete --profile kumu-help
