{
    "name": "ICA Odoo",
    "license": "LGPL-3",
    "depends": ["base", "web", "contacts"],
    "data": [
        "views/res_partner.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "ica_odoo/static/src/late_order_field/**/*",
            "ica_odoo/static/src/username_field/**/*",
        ]
    }
}
