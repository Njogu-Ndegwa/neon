interface PageHeaderProps {
    className?: string;
    children?: React.ReactNode;
    title: string;
    description?: string;
  }
  
  export default function PageHeader({
    className,
    children,
    title,
    description,
  }: PageHeaderProps) {
    return (
      <div className={`max-w-3xl mx-auto ${className || ""}`}>
        <div className="text-center">
          <div className="">
            <div className="">
              {/* Border with dots in corners */}
              {/* <div
                className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-gray-800/65 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)]"
                aria-hidden="true"
              /> */}
              <span className="relative text-gray-800 text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-50">
                {children}
              </span>
            </div>
          </div>
          <div>
            <h1 className="font-inter-tight text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-200 to-gray-200 pb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
  