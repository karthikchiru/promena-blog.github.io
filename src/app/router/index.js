import { Route, Switch } from 'react-router-dom';
import Loader from 'app/components/loader';
import React from 'react';
import ForgotPassword from 'app/pages/forgotPassword';
import Header from '../pages/home/staticpages/header';
import Home from 'app/pages/home';
import Post from '../pages/home/posts';
import PageNotFound from '../pages/home/staticpages/pagenotfound';
import Footer from 'app/pages/home/staticpages/footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
    <Header/>
    <HelmetProvider>
    <Helmet>
      <title >Promena Blogs</title>
      <meta  name='description' content='promena blogs and its related info'/>
      <meta name='keywords' content='Technology, Content Writing, Digital Marketing'/>
    </Helmet>
    </HelmetProvider>
      <Switch>
        <Route exact path='/admin' component={() => { 
     window.location.href = 'http://promenablog.pythonanywhere.com/admin/login/?next=/admin/'; 
     return null;
}}/>
        <Route exact path='/forgotPassword' component={ForgotPassword} />
        <Route exact path='/' component={Home} />
        <Route exact path='/post/:postId' component={Post} />
        <Route path={'**'} component={PageNotFound} />
      </Switch>
 <Footer/>
    </React.Suspense>
  );
};

export default Router;
