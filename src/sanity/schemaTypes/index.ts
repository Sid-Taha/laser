import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { blogs } from './blogs'
import { user } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,blogs ,user],
}
