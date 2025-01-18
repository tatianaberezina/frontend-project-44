install: #установить зависимости
	npm ci
brain-games: #запуск игры
	node bin/brain-games.js
publish: #публикация учебного пакета
	npm publish --dry-run
lint: #проверка кодстайла
	npx eslint .