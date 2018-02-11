// all js files in admin_extensions folder will be injected into the admin interface
$.ajaxSetup({
    cache: true
})

// inject pell's css into the admin interface
$('head').append('<link rel="stylesheet" type="text/css" href="https://unpkg.com/pell/dist/pell.min.css">')

// * ———————————————————————————————————————————————————————— * //
// *	custom wysiwyg directive
// * ———————————————————————————————————————————————————————— * //
// console.dir(brick_admin_settings.enduro_pell, {colors:true, depth:15});

enduro_admin_app.compileProvider
  .directive('pell', function () {
    return {
      link: function (scope, element, attr) {
        $.getScript('https://unpkg.com/pell', function () {

          var defaultActions = [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'olist',
                'ulist',
                'link'
              ],
              actions = brick_admin_settings.enduro_pell.actions || defaultActions

          var current_content = window.pell.init({
            element: element[0],
            actions: actions,
            onChange: function (html) {
              scope.context[scope.terminatedkey] = html
            }
          })

          scope.$watch('current_culture', function () {
            current_content.content.innerHTML = scope.context[scope.terminatedkey] || ''
          })

          current_content.content.innerHTML = scope.context[scope.terminatedkey]
        })
      }
    }
  })
