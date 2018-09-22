import api from '../mail-data.json';

import { normalize, schema } from 'normalizr';

let data = { emails: api };
console.log(data);

const attachement = new schema.Entity('attachement', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, email:parent.id}) 
})

const email = new schema.Entity('emails', {
  attachements: new schema.Array(attachement)
  })


const emails = {emails: new schema.Array(email)}

const normalizedData = normalize(data, emails)

console.log(normalizedData)

export default normalizedData;