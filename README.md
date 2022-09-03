# digifist-frontend-assignment
A simple commercial React app

<table>
    <tr>
        <td>Desktop</td>
        <td>Tablet</td>
        <td>Mobile</td>
    </tr>
    <tr>
        <td><img src='https://i.ibb.co/jD6TP11/desktop-design.png'></td>
        <td><img src='https://i.ibb.co/G2VkgPC/tablet-design.png'></td>
        <td><img src='https://i.ibb.co/YX6TzwH/mobile-design.png'></td>
    </tr>
</table>

## Installation

To start the app locally use the following commands:

```sh
npm install && npm start
```

If you get any error, it is possible that it's caused by mismatched node version. First install `nvm` then write the commands below to your terminal:

```sh
nvm install
nvm use
```

## Documentation
### Composition and Atomic Design
Composition is indeed one of the crucial pillars of React programming. To achieve this neat goal I utilized [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/). I was careful about not exceeding a predefined number of lines in any function to increase readability and maintainability.

### Swiper
The hardest part of the project for me was to create a customizable swiper from the scratch for different screen sizes and orientations. I did lots of maths on paper with various schemas ans drawings in order to obtain an adaptive swiper. It was an utterly educative process for me since this was the first time I attempted to create a swiper from the scratch (Some calls it carousel).

### Hooks
I relied on hooks heavily for various reasons from intricate business logic to data fetching. They saved me a lot of time and further made the project easy to read and understand.

### Last Thoughts
The time given for the project was short. Assuming I was working for my current company at the same time, I had only a scarce oppurtunity for building the basis of the project. I ,intentionally, didn't add any unit tests since I believe that in most cases they are waste of time. 
