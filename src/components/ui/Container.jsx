function Container({ className, children }) {
  return (
    <div
      className={`w-full h-full max-w-340 mx-auto px-16  md:max-w-1169 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
