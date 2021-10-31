import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css'

const Banner = () => {
    return (
        <>
        <Carousel className='carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src='https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/241237179_4352565818163675_2641553163519622589_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3wrfLr6FNM4AX-kO0YR&_nc_ht=scontent.fdac7-1.fna&oh=8f87e9d19e3a282294400e7c6270891b&oe=61847E47'
              alt="First slide"
            />
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src='https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/241652979_4306026339484290_1232867262040379378_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=WlKOQbd2mLkAX98vMjd&_nc_ht=scontent.fdac7-1.fna&oh=f3450fdd519a5e2fd3262dc9e2e7b74e&oe=6183618C'
              alt="Second slide"
            />
        
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src='https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/185826794_3969599549793639_2814359374863344503_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=8TRonfXMjvkAX-nQc80&_nc_ht=scontent.fdac7-1.fna&oh=5172dde9ceb8a85dd99812c8042d95a9&oe=61A57514'
              alt="Third slide"
            />
        
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
                </>
    );
};

export default Banner;