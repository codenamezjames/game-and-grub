// One-shot: push the content merged from the old gamesandgrub.netlify.app site into Sanity.
// Run from studio/:  npx sanity login  &&  npx sanity exec scripts/add-netlify-content.js --with-user-token
// Safe to re-run: skips the menu insert if SIDE MISSIONS already exists. Leaves other owner edits alone.
import { readFileSync } from 'node:fs'
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2021-10-21' })
const data = JSON.parse(readFileSync(new URL('../../data.json', import.meta.url), 'utf8'))
const doc = await client.fetch('*[_type=="siteContent"][0]{_id, "titles": menu[].title}')
if (!doc) throw new Error('no siteContent document found')

let patch = client.patch(doc._id).set({
  'site.rate': data.site.rate,
  'site.email': data.site.email,
  stations: data.stations,
  events: data.events,
  menuFoot: data.menuFoot,
  'menu[].items[name=="Pika! Pika! Cheese"].desc': "Grilled cheese with the face of everyone's favorite yellow buddy.",
})
if (!doc.titles.includes('SIDE MISSIONS')) {
  const newCats = data.menu.filter((c) => c.title === 'SIDE MISSIONS' || c.title === 'MAIN QUESTS')
  patch = patch.insert('before', 'menu[0]', newCats)
}
await patch.commit({ autoGenerateArrayKeys: true })
console.log('Sanity updated:', doc._id)
