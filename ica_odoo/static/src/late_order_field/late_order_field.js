/** @odoo-module */

import {registry} from "@web/core/registry";
import {booleanField, BooleanField} from "@web/views/fields/boolean/boolean_field";

class LateOrderBooleanField extends BooleanField {
    setup(){
        super.setup(...arguments);
        // console.log("Hello");
    }
}

LateOrderBooleanField.template = "ica_odoo.LateOrderBooleanField";

export const lateOrderBooleanField = {
    ...booleanField,
    component: LateOrderBooleanField
}

registry.category("fields").add("late_boolean", lateOrderBooleanField);
