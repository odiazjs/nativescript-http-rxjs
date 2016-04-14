"use strict";
var list_view_comp_1 = require('./list-view-comp');
var text_value_accessor_1 = require('../value-accessors/text-value-accessor');
var checked_value_accessor_1 = require('../value-accessors/checked-value-accessor');
var date_value_accessor_1 = require('../value-accessors/date-value-accessor');
var time_value_accessor_1 = require('../value-accessors/time-value-accessor');
var number_value_accessor_1 = require('../value-accessors/number-value-accessor');
var selectedIndex_value_accessor_1 = require('../value-accessors/selectedIndex-value-accessor');
var tab_view_1 = require('./tab-view');
var action_bar_1 = require('./action-bar');
exports.NS_DIRECTIVES = [
    list_view_comp_1.ListViewComponent,
    tab_view_1.TabViewDirective,
    tab_view_1.TabViewItemDirective,
    text_value_accessor_1.TextValueAccessor,
    checked_value_accessor_1.CheckedValueAccessor,
    date_value_accessor_1.DateValueAccessor,
    time_value_accessor_1.TimeValueAccessor,
    selectedIndex_value_accessor_1.SelectedIndexValueAccessor,
    number_value_accessor_1.NumberValueAccessor,
    action_bar_1.ActionBarComponent,
    action_bar_1.ActionBarScope,
    action_bar_1.ActionItemDirective,
    action_bar_1.NavigationButtonDirective
];
//# sourceMappingURL=ns-directives.js.map