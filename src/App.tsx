import { Header } from './layout/Header';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { useTransition, animated } from 'react-spring'
import { Route, Switch, useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();

  // позволяет изъять элемент из DOM
  const trans = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)',
    }
  });

  return (
    <>
      <Header />
      <main className="container" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh' }}>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        {trans.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div style={{ position: 'absolute', width: '100%' }}>
              <Switch location={item}>
                <Route exact path='/about' component={About} />
                <Route exact path='/contacts' component={Contacts} />
              </Switch>
            </div>
          </animated.div>
        ))}
      </main>
    </>
  );
}

export default App;
