import { Route, Switch } from 'react-router-dom';
import Loader from 'app/components/loader';
import React from 'react';
import Login from 'app/pages/Login';
import ForgotPassword from 'app/pages/forgotPassword';
// import Customer from 'app/pages/dashboard/index';
// import Header from '../containers/header/index';
import ProtectedRoute from 'app/utils/protectedRoutes';
import Registration from 'app/pages/registration';
import Header from '../pages/home/staticpages/header';
import Home from 'app/pages/home';
import Post from '../pages/home/posts';
import PageNotFound from '../pages/home/staticpages/pagenotfound';
import Footer from 'app/pages/home/staticpages/footer';

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
    <Header/>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/forgotPassword' component={ForgotPassword} />
        {/* <ProtectedRoute exact path='/customer' component={Customer} /> */}
        <ProtectedRoute exact path='/home' component={Home} />
        <Route exact path='/post/:postId' component={Post} />
        <Route path={'**'} component={PageNotFound} />
      </Switch>
 <Footer/>
    </React.Suspense>
  );
};

export default Router;
