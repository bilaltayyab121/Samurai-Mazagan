import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  const formatPath = (path) => {
    return path
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const generateCrumbLink = (index) => {
    return '/' + paths.slice(0, index + 1).join('/');
  };

  return (
    <div className="relative py-8 bg-background/50 backdrop-blur-sm border-b border-white/5">
      <div className="container-custom">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-2 text-sm"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-gray hover:text-primary transition-colors duration-300 group"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Home</span>
          </Link>

          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;
            return (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray/50" />
                {isLast ? (
                  <span className="text-primary font-semibold">{formatPath(path)}</span>
                ) : (
                  <Link
                    to={generateCrumbLink(index)}
                    className="text-gray hover:text-primary transition-colors duration-300"
                  >
                    {formatPath(path)}
                  </Link>
                )}
              </div>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
