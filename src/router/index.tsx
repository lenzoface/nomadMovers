import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

import Agreement from"../pages/Agreement/agreement";
import Reviews from"../pages/Reviews/reviews";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        {/* Добавляем новый маршрут для страницы отзывов */}
        <Route path="/reviews" component={Reviews} />
        <Route path="/agreement" component={Agreement} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
