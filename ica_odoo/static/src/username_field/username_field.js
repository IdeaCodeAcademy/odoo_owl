/** @odoo-module */

import {registry} from "@web/core/registry";
import {CharField, charField} from "@web/views/fields/char/char_field";
// import {Component, xml} from "@odoo/owl";
// import {lateOrderBooleanField} from "../late_order_field/late_order_field";
//
class UserNameField extends CharField {
    get emailDomain() {
        console.log("Hello Email Domain");
        // console.log(this.props.record.data.email)
        const {email} = this.props.record.data;
        console.log(email)
        // return 'ica.com';
        return email ? email.split('@')[1] : ''
    }
}

UserNameField.template = "ica_odoo.UserNameField";
UserNameField.components = {CharField};

// charField = {a:1,b:1,component:CharField}

export const usernameField = {
    ...charField,
    component: UserNameField,
}
registry.category("fields").add("username", usernameField);
