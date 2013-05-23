/**
 * @file
 * This is main script of Mappy. His route other js files.
 */

(function($) {
    $(document).ready(function() {
        // If used Yandex.Map load script.
        if ($('body *').is('yandex')) {
            // First we connect Yandex.Maps API script.
            $.getScript("http://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU", function() {
                // If script loaded, then load our script.
                $.getScript("/" + Drupal.settings.mappy_location + "/js/yandex.mappy.js");
            });
        }
    });
})(jQuery);