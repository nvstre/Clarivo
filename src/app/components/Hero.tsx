import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";


function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["life", "opportunities", "potential", "growth", "success"], []);

  useEffect(() => {
    let isMounted = true;
  
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setTitleNumber(prev => (prev === titles.length - 1 ? 0 : prev + 1));
      }
    }, 2000);
  
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [titleNumber, titles]);  

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Change your life and embrace new</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            test test test
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
