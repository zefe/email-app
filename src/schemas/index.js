import api from '../mail-data.json';

import { normalize, schema } from 'normalizr';

const inbox = new schema.Entity('inbox', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category: parent.id}) 
})


const categories = {inbox: new schema.Array(inbox)}

const normalizedData = normalize(api, categories)
export default normalizedData;