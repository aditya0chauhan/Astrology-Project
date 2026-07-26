import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import ScrollTop from "./ScrollTop";

const Layout = () => {
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const children = Array.from(root.children).filter((child) => child instanceof HTMLElement);

    if (!children.length) return;

    const revealChildren = () => {
      children.forEach((child, index) => {
        child.classList.add('reveal-block');
        child.classList.add('is-visible');
        child.style.transitionDelay = `${index * 90}ms`;
      });
    };

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      revealChildren();
      return undefined;
    }

    let fallbackTimer;
    let observer;

    const showChild = (child) => {
      child.classList.add('is-visible');
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showChild(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };

    observer = new IntersectionObserver(handleIntersect, { threshold: 0.14 });

    children.forEach((child, index) => {
      child.classList.add('reveal-block');
      child.style.transitionDelay = `${index * 90}ms`;
      observer.observe(child);
    });

    fallbackTimer = window.setTimeout(() => {
      revealChildren();
    }, 400);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
     <ScrollTop />
      <Header />
      <div ref={contentRef} className="page-content">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;