setup:
	@make build
	@make up
	@make composer-update
build:
	docker-compose build --no-cache --force-rm
stop: 
	docker-compose stop
start:
	docker-compose up -d
serve:
	docker exec -it -u 0 backend bash -c "php artisan serve --host=0.0.0.0"	
update:  
	docker exec -it -u 0 backend bash -c "composer update"
data:
	docker exec -it -u 0 backend bash -c "php artisan migrate"
	docker exec -it -u 0 backend bash -c "php artisan db:seed"