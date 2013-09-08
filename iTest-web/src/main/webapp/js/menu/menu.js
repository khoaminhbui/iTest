/*************************************************************************
 *
 * iServiceSoft Inc © - 2009 All Rights Reserved
 * _____________________________________________
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of iServiceSoft. Intellectual and technical concepts
 * contained herein are proprietary of iServiceSoft and may be covered
 * by U.S. and Foreign Patents, patents in process, and are protected
 * by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from iServiceSoft Incorporated.
 *
 *************************************************************************/

angular.module('menu', []).
   directive('activeLink', ['$location', function (location) {
      return {
         restrict: 'A',
         link: function (scope, element, attrs, controller) {
            var clazz = attrs.activeLink;
            var path = attrs.href;
            path = path.substring(1); //hack because path does bot return including hashbang
            scope.location = location;
            scope.$watch('location.path()', function (newPath) {
               if (path === newPath) {
                  element.addClass(clazz);
               } else {
                  element.removeClass(clazz);
               }
            });
         }

      };

   }]);