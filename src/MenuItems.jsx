import MenuItem from './MenuItem';

const MenuItems = ({ recipes }) => {
  return (
    <div className='section-center'>
      {recipes.map((recipe) => {
        return <MenuItem key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};
export default MenuItems;
