import React from 'react'
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'Java', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'C++', count: 38 },
  { value: 'React', count: 30 },
  { value: 'JavaScript', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Python', count: 22 },
  { value: 'Firebase', count: 25 },
  { value: 'Git', count: 27 },
  { value: 'SQL', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 30 },
  { value: 'NPM', count: 11 },
]

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 5s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid White`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.value}
  </span>
)

export default () => (
  <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
)