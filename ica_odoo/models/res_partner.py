from odoo import api, fields, models


class ResPartner(models.Model):
    _inherit = 'res.partner'

    late_boolean = fields.Boolean(default=False)
    username = fields.Char(string='Username')
