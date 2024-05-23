import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menu',
    title: 'Menu Page',
    type: 'document',
    _type: 'home',
    field: [
        defineField({
            name: 'menuInfo',
            title: 'Menu Info',
            type: 'text',
        }),
    ],
})