import Customers from './Customers/Customers';
import Menu from './Menu/Menu';

export const App = () => {
  return (
    <div className="layout">
      <Menu />
      <div className="layout__content">
        <div className="layout__text">Hello Evano 👋🏼,</div>
        <Customers />
      </div>
    </div>
  );
};
