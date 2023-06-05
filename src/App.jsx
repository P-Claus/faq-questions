import { useState } from 'react';
import Title from './Title';
import data from './data';
import MenuItems from './MenuItems';
import Categories from './Categories';

// const tempCategories = data.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// console.log(tempCategories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [recipes, setRecipes] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'all') {
      setRecipes(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setRecipes(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <MenuItems recipes={recipes} />
      </section>
    </main>
  );
};
export default App;
