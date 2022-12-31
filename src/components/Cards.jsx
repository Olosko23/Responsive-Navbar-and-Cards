import React from 'react'

const Cards = () => {
    const cards = [
        {
            id:1,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:2,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:3,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:4,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:5,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:6,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:7,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:8,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
        {
            id:9,
            title: "Title",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus iste voluptatum quisquam perspiciatis eveniet ab sapiente consectetur fugiat mollitia veniam atque perferendis, consequatur voluptates pariaturtempore! Cumque et harum minima?"
        },
    ]
  return (
    <div className="absolute mt-10 pt-5 w-full h-full">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                cards.map(({id,title,content}) => (
                    <div key={id} className="py-5 px-5">
                    <p className="text-4xl">{title}</p>
                    <p>{content}<br/>
                    <p>{content}</p>
                    </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards