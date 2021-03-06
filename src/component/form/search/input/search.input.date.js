//-----------------------------------------------------------------------------------------------
//
//
//  针对input的封装
//
//
//-----------------------------------------------------------------------------------------------
angular.module('admin.component')
    .directive('uiSearchDate', function (uiDateFactory, componentHelper) {
        return {
            restrict: 'E',
            replace: true,
            link: uiDateFactory,
            template: function (element, attrs) {
                var format = [];
                if(attrs.mode){
                    if (!attrs.mode || attrs.mode.indexOf('date') != -1)
                        format.push('YYYY-MM-DD');
                    if (!attrs.mode || attrs.mode.indexOf('time') != -1)
                        format.push('HH:mm:ss');
                }
                else{ //兼容老属性
                    if (!attrs.date)
                        format.push('YYYY-MM-DD');
                    if (!attrs.time)
                        format.push('HH:mm:ss');
                }
                return componentHelper.getTemplate('tpl.searchform.input', $.extend({
                    other: [
                        {key: 'data-date-format', val: format.join(' ')},
                        {key: 'readonly', val: ''}
                    ]
                }, attrs));
            }
        };
    });