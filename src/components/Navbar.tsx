import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="text-2xl font-bold text-gold"
                        whileHover={{ scale: 1.05 }}
                    >
                        SwiftSane
                    </motion.div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-cream hover:text-gold">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-cream hover:text-gold">
                            How It Works
                        </a>
                        <a href="#security" className="text-cream hover:text-gold">
                            Security
                        </a>
                        <Button variant="primary" size="sm">
                            Request Demo
                        </Button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    [key: string]: any;
}) => {
    const baseStyles = 'font-semibold cursor-pointer inline-block';

    const variants = {
        primary: 'bg-gold text-navy hover:shadow-lg hover:shadow-gold/20',
        secondary: 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy',
        ghost: 'bg-transparent text-gold hover:bg-gold/10',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-md',
        md: 'px-6 py-3 text-base rounded-lg',
        lg: 'px-8 py-4 text-lg rounded-xl',
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export { Navbar, Button };
