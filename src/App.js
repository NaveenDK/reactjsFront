import React, { useEffect } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
// Sections
import Blog from "./sections/Blog";
import About from "./sections/About";
import Intro from "./sections/Intro";
import Header from "./sections/Header";
import Resume from "./sections/Resume";
import Service from "./sections/Service";
import Contact from "./sections/Contact";
import Portfolio from "./sections/Portfolio";
import Testimonial from "./sections/Testimonial";
import BlogSinglePost from "./sections/BlogSinglePost";
// Components
import Helmet from "./components/Helmet";
import Switch from "./components/Switch";
import RedirectAs404 from "./components/RedirectAs404";

const routes = [
    {
        path: "/intro",
        component: <Intro />,
    },
    {
        path: "/about",
        component: <About />,
    },
    {
        path: "/resume",
        component: <Resume />,
    },
    {
        path: "/service",
        component: <Service />,
    },
    {
        path: "/portfolio",
        component: <Portfolio />,
    },
    {
        path: "/blog",
        component: <Blog />,
    },
    {
        path: "/blog/single-post",
        component: <BlogSinglePost />,
    },
    {
        path: "/testimonial",
        component: <Testimonial />,
    },
    {
        path: "/contact",
        component: <Contact />,
    },
];

function App() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-5 skin-5";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Helmet title="Home 5" />
            <Header />
            <Switch>
                <Route path={path} exact>
                    <Redirect
                        to={{
                            pathname: `${path}/intro`.replace(/([^:])(\/\/+)/g, "$1/"),
                        }}
                    />
                </Route>
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`} exact>
                        {item.component}
                    </Route>
                ))}
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
}

export default App;