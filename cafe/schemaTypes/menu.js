import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menu',
    title: 'Menu Page',
    type: 'document',
    _type: 'menu',
    fields: [
        defineField({
            name: 'menuInfo',
            title: 'Menu Info',
            type: 'text',
        }),
    ],
})