postcss src/main.css --use postcss-import --no-cache --update --no-map --output 
src/css/styles.css
postcss ./src/main.css --no-map --use postcss-import --use autoprefixer --output src/css/styles.css
postcss ./src/main.css --use postcss-import --use autoprefixer --no-map --output src/css/styles.css
postcss ./src/main.css --use postcss-import --use autoprefixer --use cssnano --no-map --output ./styles.css


postcss ./src/css/main.css --output build/css/style.css
postcss ./src/css/main.css --watch --verbose --output build/css/style.css --env development 