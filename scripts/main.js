
requirejs.config({
    baseUrl: '/scripts',
    paths: {
        /* third parties */
        Promise: '../bower_components/bluebird/js/browser/bluebird',
        domReady: '../bower_components/domReady/domReady',
        
        /* business logic and application */
        app: 'app',
        loadAsync: 'load.async',
        producsPage: 'products.page'
    }
});


requirejs([
    'domReady',
    'app'
], function(domReady, app) {
    domReady(function() {
        document.getElementById('log').innerHTML = '<p><strong>check console</strong> </br /></p>';
        app.init();     
        
        console.log('domReady callback');
        
    });
});