import { useState } from 'react';
import test from './test.graphql';
import variables from './variables.graphql';
import characters from './characters.graphql';
import episodes from './episodes.graphql';
import locations from './locations.graphql';


const templates = [
  {
    id: '1',
    code: test,
    name: 'test'
  },
  {
    id: '5',
    code: variables,
    name: 'variables'
  },
  {
    id: '2',
    code: characters,
    name: 'characters'
  },
  {
    id: '3',
    code: episodes,
    name: 'episodes'
  },
  {
    id: '4',
    code: locations,
    name: 'locations'
  }
];

interface CodeTemplatesProps {
  setCode: (s: string) => void
}
export const CodeTemplates = ({
  setCode
}: CodeTemplatesProps) => {
  const [query, setQuery] = useState<string>('');

  const ok = () => {
    setCode(query)
  }

  return (
    <div className="" >
      <select name='tmpl' onChange={(e) => {
        setQuery(e.currentTarget.value)
      }}>
        <option>...</option>
        {templates.map(({ id, name, code }) => (
          <option value={code} key={id}>{name}</option>
        ))}
      </select>
      <button onClick={ok} type="button">Ok</button>
    </div>
  )
}