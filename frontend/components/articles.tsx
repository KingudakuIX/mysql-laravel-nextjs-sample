import { useArticles } from '@/hooks/articles';
import { Card } from 'antd';
import React from 'react'

function Articles() {

  const articles = useArticles();

  return (
    <div className='flex flex-col gap-2 mb-2'>
      <h2>Articles</h2>
      {
        articles.map(x => <Card className='cursor-pointer' key={x.attributes.slug}>{x.attributes.title}</Card>)
      }
    </div>
  )
}

export default Articles
