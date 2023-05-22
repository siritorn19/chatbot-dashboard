stg:
	rm -rf build
	npm run build:stage
	firebase use cms-stg
	firebase deploy --only hosting:cms-stg
prod:
	rm -rf build
	npm run build:prod
	firebase use cms-prod
	firebase deploy --only hosting:cms-prod
