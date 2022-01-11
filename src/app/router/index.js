import { Route, Switch } from 'react-router-dom';
import Loader from 'app/components/loader';
import React from 'react';
// import Login from 'app/pages/login';
import ForgotPassword from 'app/pages/forgotPassword';
// import Customer from 'app/pages/dashboard/index';
// import Header from '../containers/header/index';
// import ProtectedRoute from 'app/utils/protectedRoutes';
// import Registration from 'app/pages/registration';
import Header from '../pages/home/staticpages/header';
import Home from 'app/pages/home';
import Post from '../pages/home/posts';
import PageNotFound from '../pages/home/staticpages/pagenotfound';
import Footer from 'app/pages/home/staticpages/footer';
import { Helmet } from 'react-helmet';

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
    <Header/>
    <Helmet>
      <title >Promena Blogs</title>
      <meta  name='description' content='promena blogs and its related info'/>
      <meta name='keywords' content='Technology, Content Writing, Digital Marketing'/>
    </Helmet>
      <Switch>
        {/* <Route exact path='/' component={Login} /> */}
        <Route exact path='/admin' component={() => { 
     window.location.href = 'http://promenablog.pythonanywhere.com/admin/login/?next=/admin/'; 
     return null;
}}/>
        {/* <Route exact path='/registration' component={Registration} /> */}
        <Route exact path='/forgotPassword' component={ForgotPassword} />
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/home' component={Home} /> */}
        <Route exact path='/post/:postId' component={Post} />
        <Route path={'**'} component={PageNotFound} />
      </Switch>
 <Footer/>
    </React.Suspense>
  );
};

export default Router;
