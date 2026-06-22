// Games and Grub content schema. One singleton document the owners edit.
// Field names match data.json exactly, so the website renders Sanity content with no mapping.
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'siteContent',
  title: 'Site Content',
  type: 'document',
  fields: [
    defineField({
      name: 'site', title: 'Basics', type: 'object',
      fields: [
        { name: 'place', title: 'Hero location line (e.g. Navy Point, Pensacola)', type: 'string' },
        { name: 'tagline', title: 'Hero tagline', type: 'text', rows: 3 },
        { name: 'addressLine1', title: 'Street address', type: 'string' },
        { name: 'addressLine2', title: 'City line (e.g. Navy Point, Pensacola, FL)', type: 'string' },
        { name: 'phone', title: 'Phone (e.g. (850) 287-9430)', type: 'string' },
      ],
    }),
    defineField({
      name: 'hours', title: 'Hours', type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'day', title: 'Day (0=Sun … 6=Sat)', type: 'number', validation: (r) => r.required().min(0).max(6) },
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'open', title: 'Opens (24h, e.g. 11:00). Leave blank if closed.', type: 'string' },
          { name: 'close', title: 'Closes (24h, e.g. 22:00 or 02:00 for after midnight).', type: 'string' },
        ],
        preview: { select: { title: 'label', subtitle: 'open' } },
      })],
    }),
    defineField({
      name: 'specials', title: 'Weekly Specials', type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'day', title: 'Day (0=Sun … 6=Sat)', type: 'number', validation: (r) => r.required().min(0).max(6) },
          { name: 'code', title: 'Short label (SUN, MON …)', type: 'string' },
          { name: 'text', title: 'Special', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'code', subtitle: 'text' } },
      })],
    }),
    defineField({ name: 'familyNote', title: 'Family note (banner under specials)', type: 'string' }),
    defineField({ name: 'packagesNote', title: 'Every package includes', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'packages', title: 'Birthday Packages', type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'color', title: 'Color', type: 'string', options: { list: ['green', 'red', 'orange'] } },
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'price', title: 'Price (e.g. $70)', type: 'string' },
          { name: 'people', title: 'People (e.g. for 6 people)', type: 'string' },
          { name: 'items', title: 'What you get', type: 'array', of: [{ type: 'string' }] },
        ],
        preview: { select: { title: 'name', subtitle: 'price' } },
      })],
    }),
    defineField({
      name: 'menu', title: 'Menu Categories', type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          { name: 'title', title: 'Category title', type: 'string' },
          { name: 'kick', title: 'Subtitle (optional)', type: 'string' },
          { name: 'wide', title: 'Full width?', type: 'boolean', initialValue: false },
          { name: 'twocol', title: 'Two columns?', type: 'boolean', initialValue: false },
          { name: 'foot', title: 'Footnote (optional)', type: 'string' },
          {
            name: 'items', title: 'Items', type: 'array',
            of: [defineArrayMember({
              type: 'object',
              fields: [
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'desc', title: 'Description (optional)', type: 'string' },
                { name: 'price', title: 'Price (e.g. 8.95)', type: 'string' },
              ],
              preview: { select: { title: 'name', subtitle: 'price' } },
            })],
          },
        ],
        preview: { select: { title: 'title' } },
      })],
    }),
    defineField({ name: 'menuFoot', title: 'Menu footer note', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Games and Grub — Site Content' }) },
})
