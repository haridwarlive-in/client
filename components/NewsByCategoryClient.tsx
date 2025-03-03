"use client"
import { News } from '@/types';
import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Calendar } from 'lucide-react';
import LocaleDate from './LocaleDate';
import ButtonClient from './ButtonClient';

const NewsByCategory = ({news, category}: {news: News[], category: string}) => {
  return (
    <div className="mb-4 mt-4 p-1 md:p-4">
      {/* Category Title */}
      <h2 className="md:text-xl text-md font-medium md:mb-2 mb-2">{category}</h2>

      {/* Displaying 4 news items in a row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {news.slice(0, 4).map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow transition-shadow">
            <Image
              src={item.image as string}
              alt={`Image for ${item.title}`}
              className="w-full h-24 md:h-48 object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
              width={200}
              height={100}
            />
            <CardHeader className="max-md:p-2 p-3">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <LocaleDate date={item.date} />
              </div>
              <CardTitle className="text-md">
                {item.title}
              </CardTitle>
              <span className="w-fit inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                {item.category}
              </span>
            </CardHeader>
            <CardFooter className="px-2 py-0">
              <ButtonClient id={item._id} title={item.urlTitle}/>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default React.memo(NewsByCategory);