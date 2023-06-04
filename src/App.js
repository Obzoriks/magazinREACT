import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart'
// import Btn from './components/Button/Button.jsx'
import Header from './components/header/Header';
import Rate from './components/rate/rate';

import img1 from './assets/cart/img1.jpeg'
import img2 from './assets/cart/img2.jpeg'
import img3 from './assets/cart/img3.jpeg'
import img4 from './assets/cart/img4.jpeg'
import img5 from './assets/cart/img5.jpeg'
import img6 from './assets/cart/img6.jpeg'
import img7 from './assets/cart/img7.jpeg'
import img8 from './assets/cart/img8.jpeg'
import { wait } from '@testing-library/user-event/dist/utils';

const products = [
  {
    id: 1,
    image: img1,
    title: 'пиджак для чёрных',
    desc: 'Если вы чёрный то не переживайте. ВЫ будете особеными',
    price: '249',
    
  },
  {
    id: 2,
    image: img2,
    title: 'Пиджак для школы (института)!',
    desc: 'Если вам 36 и вы идёте в школу или институт то бирите это',
    price: 'СКИДКА 10% 199',
    
  },
  {
    id: 3,
    image: img3,
    title: 'пиджак джон уика',
    desc: 'не знаю. на этот пиджак плюнул джон уик (актёр великого боевика) данная сопля может содержать всю информацию такие как пароли почт жёны деньги и т д конечто мы бы узнали но пока есть время можете купить. Ведь мы компания которая самая добрая на этой земле. Поэтому прошу пока есть время вы можете дать нам денег мы вам одежду а также если хотите то может быть скидка если мы отдадим не с соплями а чистую.',
    price: '9999.99',
    
  },
  {
    id: 4,
    image: img4,
    title: 'Лучший премиальный пиджак от компании ПРОДАЙПОЧКУ!',
    desc: 'Если вас интересует данный товар то продайте почку и купите в рассрочку!',
    price: '9999.99',
    
  },
  {
    id: 5,
    image: img5,
    title: 'Лучший премиальный пиджак от компании ПРОДАЙПОЧКУ!',
    desc: 'Если вас интересует данный товар то продайте почку и купите в рассрочку!',
    price: '9999.99',
  },
  {
    id: 6,
    image: img6,
    title: 'Лучший премиальный пиджак от компании ПРОДАЙПОЧКУ!',
    desc: 'Если вас интересует данный товар то продайте почку и купите в рассрочку!',
    price: '9999.99',
    
  },
  {
    id: 7,
    image: img7,
    title: 'Лучший премиальный пиджак от компании ПРОДАЙПОЧКУ!',
    desc: 'Если вас интересует данный товар то продайте почку и купите в рассрочку!',
    price: '9999.99',
    
  },
  {
    id: 8,
    image: img8,
    title: 'Лучший премиальный пиджак от компании ПРОДАЙПОЧКУ!',
    desc: 'Если вас интересует данный товар то продайте почку и купите в рассрочку!',
    price: '9999.99',
   
  }
]

function App() {
  
  const [count, setcount] = useState(0)

	const increment = () => {
		setcount(count + 1)
	  }
   
    const del = () => {
      setcount(count <= 0 ? count : count - 1)
      
      
      

    }
  return (
    <div className="app">
      
      < Header
        saba={count}
        dei={del}
      />
      
     <main className='main'>
     { products.map(product => (
        <Cart 
        key={product.id}
        image={product.image}
        title={product.title}
        desc={product.desc}
        price={product.price}
        bbb={increment}
        
        />
      ))
     }
     </main>
     <Rate />
    </div>
  );
}

export default App;
