/**
 * ScrollToTop Component
 *
 * This component automatically scrolls the page to the top whenever the route changes.
 * It listens to pathname changes using React Router's useLocation hook and triggers
 * a smooth scroll to the top of the page on every navigation.
 *
 * Usage:
 * - Place this component at the root level of your Router (in App.tsx)
 * - It renders nothing (returns null) but provides the scroll behavior
 * - Works automatically for all route changes throughout the application
 *
 * Why it's needed:
 * React Router doesn't automatically scroll to top on route changes by default,
 * which can leave users in the middle of a page when navigating to new routes.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page smoothly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // This component doesn't render any UI - it only provides scroll behavior
  return null;
}
