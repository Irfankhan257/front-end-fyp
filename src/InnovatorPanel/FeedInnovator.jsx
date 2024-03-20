import React from 'react'
import CardList from '../Components/CardList';

export const FeedInnovator = () => {

  const cardData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    }, {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      title: 'De fuga fugiat lorem ispum laboriosam expedita.',
      description: 'Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...',
    },
  ];

  return (
    <>
       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map(card => (
        <CardList key={card.id} imageUrl={card.imageUrl} title={card.title} description={card.description} />
      ))}
    </div>
    </>
  )
}
